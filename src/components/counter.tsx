import { useState } from 'react';

function counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f4f8',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <h1 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '20px' }}>
        Counter App
      </h1>
      <div
        style={{
          fontSize: '2rem',
          color: '#555',
          marginBottom: '30px',
          padding: '10px 20px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}
      >
        {counter}
      </div>
      <div>
        <button
          style={{
            padding: '12px 25px',
            fontSize: '1rem',
            cursor: 'pointer',
            margin: '10px',
            border: 'none',
            borderRadius: '5px',
            backgroundColor: '#4CAF50',
            color: 'white',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.3s ease'
          }}
          onClick={() => setCounter(counter + 1)}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = '#45a049')
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = '#4CAF50')
          }
        >
          Increment
        </button>
        <button
          style={{
            padding: '12px 25px',
            fontSize: '1rem',
            cursor: 'pointer',
            margin: '10px',
            border: 'none',
            borderRadius: '5px',
            backgroundColor: '#f44336',
            color: 'white',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.3s ease'
          }}
          onClick={() => setCounter(counter - 1)}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = '#d32f2f')
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = '#f44336')
          }
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default counter;
