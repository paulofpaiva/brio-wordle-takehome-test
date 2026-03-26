import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import WordleGame from './components/WordleGame';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <WordleGame />
      </div>
    </QueryClientProvider>
  );
}

export default App;
