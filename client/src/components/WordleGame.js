import { useCallback, useState } from 'react';
import Board from './Board';
import OnScreenKeyboard from './OnScreenKeyboard';
import useGame from '../hooks/useGame';
import useInput from '../hooks/useInput';

const MAX_ATTEMPTS = 6;

function WordleGame() {
  const { board, keyboardColors, status, message, attemptsUsed, showMessage, startNewGame, submitGuess } = useGame();

  const [shake, setShake] = useState(false);

  const triggerShake = useCallback(() => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  }, []);

  const onInvalidLength = useCallback(() => {
    showMessage('Word must be 5 letters');
    triggerShake();
  }, [showMessage, triggerShake]);

  const handleSubmit = useCallback(
    async (guess) => {
      const accepted = await submitGuess(guess);
      if (!accepted) triggerShake();
      return accepted;
    },
    [submitGuess, triggerShake]
  );

  const { currentGuess, handleKey } = useInput({
    status,
    onSubmit: handleSubmit,
    onInvalidLength,
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      {/* Header — border spans full viewport width */}
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
            letterSpacing: '0.1em',
          }}
        >
          Wordle
        </h1>
      </div>

      {/* Game content area — constrained width, relative for toast positioning */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '500px',
          padding: '0 16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Floating toast message */}
        {message && (
          <div
            style={{
              position: 'absolute',
              top: '-12px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#000000',
              color: '#ffffff',
              padding: '10px 20px',
              borderRadius: '6px',
              fontWeight: 'bold',
              fontSize: '14px',
              whiteSpace: 'nowrap',
              zIndex: 10,
            }}
          >
            {message}
          </div>
        )}

        {/* Attempt counter */}
        <p
          style={{
            fontSize: '13px',
            color: '#787c7e',
            margin: '0 0 12px',
            alignSelf: 'flex-end',
          }}
        >
          {attemptsUsed}/{MAX_ATTEMPTS}
        </p>

        <Board board={board} currentGuess={currentGuess} status={status} shake={shake} />

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
      </div>
    </div>
  );
}

export default WordleGame;
