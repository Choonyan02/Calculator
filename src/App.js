import './App.css';
import InputField from './components/InputField';
import ActionButton from './components/ActionButton';
import ResultDisplay from './components/ResultDisplay';
import React, { useState } from 'react';

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(null);

  const handleAdd = () => {
    setNumber1(number1 ? number1 : 0);
    setNumber2(number2 ? number2 : 0);
    const sum = Number(number1) + Number(number2);
    setResult(sum);
  }

  const handleSubstract = () => {
    setNumber1(number1 ? number1 : 0);
    setNumber2(number2 ? number2 : 0);
    const difference = number1 - number2;
    setResult(difference);
  }

  return (
    <div>
      <InputField label="Number 1" number={number1} setNumber={setNumber1} />
      <InputField label="Number 2" number={number2} setNumber={setNumber2}/>
      <ActionButton type="add" handleClick={handleAdd}/>
      <ActionButton type="subtract" handleClick={handleSubstract}/>
      <ResultDisplay result={result === null ? "Start computation here" : result} />
    </div>
  );
}

export default App;
