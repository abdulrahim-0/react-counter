import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
function App() {
  return (
    <Counter initialValue={0} step={1} />
  );
}

export default App;
