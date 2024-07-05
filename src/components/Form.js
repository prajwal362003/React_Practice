import React, { useState } from "react";

// use of controlled component in react
/*React’s Controlled Components manage form data via component state, receiving values through props and updating through callbacks like onChange. 
The parent component maintains the state, passing updated values as props to the controlled component. Form elements, whether typed (e.g., textarea, input) or selected (e.g., radio buttons, checkboxes), trigger state updates through functions on change.

 */

// Controlled Components are the components which are being controlled by react
// Uncontrolled Components are the components whichare being controlled by DOM

// In controlled components, the event habdlers likd onChange(),onSubmit and updating states by useState()
// In uncontrolled components, the hooks like useRef is used
const Form = () => {
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");

  const handleChange = (e) => {
    // const upperCase = e.target.value.toUpperCase();
    // setName(upperCase);

    if (e.target.name == "firstName") {
      const capName = e.target.value.toUpperCase();
      setName(capName);
    } else {
      setPwd(e.target.value);
    }
  };

  const handlePwdChange = (e) => {
    setPwd(e.target.value);
  };
  return (
    <form>
      <label>First Name : </label>
      <br />
      <input
        type="text"
        name="firstName"
        value={name}
        onChange={handleChange}
      />
      <br />

      <label>Password : </label>
      <br />
      <input type="text" value={pwd} onChange={handlePwdChange} />
      <br />
    </form>
  );
};

export default Form;
