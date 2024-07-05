import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const updateCounter1 = () => {
    setCounter1(counter1 + 1);
  };

  const updateCounter2 = () => {
    setCounter2(counter2 + 1);
  };

  useEffect(() => {
    console.log("Inside UseEffect");
  }, [counter1]);

  return (
    <>
      <button onClick={updateCounter1}>Click Me1</button>
      <h1 style={{ color: "black" }}>{counter1}</h1>
      <button onClick={updateCounter2}>Click Me2</button>
      <h1 style={{ color: "black" }}>{counter2}</h1>
    </>
  );
};
export default UseEffect;
