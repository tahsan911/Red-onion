import React from "react";
import "./Signup.css";
import logo from "./../../../images/logo2.png";
import { Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";

const Signup = () => {
  return (
    <div className="signup-bg">
      <div className="container">
        <div className="d-flex flex-column justify-content-center align-items-center height">
          <img className="logo-width my-5" src={logo} alt="" />
          <input
            type="email"
            className="signup-input"
            name=""
            id=""
            placeholder="Enter Username"
          />
          <input
            type="email"
            className="signup-input"
            name=""
            id=""
            placeholder="Enter Your Email"
          />
          <input
            type="password"
            className="signup-input"
            name=""
            id=""
            placeholder="Password"
          />
          <input
            type="password"
            className="signup-input"
            name=""
            id=""
            placeholder="Confirm Password"
          />
          <button className="button">Sign up</button>
          <div className="d-flex justify-content-center align-items-center">
            <div className="or"></div>
            <div>or</div>
            <div className="or"></div>
          </div>
          <div>
            <button className="g-button d-flex justify-content-center align-items-center">
              <GoogleIcon className="text-white me-4"></GoogleIcon>
              Continue With Google
            </button>
          </div>
          <Link className="text-danger text-decoration-none" to="/Login">
            Already Have an Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
