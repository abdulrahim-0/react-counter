import { useEffect, useState } from 'react';
import { getNumberFact } from '../api/NumbersApi';
import './NumberFacts.css'; // Assuming you have some styles for the NumberFact component

interface Props {
  value: number;
}

function NumberFact({ value }: Props) {
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
    <div className="number-fact-container">
      <p className="number-fact-text">{fact}</p>
    </div>
  );
}

export default NumberFact;
