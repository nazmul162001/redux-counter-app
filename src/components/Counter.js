import React, { useState } from 'react';
import { useSelector } from 'react-redux/es/exports';

const Counter = () => {

  const count = useSelector((state) => state.count)

  return (
    <div>
      <h2>Counter App</h2>

      <h3>Count : {count} </h3>
      <button>Increment</button>
    </div>
  );
};

export default Counter;