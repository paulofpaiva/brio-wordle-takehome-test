import { useState, useCallback } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const SHOW_MESSAGE_DURATION_MS = 2000;
const STORAGE_KEY = 'wordle_game_id';

async function createNewGame() {
  const res = await fetch('/api/game/new', { method: 'POST' });
  if (!res.ok) throw new Error('Failed to start game');
  const data = await res.json();
  localStorage.setItem(STORAGE_KEY, data.gameId);
  return data;
}

function useGame() {
  const queryClient = useQueryClient();
  const [gameKey, setGameKey] = useState(0);
  const [message, setMessage] = useState('');

  const showMessage = useCallback((msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(''), SHOW_MESSAGE_DURATION_MS);
  }, []);

  // useQuery deduplicates concurrent requests with the same key,
  // so StrictMode's double-mount never fires the POST twice.
  const { data: gameState } = useQuery({
    queryKey: ['game', gameKey],
    queryFn: async () => {
      // On initial load try to restore a saved session from localStorage
      if (gameKey === 0) {
        const savedId = localStorage.getItem(STORAGE_KEY);
        if (savedId) {
          const res = await fetch(`/api/game/${savedId}`);
          if (res.ok) {
            const session = await res.json();
            // Don't restore a finished game — start a fresh one
            if (session.status === 'playing') return session;
          }
        }
      }
      return createNewGame();
    },
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

  const startNewGame = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setGameKey((k) => k + 1);
    setMessage('');
  }, []);

  const { mutateAsync } = useMutation({
    mutationFn: async (guess) => {
      const res = await fetch(`/api/game/${gameState?.gameId}/guess`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ guess }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Invalid guess');
      return data;
    },
    onSuccess: (data) => {
      queryClient.setQueryData(['game', gameKey], data);
      if (data.status === 'won') showMessage('Brilliant! 🎉');
      if (data.status === 'lost') showMessage(`The word was ${data.answer}`);
    },
    onError: (err) => {
      showMessage(err.message);
    },
  });

  const submitGuess = useCallback(
    async (guess) => {
      try {
        await mutateAsync(guess);
        return true;
      } catch {
        return false;
      }
    },
    [mutateAsync]
  );

  return {
    board: gameState?.board ?? [],
    keyboardColors: gameState?.keyboardColors ?? {},
    status: gameState?.status ?? 'playing',
    attemptsUsed: gameState?.board?.length ?? 0,
    message,
    showMessage,
    startNewGame,
    submitGuess,
  };
}

export default useGame;
