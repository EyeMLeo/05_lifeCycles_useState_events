import './counter.css';
import { useState } from 'react';

function Counter(props) {
  // 1. state counterValue, useState
  const [counterValue, setCounterValue] = useState(0);
  // susikurti counterClass state
  // const [counterClass, setCounterClass] = useState('');

  // kai turim reiksme kuri tiesiogiai priklauso nuo kitos reiksme, galim naudoti
  // infered/caclulated value
  let counterClassInfered = counterValue >= 5 ? 'high' : '';
  let counterClassInferedLow = counterValue <= -5 ? 'low' : '';

  // const counterValue = stateArr[0];
  // const setCounterValue = stateArr[1];
  // 2. increaseHandler, decreaseHandler fn kurios didins ir mazins skaitliuka
  function incrementHandler() {
    setCounterValue((prevCounterValue) => {
      return prevCounterValue + 1;
    });

    // pasitikirinti reiksme ar daugiau uz 5 jei taip, pridedam klase
    // if (counterValue >= 4) {
    // setCounterClass('high');
    // }
  }

  function minuzsHandler() {
    setCounterValue((prevCounterValue) => {
      return prevCounterValue <= -5 ? prevCounterValue : prevCounterValue - 1;
    });
  }
  function plus10Handler() {
    setCounterValue((prevCounterValue) => {
      return prevCounterValue + 10;
    });
  }

  function resetHandler() {
    setCounterValue(() => 0);
  }

  // let reiksme = 10;
  // reiksme++; // === reiksme = reiksme + 1
  // reksme + 1; //  reksme + 1

  // kai reiksme virsija 5 uzdedam counter__value prideti klase high

  return (
    <div className="counter card">
      <h3>{props.counterTitle}</h3>
      <h2
        className={`counter__value ${counterClassInferedLow} ${counterClassInfered}`}
      >
        {counterValue}
      </h2>
      <div className="control">
        <button onClick={incrementHandler}>+</button>
        <button onClick={minuzsHandler}>-</button>
        <button onClick={resetHandler}>reset</button>
        <button onClick={plus10Handler}>+10</button>
      </div>
    </div>
  );
}
export default Counter;
