import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    parseInt(setCount(e.target.value));
  }

  return (
    <div>
      <input type="number" onChange={handleChange}></input>
      <p>Le compteur est  à : {count} </p>
      <button onClick={() => setCount(parseInt(count) + 1)}>
        +1
      </button>
      <button onClick={() => setCount(parseInt(count) - 1)}>
        -1
      </button>
    </div>
  );
}

export default Counter;
