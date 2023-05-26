import React from "react";
import "./Login6.css"
import { Link } from "react-router-dom";
const Login6 = () => {
  return (
    <div className="login6-body">
      <div className="center">
        <input type="checkbox" id="show" />
        <label for="show" className="show-btn">
          View Form
        </label>
        <div className="login6-container">
          <label
            for="show"
            className="close-btn fas fa-times"
            title="close"></label>
          <div className="text">Login Form</div>
          <form action="#">
            <div className="data">
              <label>Email or Phone</label>
              <input type="text" required />
            </div>
            <div className="data">
              <label>Password</label>
              <input type="password" required />
            </div>
            <div className="forgot-pass">
              <Link to="#">Forgot Password?</Link>
            </div>
            <div className="btn">
              <div className="inner"></div>
              <button type="submit">login</button>
            </div>
            <div className="signup-link">
              Not a member? <Link to="#">Signup now</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login6;
