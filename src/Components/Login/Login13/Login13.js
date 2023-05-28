import React, { useState } from "react";
import "./Login13.css";
import { Link } from "react-router-dom";

const Login13 = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login13-body">
      <div className="login13-container">
        <header className="login13-header">Login Form</header>
        <form className="login13-form">
          <div className="login13-input-field">
            <input type="text" required />
            <label className="login13-label">Email or Username</label>
          </div>
          <div className="login13-input-field">
            <input
              className={passwordVisible ? "pswrd" : "pswrd"}
              type={passwordVisible ? "text" : "password"}
              required
            />
            <span
              className="login13-show login13-span"
              onClick={togglePasswordVisibility}>
              {passwordVisible ? "HIDE" : "SHOW"}
            </span>
            <label className="login13-label">Password</label>
          </div>
          <div className="login13-button">
            <div className="inner"></div>
            <button className="login13-button-txt">LOGIN</button>
          </div>
        </form>
        <div className="auth">Or login with</div>
        <div className="login13-links">
          <div className="login13-facebook">
            <i className="fab fa-facebook-square">
              <span className="login13-span">Facebook</span>
            </i>
          </div>
          <div className="login13-google">
            <i className="fab fa-google-plus-square">
              <span className="login13-span">Google</span>
            </i>
          </div>
        </div>
        <div className="login13-signup">
          Not a member? <Link to="#">Signup now</Link>
        </div>
      </div>
    </div>
  );
};

export default Login13;
