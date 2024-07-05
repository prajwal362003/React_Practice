import React, { useContext } from "react";
import { data, data1 } from "./UseContext";

const ChildC = () => {
  const name = useContext(data);
  const gender = useContext(data1);
  return (
    // Part 1] useContext Api

    // <data.Consumer>
    //   {(name) => {
    //     return <h1>My name : {name}</h1>;
    //   }}
    // </data.Consumer>

    // Part 2] useContext Hook
    <>
      <h1>
        Hii, My name is {name} & my gender is {gender}
      </h1>
    </>
  );
};

export default ChildC;
