import React from 'react';

function InputField({ label, number, setNumber }) {

  return (
    <div>
      <label>{label}</label>
      <input 
        type="number" 
        value={number} 
        onChange={(e) => setNumber(e.target.value)} 
      />
    </div>
  );
}

export default InputField;