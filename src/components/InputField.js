import React from 'react';
import './componentStyle.css'

function InputField({ label, number, setNumber }) {

  return (
    <div className='input-field'>
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