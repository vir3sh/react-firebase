import React from 'react';

function Counter({ counter, addValue, remValue }) {
  return (
    <div className='wholebo'>
      <button onClick={addValue}>Add to cart {counter}</button>
      <button onClick={remValue}>Remove from cart {counter}</button>
    </div>
  );
}

export default Counter;
