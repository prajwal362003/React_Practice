import React from "react";

/*A “key” is a special string attribute you need to include when creating lists of elements in React. Keys are used in React to identify which items in the list are changed, updated, or deleted.
Keys are used to give an identity to the elements in the lists. It is recommended to use a string as a key that uniquely identifies the items in the list.  
 */

/*
Syntax:

const numbers = [1, 2, 3, 4, 5];
const updatedNums = numbers.map((number, index) =>
    <li key={index}>
        {number}
    </li>
);
 */

const UseOfMap = () => {
  const IPL = ["CSK", "MI", "RCB"];
  const IPL2 = ["RR", "CSK", "MI", "RCB"];

  const iplList = IPL.map((val) => {
    return val;
  });

  const iplList2 = IPL2.map((val, index) => {
    return val;
  });

  return (
    <>
      <h1 key={IPL}>{iplList}</h1> <br />
      <h2>{iplList2}</h2>
    </>
  );
};

export default UseOfMap;
