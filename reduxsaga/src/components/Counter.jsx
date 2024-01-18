// Counter.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementAsync, decrement, selectCount } from '../features/counterSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button className="button" onClick={() => dispatch(incrementAsync())}>Increment Async</button>
      <button className="button" onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
