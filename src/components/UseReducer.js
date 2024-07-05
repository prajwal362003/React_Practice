import React, { useReducer } from "react";

/*When to use useState ?
For simple state management with independent updates.
When the state transitions are not complex and do not depend on the previous state.
When dealing with a single piece of state.

When to use useReducer ?
For more complex state logic.
When state transitions depend on the previous state.
When managing multiple related pieces of state.
 */

const initialstate = 0;
const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;

    case "Decrement":
      return state - 1;

    default:
      return state;
  }
};

// state: The current state value.
// dispatch: A function that allows you to trigger state transitions by dispatching actions.
// reducer: A function that specifies how the state should change in response to dispatched actions.

const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialstate);
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => dispatch("Increment")}>Increment</button>
      <button onClick={() => dispatch("Decrement")}>Decrement</button>
    </div>
  );
};

export default UseReducer;
