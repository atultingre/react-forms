import React from "react";
import "./Registration1.css";
import { Link } from "react-router-dom";
const Registration1 = () => {
  return (
    <div className="registration1">
      <div className="wrapper">
        <h2>Registration</h2>
        <form action="#">
          <div className="input-box">
            <input type="text" placeholder="Enter your name" required />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Enter your email" required />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Create password" required />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Confirm password" required />
          </div>
          <div className="policy">
            <input type="checkbox" />
            <h3>I accept all terms & condition</h3>
          </div>
          <div className="input-box button">
            <input type="Submit" value="Register Now" />
          </div>
          <div className="text">
            <h3>
              Already have an account? <Link to="/forms/login1">Login now</Link>
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration1;
