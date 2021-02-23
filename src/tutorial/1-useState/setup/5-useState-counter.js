import React, { useState } from "react";

const UseStateCounter = () => {
  const [counter, setCounter] = useState(0);

  const handleDecrease = () => {
    setCounter(counter - 1);
  };
  const handleReset = () => {
    setCounter(0);
  };
  const handleIncrease = () => {
    setCounter(counter + 1);
  };
  const handleIncLater = () => {
    setTimeout(() => {
      // setCounter(counter + 1);
      setCounter((prevState) => {
        return prevState + 1;
      });
    }, 1000);
  };
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Regular Counter</h2>
        <h1>{counter}</h1>
        <button className="btn" onClick={handleDecrease}>
          Decrease
        </button>
        <button className="btn" onClick={handleReset}>
          Reset
        </button>
        <button className="btn" onClick={handleIncrease}>
          Increase
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>More Complex Counter</h2>
        <h1>{counter}</h1>
        <button className="btn" onClick={handleIncLater}>
          Increase Later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
