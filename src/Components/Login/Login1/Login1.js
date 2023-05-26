import React from "react";
import "./Login1.css";
import { Link } from "react-router-dom";

const Form1 = () => {
  return (
    <div className="login1">
      <div className="Login-container">
        <div className="wrapper">
          <div className="title">
            <span>Login Form</span>
          </div>
          <form action="#">
            <div className="row">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Email or Phone" required />
            </div>
            <div className="row">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" required />
            </div>
            <div className="pass">
              <Link href="#">Forgot password?</Link>
            </div>
            <div className="row button">
              <input type="submit" value="Login" />
            </div>
            <div className="signup-link">
              Not a member? <Link to="/forms/register1">Signup now</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form1;
