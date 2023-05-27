import React from "react";
import "./Login2.css";
import { Link } from "react-router-dom";

const Login2 = () => {
  return (
    <div className="login2-body">
      <div className="login2-wrapper">
        <div className="login2-title">Login Form</div>
        <form action="#" className="login2-form">
          <div className="login2-field">
            <input className="login2-input"  type="text" required />
            <label className="login2-label">Email Address</label>
          </div>
          <div className="login2-field">
            <input className="login2-input" type="password" required />
            <label className="login2-label">Password</label>
          </div>
          <div className="login2-content">
            <div className="checkbox">
              <input className="login2-input" type="checkbox" id="remember-me" />
              <label className="login2-label" for="remember-me">Remember me</label>
            </div>
            <div className="login2-pass-link">
              <Link href="#">Forgot password?</Link>
            </div>
          </div>
          <div className="login2-field">
            <input className="login2-input" type="submit" value="Login" />
          </div>
          <div className="login2-signup-link">
            Not a member? <Link to="/forms/register2">Signup now</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login2;
