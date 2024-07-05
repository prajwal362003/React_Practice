import React, { useState } from "react";
import axios from "axios";

const AxiosPost = () => {
  const data = { firstName: "", lastName: "" };
  const [ipData, setIpData] = useState(data);

  const handleData = (e) => {
    setIpData({ ...ipData, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/users", ipData)
      .then((response) => {
        console.log(response);
      });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("https://jsonplaceholder.typicode.com/users/1", ipData)
      .then((response) => {
        console.log(response);
      });
  };

  const handleDelete = (e) => {
    e.preventDefault();

    axios
      .delete("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <>
      <label>First Name:</label>
      <input
        type="text"
        name="firstName"
        value={ipData.firstName}
        onChange={handleData}
      ></input>
      <br />

      <label>Last Name:</label>
      <input
        type="text"
        name="lastName"
        value={ipData.lastName}
        onChange={handleData}
      ></input>
      <br />

      <button onClick={handleClick}>Submit</button>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
};

export default AxiosPost;
