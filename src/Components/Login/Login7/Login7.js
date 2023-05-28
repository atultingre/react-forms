import React from "react";
import "./Login7.css";
import { Link } from "react-router-dom";
const Login7 = () => {
  return (
    <div className="login7-body">
      <div className="login7-login-form">
        <div className="login7-text">LOGIN</div>
        <form className="login7-form">
          <div className="login7-field">
            <div className="fas fa-envelope"></div>
            <input className="login7-input" type="text" placeholder="Email or Phone" />
          </div>
          <div className="login7-field">
            <div className="fas fa-lock"></div>
            <input className="login7-input" type="password" placeholder="Password" />
          </div>
          <button className="login7-button">LOGIN</button>
          <div className="login7-link">
            Not a member?
            <Link to="#">Signup now</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login7;
