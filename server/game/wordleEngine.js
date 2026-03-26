const { answers, validGuesses } = require('../data/words.json');

const WORD_LENGTH = 5;
const FEEDBACK = { GREEN: 'GREEN', YELLOW: 'YELLOW', GRAY: 'GRAY' };

const allValidWords = new Set([...answers, ...validGuesses]);

/**
 * Validates a guess against the game rules.
 * Returns null if valid, or an error message string if invalid.
 */
function validateGuess(guess) {
  if (typeof guess !== 'string') return 'Guess must be a string';

  const normalized = guess.toUpperCase();

  if (normalized.length !== WORD_LENGTH) {
    return `Guess must be exactly ${WORD_LENGTH} letters`;
  }

  if (!/^[A-Z]{5}$/.test(normalized)) {
    return 'Guess must contain only letters A-Z';
  }

  if (!allValidWords.has(normalized)) {
    return 'Not a valid word';
  }

  return null;
}

/**
 * Computes per-tile feedback for a guess against the answer.
 * Handles repeated letters correctly:
 *   - First pass marks GREEN (exact match).
 *   - Second pass marks YELLOW only for unmatched letters still available in the answer.
 *
 * @param {string} guess  - 5-letter guess (will be uppercased internally)
 * @param {string} answer - 5-letter answer (will be uppercased internally)
 * @returns {string[]} Array of 5 feedback values: 'GREEN' | 'YELLOW' | 'GRAY'
 */
function computeFeedback(guess, answer) {
  const g = guess.toUpperCase().split('');
  const a = answer.toUpperCase().split('');
  const result = Array(WORD_LENGTH).fill(FEEDBACK.GRAY);

  // Track remaining (unmatched) letters in the answer
  const remaining = {};

  // First pass: mark GREEN
  for (let i = 0; i < WORD_LENGTH; i++) {
    if (g[i] === a[i]) {
      result[i] = FEEDBACK.GREEN;
    } else {
      remaining[a[i]] = (remaining[a[i]] || 0) + 1;
    }
  }

  // Second pass: mark YELLOW for letters present but in wrong position
  for (let i = 0; i < WORD_LENGTH; i++) {
    if (result[i] === FEEDBACK.GREEN) continue;
    if (remaining[g[i]] > 0) {
      result[i] = FEEDBACK.YELLOW;
      remaining[g[i]]--;
    }
  }

  return result;
}

/**
 * Selects a random answer from the answers list.
 * @returns {string} A random 5-letter answer in uppercase.
 */
function pickRandomAnswer() {
  return answers[Math.floor(Math.random() * answers.length)];
}

module.exports = { validateGuess, computeFeedback, pickRandomAnswer, FEEDBACK };
