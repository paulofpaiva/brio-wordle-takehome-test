const FEEDBACK_COLORS = {
  GREEN: { background: '#6aaa64', color: '#ffffff' },
  YELLOW: { background: '#c9b458', color: '#ffffff' },
  GRAY: { background: '#787c7e', color: '#ffffff' },
};

function Tile({ letter, feedback }) {
  const hasFeedback = Boolean(feedback);
  const hasLetter = Boolean(letter);

  const borderColor = hasLetter || hasFeedback ? '#878a8c' : '#d3d6da';
  const backgroundColor = hasFeedback ? FEEDBACK_COLORS[feedback].background : 'transparent';
  const textColor = hasFeedback ? '#ffffff' : '#000000';

  return (
    <div
      style={{
        width: '62px',
        height: '62px',
        border: `2px solid ${borderColor}`,
        backgroundColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '32px',
        fontWeight: 'bold',
        color: textColor,
        textTransform: 'uppercase',
      }}
    >
      {letter || ''}
    </div>
  );
}

export default Tile;
