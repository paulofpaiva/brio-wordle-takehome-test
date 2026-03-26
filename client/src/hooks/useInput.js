import { useState, useCallback, useEffect } from 'react';

const WORD_LENGTH = 5;

function useInput({ status, onSubmit, onInvalidLength }) {
  const [currentGuess, setCurrentGuess] = useState('');

  const handleKey = useCallback(
    async (key) => {
      if (status !== 'playing') return;

      if (key === '⌫' || key === 'BACKSPACE') {
        setCurrentGuess((prev) => prev.slice(0, -1));
        return;
      }

      if (key === 'ENTER') {
        if (currentGuess.length < WORD_LENGTH) {
          onInvalidLength?.();
          return;
        }
        const accepted = await onSubmit(currentGuess);
        if (accepted) setCurrentGuess('');
        return;
      }

      if (/^[A-Z]$/.test(key) && currentGuess.length < WORD_LENGTH) {
        setCurrentGuess((prev) => prev + key);
      }
    },
    [status, currentGuess, onSubmit, onInvalidLength]
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

  return { currentGuess, handleKey };
}

export default useInput;
