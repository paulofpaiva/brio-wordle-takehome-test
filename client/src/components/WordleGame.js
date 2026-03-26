import { useEffect, useCallback } from 'react';
import Board from './Board';
import OnScreenKeyboard from './OnScreenKeyboard';
import useGame from '../hooks/useGame';
import useInput from '../hooks/useInput';

function WordleGame() {
  const { board, keyboardColors, status, message, showMessage, startNewGame, submitGuess } = useGame();

  const onInvalidLength = useCallback(() => {
    showMessage('Word must be 5 letters');
  }, [showMessage]);

  const { currentGuess, handleKey } = useInput({
    status,
    onSubmit: submitGuess,
    onInvalidLength,
  });

  useEffect(() => {
    startNewGame();
  }, [startNewGame]);

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
