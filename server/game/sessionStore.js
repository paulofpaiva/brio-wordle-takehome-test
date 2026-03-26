const crypto = require('crypto');
const { pickRandomAnswer, computeFeedback, FEEDBACK } = require('./wordleEngine');

const MAX_ATTEMPTS = 6;

// In-memory store: gameId -> session object
const store = new Map();

/**
 * Derives the keyboard color map from all attempts made so far.
 * Priority: GREEN > YELLOW > GRAY (a GREEN lock beats a prior YELLOW).
 */
function buildKeyboardColors(attempts) {
  const priority = { [FEEDBACK.GREEN]: 3, [FEEDBACK.YELLOW]: 2, [FEEDBACK.GRAY]: 1 };
  const colors = {};

  for (const { guess, feedback } of attempts) {
    for (let i = 0; i < guess.length; i++) {
      const letter = guess[i];
      const fb = feedback[i];
      if (!colors[letter] || priority[fb] > priority[colors[letter]]) {
        colors[letter] = fb;
      }
    }
  }

  return colors;
}

/**
 * Creates a new game session and returns its initial state.
 * @returns {{ gameId: string, status: string, attemptsLeft: number, board: Array, keyboardColors: object }}
 */
function createSession() {
  const gameId = crypto.randomUUID();
  const session = {
    gameId,
    answer: pickRandomAnswer(),
    attempts: [],
    status: 'playing',
  };

  store.set(gameId, session);
  return serializeSession(session);
}

/**
 * Processes a guess for an existing session.
 * @param {string} gameId
 * @param {string} normalizedGuess - already validated, uppercased 5-letter word
 * @returns {object} Updated session state
 */
function applyGuess(gameId, normalizedGuess) {
  const session = store.get(gameId);
  if (!session) return null;

  const feedback = computeFeedback(normalizedGuess, session.answer);
  session.attempts.push({ guess: normalizedGuess, feedback });

  const won = feedback.every((f) => f === FEEDBACK.GREEN);

  if (won) {
    session.status = 'won';
  } else if (session.attempts.length >= MAX_ATTEMPTS) {
    session.status = 'lost';
  }

  return serializeSession(session);
}

/**
 * Returns the current state of a session, or null if not found.
 * @param {string} gameId
 */
function getSession(gameId) {
  const session = store.get(gameId);
  if (!session) return null;
  return serializeSession(session);
}

/**
 * Converts internal session to the public API shape:
 * - board: array of { guess, feedback } per attempt
 * - keyboardColors: map of letter -> best feedback color
 * - attemptsLeft: remaining guesses
 * - answer: only revealed when game is over
 */
function serializeSession(session) {
  const isOver = session.status !== 'playing';
  return {
    gameId: session.gameId,
    status: session.status,
    attemptsLeft: MAX_ATTEMPTS - session.attempts.length,
    board: session.attempts.map(({ guess, feedback }) => ({ guess, feedback })),
    keyboardColors: buildKeyboardColors(session.attempts),
    ...(isOver && { answer: session.answer }),
  };
}

module.exports = { createSession, applyGuess, getSession };
