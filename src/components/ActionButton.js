import React from 'react';

function ActionButton({ type, handleClick }) {

  return (
    <button onClick={handleClick}>
      {type === 'add' ? 'Add' : 'Subtract'}
    </button>
  );
}

export default ActionButton;