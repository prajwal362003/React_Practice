import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../components/Router.css";
const Home = () => {
  const navigate = useNavigate();
  const goToAbout = () => {
    navigate("/about");
  };

  const goToContact = () => {
    navigate("/contact");
  };

  return (
    <>
      <h1>Home</h1>
      <p>Wanna know more about us</p>
      <span>Click Here..</span>
      {/* <Link to="./about">About</Link>
      <br />
      <span>Contact Us</span>
      <Link to="./contact">Contact</Link> */}
      {/*Use of useNavigate Hook*/}

      <div className="abt">
        <p>About Page</p>
        <button className="abt-btn" onClick={goToAbout}>
          About
        </button>
      </div>

      <div className="cont">
        <p>Contact Page</p>
        <button className="cont-btn" onClick={goToContact}>
          Contact
        </button>
      </div>
    </>
  );
};

export default Home;
