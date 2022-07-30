import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports';
import { counterByAmount, counterByAmountMinus, decrement, increment, reset } from './counterSlice';

const CounterView = () => {
  const count = useSelector((state) => state.counter.count);
  const [value, setValue] = useState(0)

  // console.log(value);

  const dispatch = useDispatch();

  const handleChange = e => {
    // console.log(e.target.value);
    // setValue(e.target.value)
    const getValue = parseInt(e.target.value);
    setValue(getValue);
  }


  return (
    <div>
      <input onChange={handleChange} type="text" name="" id="" />
      <h2>count: {count} </h2>
      <button
        style={{margin: "0 10px"}}
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        style={{margin: "0 10px"}}
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button
        style={{margin: "0 10px"}}
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
      <button
        style={{margin: "0 10px"}}
        onClick={() => {
          dispatch(counterByAmount(value));
        }}
      >
        Custom Increment
      </button>
      <button
        style={{margin: "0 10px"}}
        onClick={() => {
          dispatch(counterByAmountMinus(value));
        }}
      >
        Custom Decrement
      </button>
    </div>
  );
};

export default CounterView;
