import { useState } from 'react';
import { CounterProps } from '../types/counter';
import NumberFact from './NumberFact';

function counter(props: CounterProps) {
  const [counter, setCounter] = useState<number>(props.initialValue);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#181a1b',
        fontFamily: 'Arial, sans-serif',
        color: '#f5f6fa'
      }}
    >
      <h1 style={{ fontSize: '2.5rem', color: '#f5f6fa', marginBottom: '20px' }}>
        Counter App
      </h1>
      <div
        style={{
          fontSize: '2rem',
          color: '#e1e1e6',
          marginBottom: '30px',
          padding: '10px 20px',
          backgroundColor: '#23272f',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
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
            backgroundColor: '#2563eb',
            color: '#f5f6fa',
            boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
            transition: 'background-color 0.3s ease'
          }}
          onClick={() => setCounter(counter + props.step)}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = '#1e40af')
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = '#2563eb')
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
            backgroundColor: '#dc2626',
            color: '#f5f6fa',
            boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
            transition: 'background-color 0.3s ease'
          }}
          onClick={() => setCounter(counter - props.step)}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = '#991b1b')
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = '#dc2626')
          }
        >
          Decrement
        </button>
      </div>
      <NumberFact value={counter} />
    </div>
  );
}

export default counter;
