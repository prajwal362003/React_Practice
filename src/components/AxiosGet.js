import React, { useEffect, useState } from "react";
import axios from "axios";

// API :- https://jsonplaceholder.typicode.com/users
const AxiosGet = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response);
      setUserData(response.data);
    });
  }, []);
  return (
    <>
      <div>
        {userData.map((data) => {
          return <div>{data.name}</div>;
        })}
      </div>
    </>
  );
};

export default AxiosGet;
