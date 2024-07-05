import React, { useState } from "react";

const State_Props = ({ defaultName, color }) => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setName(e.target.value);
  };

  return (
    <>
      <h1>Build by me</h1>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={handleChange}
      ></input>
      <p>My name is : {name}</p>
      <p>My Car's Color is {color}</p>
    </>
  );
};

export default State_Props;
