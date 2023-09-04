import { useState } from "react";

interface Props {
  initialValue?: number;
}

export const CounterBy = ({ initialValue = 5 }: Props) => {
  const [counter, setCounter] = useState({
    counter: initialValue,
    clicks: 0,
  });

  const handleClick = (incValue: number) => {
    setCounter((prev) => ({
      ...prev,
      counter: prev.counter + incValue,
      clicks: prev.clicks + 1,
    }));
  };

  return (
    <>
      <h1>Counter: {counter.counter}</h1>
      <h1>Clicks: {counter.clicks}</h1>
      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(5)}>+5</button>
    </>
  );
};
