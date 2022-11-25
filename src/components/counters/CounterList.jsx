import './counter.css';
import { useState } from 'react';
import Counter from './Counter';
function Counters() {
  return (
    <div className="counter collection">
      <Counter counterTitle="Push ups" />
      <Counter>Push ups</Counter>
      <Counter>Push ups</Counter>
    </div>
  );
}
export default Counters;
