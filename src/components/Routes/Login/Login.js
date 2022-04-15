import React from "react";
import logo from "./../../../images/logo2.png";
import "./Login.css";
import { Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";

const Login = () => {
  return (
    <div className="login-bg">
      <div className="container">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img className="logo-width my-5" src={logo} alt="" />
          <input
            type="email"
            className="signup-input"
            name=""
            id=""
            placeholder="Enter Email"
          />
          <input
            type="password"
            className="signup-input"
            name=""
            id=""
            placeholder="password"
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
          <Link className="text-danger text-decoration-none" to="/Signup">
            Create an Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
