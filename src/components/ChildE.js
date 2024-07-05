import React, { useState } from "react";

// Passed this data to the parent(LiftingStateUp.js)
const ChildE = (props) => {
  const [name, setName] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.getData(name);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default ChildE;
