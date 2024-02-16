import './App.css';
import InputField from './components/InputField';
import ActionButton from './components/ActionButton';
import ResultDisplay from './components/ResultDisplay';
import React, { useState } from 'react';

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(null);

  const handleAdd = async () => {
    setNumber1(number1 ? number1 : 0);
    setNumber2(number2 ? number2 : 0);
    try {
      const response = await fetch(`https://calculator-backend-six.vercel.app/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `number1=${number1}&number2=${number2}`,
      });
      const data = await response.json();
      console.log(data.result);
      setResult(data.result);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const handleSubstract = async () => {
    setNumber1(number1 ? number1 : 0);
    setNumber2(number2 ? number2 : 0);
    try {
      const response = await fetch(`https://calculator-backend-six.vercel.app/subtract`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `number1=${number1}&number2=${number2}`,
      });
      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      console.error('Error:', error);
    }
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
