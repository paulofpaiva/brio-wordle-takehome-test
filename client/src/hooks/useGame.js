import { useState, useCallback } from 'react';

const SHOW_MESSAGE_DURATION_MS = 2000;

function useGame() {
  const [gameId, setGameId] = useState(null);
  const [board, setBoard] = useState([]);
  const [keyboardColors, setKeyboardColors] = useState({});
  const [status, setStatus] = useState('playing');
  const [message, setMessage] = useState('');

  const showMessage = useCallback((msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(''), SHOW_MESSAGE_DURATION_MS);
  }, []);

  const startNewGame = useCallback(async () => {
    try {
      const res = await fetch('/api/game/new', { method: 'POST' });
      const data = await res.json();
      setGameId(data.gameId);
      setBoard([]);
      setKeyboardColors({});
      setStatus('playing');
      setMessage('');
    } catch {
      showMessage('Failed to start game. Is the server running?');
    }
  }, [showMessage]);

  const submitGuess = useCallback(
    async (guess) => {
      if (!gameId) return;

      try {
        const res = await fetch(`/api/game/${gameId}/guess`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ guess }),
        });

        const data = await res.json();

        if (!res.ok) {
          showMessage(data.error || 'Invalid guess');
          return false;
        }

        setBoard(data.board);
        setKeyboardColors(data.keyboardColors);
        setStatus(data.status);

        if (data.status === 'won') showMessage('Brilliant! 🎉');
        if (data.status === 'lost') showMessage(`The word was ${data.answer}`);

        return true;
      } catch {
        showMessage('Something went wrong');
        return false;
      }
    },
    [gameId, showMessage]
  );

  return { board, keyboardColors, status, message, showMessage, startNewGame, submitGuess };
}

export default useGame;
