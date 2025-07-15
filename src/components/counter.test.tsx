import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './counter';

describe('counter tests', () => {

  it('shows up correctly', () => {
    render(<Counter initialValue={0} step={1} />);
  });

  it('increments the counter', () => {
    render(<Counter initialValue={0} step={1} />);
    const incrementButton = screen.getByText('Increment');
    const counterDisplay = screen.getByText('0');

    fireEvent.click(incrementButton);
    expect(counterDisplay).toHaveTextContent('1');
  });
  
  it('decrements the counter', () => {
    render(<Counter initialValue={0} step={1} />);
    const decrementButton = screen.getByText('Decrement');
    const counterDisplay = screen.getByText('0');

    fireEvent.click(decrementButton);
    expect(counterDisplay).toHaveTextContent('-1');
  });
});