import React, { useEffect, useState } from "react";
import "./RegistrationForm.css";
const RegistrationForm = () => {
  const data = { name: "", email: "", password: "" };
  const [ipdata, setIpData] = useState(data);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    console.log("Registered");
  }, [flag]);
  const handleData = (e) => {
    setIpData({ ...ipdata, [e.target.name]: e.target.value });
    console.log(ipdata);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!ipdata.name || !ipdata.email || !ipdata.password) {
      alert("All fields are mandatory");
    } else {
      setFlag(true);
      console.log(ipdata);
    }
  };
  return (
    <>
      <pre>
        {flag ? (
          <h2>Hello {ipdata.name}, you have registered successfully</h2>
        ) : (
          ""
        )}
      </pre>
      <div className="container1">
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="h1">Registration Form</h1>
          <input
            className="ip"
            type="text"
            name="name"
            placeholder="Enter your name"
            value={ipdata.name}
            onChange={handleData}
          />
          <input
            className="ip"
            type="text"
            name="email"
            placeholder="Enter your email"
            value={ipdata.email}
            onChange={handleData}
          />
          <input
            className="ip"
            type="text"
            name="password"
            placeholder="Enter Password"
            value={ipdata.password}
            onChange={handleData}
          />
          <button type="submit" className="btn">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;
