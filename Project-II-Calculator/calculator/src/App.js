import React from 'react';
import './App.css';
import CalculatorDispplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainers from './components/ButtonContainers/ButtonsContainer';

const App = () => {
  return (
    <div className="app">
      <CalculatorDispplay />
      <ButtonContainers />
    </div>
  );
};

export default App;
