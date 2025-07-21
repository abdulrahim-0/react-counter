import { JSX, useState } from 'react';
import NumberFact from './NumberFact';
import { Button, Grid, ButtonGroup, Typography } from '@mui/material';

interface CounterProps {
  initialValue: number;
  step: number;
}

function Counter({ initialValue, step }: CounterProps): JSX.Element {
  const [counter, setCounter] = useState<number>(initialValue);
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center" // horizontally
      alignItems="center" // vertically
      direction="column"
      style={{ minHeight: '100vh', background: '#181A1B' }} // fill full screen height
    >
      <Grid size={12} style={{ textAlign: 'center' }}>
        <Typography variant="h4" style={{ textAlign: 'center' , color: '#FFFFFF' }}>
          Counter App
        </Typography>
      </Grid>
      <Grid size={12} style={{ textAlign: 'center' }}>
        <Typography variant="h2" style={{ color: '#FFFFFF' }}>{counter}</Typography>
      </Grid>
      <Grid size={12} style={{ textAlign: 'center' }}>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button onClick={() => setCounter(counter + step)}>Increment</Button>
          <Button color='error' onClick={() => setCounter(counter - step)}>Decrement</Button>
        </ButtonGroup>
      </Grid>
      <Grid
        container={true}
        size={12}
        style={{
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <NumberFact value={counter} />
      </Grid>
    </Grid>
  );
}

export default Counter;
