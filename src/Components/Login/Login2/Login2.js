import React from "react";
import "./Login2.css";
import { Link } from "react-router-dom";

const Login2 = () => {
  return (
    <div className="login2-form">
      <div className="wrapper">
        <div className="title">Login Form</div>
        <form action="#">
          <div className="field">
            <input type="text" required />
            <label>Email Address</label>
          </div>
          <div className="field">
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="content">
            <div className="checkbox">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">Remember me</label>
            </div>
            <div className="pass-link">
              <Link href="#">Forgot password?</Link>
            </div>
          </div>
          <div className="field">
            <input type="submit" value="Login" />
          </div>
          <div className="signup-link">
            Not a member? <Link to="/forms/register2">Signup now</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login2;
