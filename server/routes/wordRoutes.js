const express = require('express');
const router = express.Router();
const { validateGuess } = require('../game/wordleEngine');
const { createSession, applyGuess, getSession } = require('../game/sessionStore');

// POST /api/game/new
// Starts a new game and returns the initial session state.
router.post('/game/new', (req, res) => {
  const state = createSession();
  res.status(201).json(state);
});

// GET /api/game/:gameId
// Returns the current state of a game.
router.get('/game/:gameId', (req, res) => {
  const state = getSession(req.params.gameId);
  if (!state) {
    return res.status(404).json({ error: 'Game not found' });
  }
  res.json(state);
});

// POST /api/game/:gameId/guess
// Submits a guess for an existing game.
router.post('/game/:gameId/guess', (req, res) => {
  const { guess } = req.body;

  if (!guess) {
    return res.status(400).json({ error: 'Missing field: guess' });
  }

  const state = getSession(req.params.gameId);
  if (!state) {
    return res.status(404).json({ error: 'Game not found' });
  }

  if (state.status !== 'playing') {
    return res.status(400).json({ error: 'Game is already over', status: state.status });
  }

  const validationError = validateGuess(guess);
  if (validationError) {
    return res.status(422).json({ error: validationError });
  }

  const updated = applyGuess(req.params.gameId, guess.toUpperCase());
  res.json(updated);
});

module.exports = router;
