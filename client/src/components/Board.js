import Tile from './Tile';

const MAX_ROWS = 6;
const WORD_LENGTH = 5;

function Board({ board, currentGuess, status }) {
  const rows = [];

  for (let i = 0; i < MAX_ROWS; i++) {
    if (i < board.length) {
      rows.push({ letters: board[i].guess.split(''), feedback: board[i].feedback });
    } else if (i === board.length && status === 'playing') {
      const letters = currentGuess.split('');
      while (letters.length < WORD_LENGTH) letters.push('');
      rows.push({ letters, feedback: null });
    } else {
      rows.push({ letters: Array(WORD_LENGTH).fill(''), feedback: null });
    }
  }

  return (
    <div style={{ marginBottom: '30px' }}>
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          style={{ display: 'flex', gap: '5px', marginBottom: '5px' }}
        >
          {row.letters.map((letter, colIndex) => (
            <Tile
              key={colIndex}
              letter={letter}
              feedback={row.feedback ? row.feedback[colIndex] : null}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;
