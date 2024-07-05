import React from "react";
import useCustomHooks from "./useCustomHooks";

// This file is linked with useCustomHooks.js
// These custom hooks are used in order to stop repetitive work & we can extract that logic to custom hook

const CustomHooks = () => {
  const [count, increment, decrement] = useCustomHooks();
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>Plus1</button>
      <button onClick={decrement}>Minus1</button>
    </>
  );
};

export default CustomHooks;
