import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);

  function handleClick(e) {
    setCount((count) => count + 1);
    console.log(count);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick} style={{ color: "white" }}>
        Count++
      </button>
    </div>
  );
};

export default Counter;
