import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports';
import { decrement, increment, reset } from './counterSlice';

const CounterView = () => {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  return (
    <div>
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
    </div>
  );
};

export default CounterView;
