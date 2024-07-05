import React, { createContext, useContext } from "react";
import ChildA from "./ChildA";
//The Context API is a mechanism that allows you to share specific information (like state or functions) with multiple components, eliminating the need for prop drilling.
// create context, provider(App ==> now as UseContext), consumer(Child C)

// When we want to send the data from Parent => childA => childB => childC
// We will not send first from app to childA then childA to childB then childB to childC and so on..
// This is called Prop Drilling which can be eliminated by useContext api.
// This contains 3 factors
// 1] Create the context(In Parent ==> UseContext.js)
// 2] Provide to the element where it is to be used
// 3] Consume by the element where it is to be used (ChildC.js)(Always written in an arrow fn)

// It is problematic too  in complex cases
// as in this case we just have 1 context but in case of more context's, the consumer i.e child C would have nested loops thatbmaked the code ugly.

// For small cases, contextApi is fine
// but in the cases of large cases, useContext hook will be req

// PART 1] useContext Api
// create.provider,consumer
// const data = createContext();
// const UseContext = () => {
//   const name = "Prajwal";
//   return (
//     <data.Provider value={name}>
//       <ChildA />
//     </data.Provider>
//   );
// };

// export default UseContext;
// export { data };

// PART 2] useContext Hook
// create.provider,useContext

// In this, instead of directly consuming in the file(childC.js) , use the useContext hook with ref to the data provided in the parent.

const data = createContext();
const data1 = createContext();

const UseContext = () => {
  const name = "Prajwal";
  const gender = "Male";
  return (
    <data.Provider value={name}>
      <data1.Provider value={gender}>
        <ChildA />
      </data1.Provider>
    </data.Provider>
  );
};

export default UseContext;
export { data, data1 };
