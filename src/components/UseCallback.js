import React, { useCallback, useState, useEffect } from "react";
import ChildD from "./ChildD";

/*The useCallback Hook only runs when one of its dependencies update.

This can improve performance.
The useCallback and useMemo Hooks are similar. 
The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.
 */

const UseCallback = () => {
  const [add, setAdd] = useState(0);
  const [count, setCount] = useState(0);

  const fn = useCallback(() => {}, []); // Now, the console.log will only execute when count changes

  // useEffect(() => {
  //   console.log("Component re-rendered."); // This will log on every render
  // });

  return (
    <>
      <ChildD func={fn} cnt={count} />
      <br />
      <h1>{add}</h1>
      <button onClick={() => setAdd(add + 1)}>Addition</button>
      <br />
      <button onClick={() => setCount(count + 2)}>Click</button>
      <h1>{count}</h1>
    </>
  );
};

export default UseCallback;
