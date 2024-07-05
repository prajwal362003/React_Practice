import { React, memo } from "react";

const ChildD = ({ func, cnt }) => {
  return console.log("Inside Child D");
};

export default memo(ChildD);
