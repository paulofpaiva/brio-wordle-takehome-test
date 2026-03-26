const ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫'],
];

const FEEDBACK_KEY_COLORS = {
  GREEN: { background: '#6aaa64', color: '#ffffff' },
  YELLOW: { background: '#c9b458', color: '#ffffff' },
  GRAY: { background: '#787c7e', color: '#ffffff' },
};

function Key({ label, feedback, onKey }) {
  const isWide = label === 'ENTER' || label === '⌫';
  const colors = feedback ? FEEDBACK_KEY_COLORS[feedback] : { background: '#d3d6da', color: '#000000' };

  return (
    <div
      onClick={() => onKey(label)}
      style={{
        flex: isWide ? 1.5 : 1,
        height: '58px',
        backgroundColor: colors.background,
        color: colors.color,
        border: 'none',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: isWide ? '12px' : '14px',
        fontWeight: 'bold',
        cursor: 'pointer',
        userSelect: 'none',
      }}
    >
      {label}
    </div>
  );
}

function OnScreenKeyboard({ keyboardColors, onKey }) {
  return (
    <div style={{ width: '100%', maxWidth: '500px' }}>
      {ROWS.map((row, rowIndex) => (
        <div
          key={rowIndex}
          style={{
            display: 'flex',
            gap: '6px',
            marginBottom: '8px',
          }}
        >
          {row.map((label) => (
            <Key
              key={label}
              label={label}
              feedback={keyboardColors[label]}
              onKey={onKey}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default OnScreenKeyboard;
