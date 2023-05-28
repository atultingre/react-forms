import React from "react";
import "./Login6.css";
import { Link } from "react-router-dom";
const Login6 = () => {
  return (
    <div className="login6-body">
      <div className="login6-center">
        <input className="login6-input" type="checkbox" id="show" />
        <label for="show" className="login6-show-btn">
          View Form
        </label>
        <div className="login6-container">
          <label
            for="show"
            className="login6-close-btn fas fa-times"
            title="close"></label>
          <div className="login6-text">Login Form</div>
          <form action="#" className="login6-form">
            <div className="login6-data">
              <label className="login6-label">Email or Phone</label>
              <input className="login6-input" type="text" required />
            </div>
            <div className="login6-data">
              <label className="login6-label">Password</label>
              <input className="login6-input" type="password" required />
            </div>
            <div className="login6-forgot-pass">
              <Link to="#">Forgot Password?</Link>
            </div>
            <div className="login6-btn"> 
              <div className="login6-inner">
                <button type="submit" className="login6-button">
                  login
                </button>
              </div>
            </div>
            <div className="login6-signup-link">
              Not a member? <Link to="#">Signup now</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login6;
