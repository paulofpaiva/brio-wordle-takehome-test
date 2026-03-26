import { useState, useEffect, useCallback } from 'react';
import Board from './Board';
import OnScreenKeyboard from './OnScreenKeyboard';

function WordleGame() {
  const [gameId, setGameId] = useState(null);
  const [board, setBoard] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [keyboardColors, setKeyboardColors] = useState({});
  const [status, setStatus] = useState('playing');
  const [message, setMessage] = useState('');

  const startNewGame = useCallback(async () => {
    try {
      const res = await fetch('/api/game/new', { method: 'POST' });
      const data = await res.json();
      setGameId(data.gameId);
      setBoard([]);
      setCurrentGuess('');
      setKeyboardColors({});
      setStatus('playing');
      setMessage('');
    } catch {
      setMessage('Failed to start game. Is the server running?');
    }
  }, []);

  useEffect(() => {
    startNewGame();
  }, [startNewGame]);

  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(''), 2000);
  };

  const submitGuess = useCallback(async () => {
    if (!gameId || currentGuess.length < 5) {
      showMessage('Word must be 5 letters');
      return;
    }

    try {
      const res = await fetch(`/api/game/${gameId}/guess`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ guess: currentGuess }),
      });

      const data = await res.json();

      if (!res.ok) {
        showMessage(data.error || 'Invalid guess');
        return;
      }

      setBoard(data.board);
      setKeyboardColors(data.keyboardColors);
      setStatus(data.status);
      setCurrentGuess('');

      if (data.status === 'won') {
        setMessage('Brilliant! 🎉');
      } else if (data.status === 'lost') {
        setMessage(`The word was ${data.answer}`);
      }
    } catch {
      showMessage('Something went wrong');
    }
  }, [gameId, currentGuess]);

  const handleKey = useCallback(
    (key) => {
      if (status !== 'playing') return;

      if (key === '⌫' || key === 'BACKSPACE') {
        setCurrentGuess((prev) => prev.slice(0, -1));
        return;
      }

      if (key === 'ENTER') {
        submitGuess();
        return;
      }

      if (/^[A-Z]$/.test(key) && currentGuess.length < 5) {
        setCurrentGuess((prev) => prev + key);
      }
    },
    [status, currentGuess, submitGuess]
  );

  useEffect(() => {
    const onKeyDown = (e) => {
      const key = e.key.toUpperCase();
      if (key === 'BACKSPACE' || key === 'ENTER' || /^[A-Z]$/.test(key)) {
        handleKey(key);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [handleKey]);

  return (
    <>
      <div
        style={{
          borderBottom: '1px solid #d3d6da',
          width: '100%',
          padding: '16px 0',
          marginBottom: '20px',
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            fontSize: '36px',
            fontWeight: 'bold',
            margin: 0,
          }}
        >
          Wordle
        </h1>
      </div>

      {message && (
        <div
          style={{
            backgroundColor: '#000000',
            color: '#ffffff',
            padding: '10px 20px',
            borderRadius: '6px',
            fontWeight: 'bold',
            fontSize: '14px',
            marginBottom: '16px',
          }}
        >
          {message}
        </div>
      )}

      <Board board={board} currentGuess={currentGuess} status={status} />

      <OnScreenKeyboard keyboardColors={keyboardColors} onKey={handleKey} />

      {status !== 'playing' && (
        <button
          onClick={startNewGame}
          style={{
            marginTop: '20px',
            padding: '12px 28px',
            fontSize: '16px',
            fontWeight: 'bold',
            backgroundColor: '#6aaa64',
            color: '#ffffff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          New Game
        </button>
      )}
    </>
  );
}

export default WordleGame;
