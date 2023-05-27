import React from "react";
import "./Login1.css";
import { Link } from "react-router-dom";

const Login1 = () => {
  return (
    <div className="login1-body">
      <div className="login1-container">
        <div className="login1-wrapper">
          <div className="login1-title">
            <span>Login Form</span>
          </div>
          <form action="#" className="login1-form">
            <div className="login1-row">
              <i className="fas fa-user"></i>
              <input className="login1-input" type="text" placeholder="Email or Phone" required />
            </div>
            <div className="login1-row">
              <i className="fas fa-lock"></i>
              <input className="login1-input" type="password" placeholder="Password" required />
            </div>
            <div className="login1-pass">
              <Link href="#">Forgot password?</Link>
            </div>
            <div className="login1-row login1-button">
              <input className="login1-input" type="submit" value="Login" />
            </div>
            <div className="login1-signup-link">
              Not a member? <Link to="/forms/register1">Signup now</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login1;
