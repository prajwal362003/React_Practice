import React, { useState } from "react";

const ConditionalRendering = () => {
  const [isAgeValid, setIsAgeValid] = useState(false);

  // if (isAgeValid) {
  //   return <div>You can vote</div>;
  // } else {
  //   return <div>You cannot vote</div>;
  // }
  // return <div>You can vote </div>;

  // let age;
  // if (isAgeValid) {
  //   age = <div>You can vote</div>;
  // } else {
  //   age = <div>You cannot vote</div>;
  // }

  // return (
  //   <>
  //     <h1>Conditional Rendering in React</h1>
  //     {age}
  //   </>
  // );

  // Ternary Operator
  return (
    <>
      {isAgeValid ? <div>You can vote</div> : <div>You cannot vote</div>}
      {/*Short Circuit Operator => used only when there is an if condn & not a else condn */}

      {isAgeValid && <div>You are eligible to vote</div>}
    </>
  );
};

export default ConditionalRendering;
