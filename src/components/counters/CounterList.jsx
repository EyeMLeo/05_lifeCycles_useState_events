import './counter.css';
import { useState } from 'react';
import Counter from './Counter';

let counterArr = ['', 'push', 'ups'];

function Counters() {
  return (
    <div className="counter collection">
      <Counter></Counter>
      <Counter>Push ups</Counter>
      <Counter>Push ups</Counter>
      {counterArr.map((arrEl) => {
        return <Counter>{arrEl}</Counter>;
      })}
    </div>
  );
}
export default Counters;
