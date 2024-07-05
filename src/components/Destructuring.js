import React from "react";

const Destructuring = ({ fName, lName }) => {
  // const [fName,lName] = props;
  return (
    <>
      <h1>Destructuring in React</h1>
      <div>
        {fName} {lName}
      </div>
    </>
  );
};

export default Destructuring;
