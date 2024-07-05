import React, { useState } from "react";
import ChildE from "./ChildE";

// Liftig State Up means passing data through props from child to parent
// The data send by the child(ChildE in the folder will be seen in the parenty folder(this current one))

const LiftingStateUp = () => {
  const getDataFromChildE = (data) => {
    console.log(data);
  };

  return <ChildE getData={getDataFromChildE} />;
};

export default LiftingStateUp;
