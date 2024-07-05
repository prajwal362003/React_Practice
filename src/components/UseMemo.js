import React, { useMemo, useState } from "react";

/* The useMemo Hook only runs when one of its dependencies update.
This can improve performance.*/

const UseMemo = () => {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  const multiplication = useMemo(
    function multiply() {
      console.log("useMemo will make sure only add variable gets updated");
      return add * 10;
    },
    [add] // only when addn button is clicked, then multiplication fn is called & when the subtraction is clicked, then the value gets subtracted but the multiplication fn does not get called unnecessarily
  ); // jab add mai koi chamges ayenge to hi multiplication fn call hoga lekin add ke alawa kuch bhi update ho, multiplication fn call hoga hi nahi
  return (
    <>
      <button onClick={() => setAdd(add + 1)}>Addition</button>
      {multiplication} <br />
      <span>{add}</span>
      <br />
      <button onClick={() => setMinus(minus - 1)}>Subtraction</button>
      <span>{minus}</span>
    </>
  );
};

export default UseMemo;
