/*Does Not Cause Re-renders
If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.
To avoid this, we can use the useRef Hook.
 */

import { useRef, useState } from "react";

// useRef() only returns one item. It returns an Object called current.

const UseRef = () => {
  const refElement = useRef("");
  const [name, setName] = useState("");
  console.log(refElement);

  const Reset = () => {
    setName("");
    refElement.current.focus();
  };

  const handleInput = () => {
    refElement.current.value = "Tommper Sai";
  };
  return (
    <>
      <input
        ref={refElement}
        value={name}
        type="text"
        placeholder="Enter your Name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={Reset}>Click here</button>
      <button onClick={handleInput}>Replace</button>
    </>
  );
};

export default UseRef;
