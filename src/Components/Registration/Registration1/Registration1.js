import React from "react";
import "./Registration1.css";
import { Link } from "react-router-dom";
const Registration1 = () => {
  return (
    <div className="register1-body">
      <div className="register1-wrapper">
        <h2 className="register1-h2">Registration</h2>
        <form action="#" className="register1-form">
          <div className="register1-input-box">
            <input className="register1-input" type="text" placeholder="Enter your name" required />
          </div>
          <div className="register1-input-box">
            <input className="register1-input" type="text" placeholder="Enter your email" required />
          </div>
          <div className="register1-input-box">
            <input className="register1-input" type="password" placeholder="Create password" required />
          </div>
          <div className="register1-input-box">
            <input className="register1-input" type="password" placeholder="Confirm password" required />
          </div>
          <div className="register1-policy">
            <input className="register1-input" type="checkbox" />
            <h3 className="register1-h3">I accept all terms & condition</h3>
          </div>
          <div className="register1-input-box button">
            <input className="register1-input" type="Submit" value="Register Now" />
          </div>
          <div className="register1-text">
            <h3 className="register1-h3">
              Already have an account? <Link to="/forms/login1">Login now</Link>
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration1;
