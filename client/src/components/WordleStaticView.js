function WordleStaticView() {
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
      {/* Board - 6 rows of 5 tiles each */}
      <div style={{ marginBottom: '30px' }}>
        {/* Row 1 - Completed guess */}
        <div style={{ display: 'flex', gap: '5px', marginBottom: '5px' }}>
          <div
            style={{
              width: '62px',
              height: '62px',
              border: '2px solid #878a8c',
              backgroundColor: '#6aaa64',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#ffffff',
              textTransform: 'uppercase',
            }}
          >
            S
          </div>
          <div
            style={{
              width: '62px',
              height: '62px',
              border: '2px solid #878a8c',
              backgroundColor: '#c9b458',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#ffffff',
              textTransform: 'uppercase',
            }}
          >
            T
          </div>
          <div
            style={{
              width: '62px',
              height: '62px',
              border: '2px solid #878a8c',
              backgroundColor: '#787c7e',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#ffffff',
              textTransform: 'uppercase',
            }}
          >
            A
          </div>
          <div
            style={{
              width: '62px',
              height: '62px',
              border: '2px solid #878a8c',
              backgroundColor: '#c9b458',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#ffffff',
              textTransform: 'uppercase',
            }}
          >
            R
          </div>
          <div
            style={{
              width: '62px',
              height: '62px',
              border: '2px solid #878a8c',
              backgroundColor: '#787c7e',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#ffffff',
              textTransform: 'uppercase',
            }}
          >
            T
          </div>
        </div>

        {/* Row 2 - Completed guess */}
        <div style={{ display: 'flex', gap: '5px', marginBottom: '5px' }}>
          <div
            style={{
              width: '62px',
              height: '62px',
              border: '2px solid #878a8c',
              backgroundColor: '#6aaa64',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#ffffff',
              textTransform: 'uppercase',
            }}
          >
            S
          </div>
          <div
            style={{
              width: '62px',
              height: '62px',
              border: '2px solid #878a8c',
              backgroundColor: '#787c7e',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#ffffff',
              textTransform: 'uppercase',
            }}
          >
            H
          </div>
          <div
            style={{
              width: '62px',
              height: '62px',
              border: '2px solid #878a8c',
              backgroundColor: '#6aaa64',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#ffffff',
              textTransform: 'uppercase',
            }}
          >
            A
          </div>
          <div
            style={{
              width: '62px',
              height: '62px',
              border: '2px solid #878a8c',
              backgroundColor: '#787c7e',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#ffffff',
              textTransform: 'uppercase',
            }}
          >
            K
          </div>
          <div
            style={{
              width: '62px',
              height: '62px',
              border: '2px solid #878a8c',
              backgroundColor: '#6aaa64',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#ffffff',
              textTransform: 'uppercase',
            }}
          >
            E
          </div>
        </div>

        {/* Row 3 - Current guess in progress */}
        <div style={{ display: 'flex', gap: '5px', marginBottom: '5px' }}>
          <div
            style={{
              width: '62px',
              height: '62px',
              border: '2px solid #878a8c',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#000000',
              textTransform: 'uppercase',
            }}
          >
            W
          </div>
          <div
            style={{
              width: '62px',
              height: '62px',
              border: '2px solid #878a8c',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#000000',
              textTransform: 'uppercase',
            }}
          >
            O
          </div>
          <div
            style={{
              width: '62px',
              height: '62px',
              border: '2px solid #878a8c',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#000000',
              textTransform: 'uppercase',
            }}
          >
            R
          </div>
          <div
            style={{
              width: '62px',
              height: '62px',
              border: '2px solid #d3d6da',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
            }}
          ></div>
          <div
            style={{
              width: '62px',
              height: '62px',
              border: '2px solid #d3d6da',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
            }}
          ></div>
        </div>

        {/* Row 4 - Empty */}
        <div style={{ display: 'flex', gap: '5px', marginBottom: '5px' }}>
          <div
            style={{
              width: '62px',
              height: '62px',
              border: '2px solid #d3d6da',
            }}
          ></div>
          <div
            style={{
              width: '62px',
              height: '62px',
              border: '2px solid #d3d6da',
            }}
          ></div>
          <div
            style={{
              width: '62px',
              height: '62px',
              border: '2px solid #d3d6da',
            }}
          ></div>
          <div
            style={{
              width: '62px',
              height: '62px',
              border: '2px solid #d3d6da',
            }}
          ></div>
          <div
            style={{
              width: '62px',
              height: '62px',
              border: '2px solid #d3d6da',
            }}
          ></div>
        </div>

        {/* Row 5 - Empty */}
        <div style={{ display: 'flex', gap: '5px', marginBottom: '5px' }}>
          <div
            style={{
              width: '62px',
              height: '62px',
              border: '2px solid #d3d6da',
            }}
          ></div>
          <div
            style={{
              width: '62px',
              height: '62px',
              border: '2px solid #d3d6da',
            }}
          ></div>
          <div
            style={{
              width: '62px',
              height: '62px',
              border: '2px solid #d3d6da',
            }}
          ></div>
          <div
            style={{
              width: '62px',
              height: '62px',
              border: '2px solid #d3d6da',
            }}
          ></div>
          <div
            style={{
              width: '62px',
              height: '62px',
              border: '2px solid #d3d6da',
            }}
          ></div>
        </div>

        {/* Row 6 - Empty */}
        <div style={{ display: 'flex', gap: '5px', marginBottom: '5px' }}>
          <div
            style={{
              width: '62px',
              height: '62px',
              border: '2px solid #d3d6da',
            }}
          ></div>
          <div
            style={{
              width: '62px',
              height: '62px',
              border: '2px solid #d3d6da',
            }}
          ></div>
          <div
            style={{
              width: '62px',
              height: '62px',
              border: '2px solid #d3d6da',
            }}
          ></div>
          <div
            style={{
              width: '62px',
              height: '62px',
              border: '2px solid #d3d6da',
            }}
          ></div>
          <div
            style={{
              width: '62px',
              height: '62px',
              border: '2px solid #d3d6da',
            }}
          ></div>
        </div>
      </div>
      {/* Keyboard */}
      <div style={{ width: '100%', maxWidth: '500px' }}>
        {/* Row 1 */}
        <div
          style={{
            display: 'flex',
            gap: '6px',
            marginBottom: '8px',
            justifyContent: 'center',
          }}
        >
          {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map((letter) => (
            <div
              key={letter}
              style={{
                minWidth: '43px',
                height: '58px',
                backgroundColor: '#d3d6da',
                border: 'none',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              {letter}
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div
          style={{
            display: 'flex',
            gap: '6px',
            marginBottom: '8px',
            justifyContent: 'center',
            paddingLeft: '20px',
          }}
        >
          {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map((letter) => (
            <div
              key={letter}
              style={{
                minWidth: '43px',
                height: '58px',
                backgroundColor:
                  letter === 'S' || letter === 'A'
                    ? '#6aaa64'
                    : letter === 'K' ||
                        letter === 'H' ||
                        letter === 'D' ||
                        letter === 'F'
                      ? '#787c7e'
                      : '#d3d6da',
                color:
                  letter === 'S' ||
                  letter === 'A' ||
                  letter === 'K' ||
                  letter === 'H' ||
                  letter === 'D' ||
                  letter === 'F'
                    ? '#ffffff'
                    : '#000000',
                border: 'none',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              {letter}
            </div>
          ))}
        </div>

        {/* Row 3 */}
        <div
          style={{
            display: 'flex',
            gap: '6px',
            marginBottom: '8px',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              minWidth: '65px',
              height: '58px',
              backgroundColor: '#d3d6da',
              border: 'none',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            ENTER
          </div>
          {['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map((letter) => (
            <div
              key={letter}
              style={{
                minWidth: '43px',
                height: '58px',
                backgroundColor: '#d3d6da',
                border: 'none',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              {letter}
            </div>
          ))}
          <div
            style={{
              minWidth: '65px',
              height: '58px',
              backgroundColor: '#d3d6da',
              border: 'none',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            ⌫
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default WordleStaticView;
