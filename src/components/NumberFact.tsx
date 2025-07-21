import { JSX, useEffect, useState } from 'react';
import { getNumberFact } from '../api/NumbersApi';

interface NumberFactProps {
  value: number;
}

function NumberFact({ value }: NumberFactProps): JSX.Element {
  const [fact, setFact] = useState<string>('Loading...');

  useEffect(() => {
    const fetchFact = async () => {
      try {
        const fact = await getNumberFact(value);
        setFact(fact);
      } catch (error) {
        setFact('Error fetching fact');
      }
    };

    fetchFact();
  }, [value]);

  return (
    <div
      style={{
        background: '#23272f',
        borderRadius: '8px',
        padding: '16px',
        marginTop: '16px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
        maxWidth: '400px',
      }}
    >
      <p
        style={{
          fontStyle: 'italic',
          color: '#e0e0e0',
          fontSize: '1.1rem',
          margin: 0,
          letterSpacing: '0.01em',
        }}
      >
        {fact}
      </p>
    </div>
  );
}

export default NumberFact;
