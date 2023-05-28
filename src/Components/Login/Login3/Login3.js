import React from "react";
import "./Login3.css";
import { Link } from "react-router-dom";
const Login3 = () => {
  return (
    <div className="login3-body">
      <div className="login3-container">
        <form action="#" className="login3-form">
          <div className="login3-title">Login</div>
          <div className="login3-input-box login3-underline">
            <input
              className="login3-input"
              type="text"
              placeholder="Enter Your Email"
              required
            />
            <div className="login3-underline"></div>
          </div>
          <div className="login3-input-box">
            <input
              className="login3-input"
              type="password"
              placeholder="Enter Your Password"
              required
            />
            <div className="login3-underline"></div>
          </div>
          <div className="login3-input-box login3-button">
            <input
              className="login3-input"
              type="submit"
              name=""
              value="Continue"
            />
          </div>
        </form>
        <div className="option">or Connect With Social Media</div>
        <div className="login3-twitter">
          <Link href="#">
            <i className="fab fa-twitter"></i>Sign in With Twitter
          </Link>
        </div>
        <div className="login3-facebook">
          <Link href="#">
            <i className="fab fa-facebook-f"></i>Sign in With Facebook
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login3;
