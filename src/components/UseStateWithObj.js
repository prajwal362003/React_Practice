import React, { useState } from "react";

const UseStateWithObj = () => {
  const [allValues, setAllValues] = useState({
    firstName: "Prajwal",
    lastName: "Kale",
  });

  const updateInfo = () => {
    {
      /* ...allValues => jitne bhi values hai allValues mai uski ek copy bana lo*/
      /*After making the copy, just override the first name to Sarthak , dont change the entire thing*/
    }
    setAllValues({ ...allValues, firstName: "Sarthak" });
  };
  return (
    <>
      <h1>
        My name is {allValues.firstName} {allValues.lastName}
      </h1>

      <button onClick={updateInfo}>Update Info</button>
    </>
  );
};

export default UseStateWithObj;
