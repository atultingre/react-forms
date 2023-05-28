import React, { useState } from "react";
import "./Login9.css";
import { Link } from "react-router-dom";

const Login9 = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
      <div className="login9-body">
        <div className="login9-content">
          <header className="login9-header">Login Form</header>
          <form action="#" className="login9-form">
            <div className="login9-field">
              <span className="fa fa-user"></span>
              <input
                className="login9-input"
                type="text"
                required
                placeholder="Email or Phone"
              />
            </div>
            <div className="login9-field space">
              <span className="fa fa-lock span"></span>
              <input
                type={passwordVisible ? "text" : "password"}
                className="pass-key login9-input"
                required
                placeholder="Password"
              />
              <span className="show" onClick={handleTogglePassword}>
                {passwordVisible ? "HIDE" : "SHOW"}
              </span>
            </div>
            <div className="login9-pass">
              <Link to="#">Forgot Password?</Link>
            </div>
            <div className="login9-field">
              <input className="login9-submit" type="submit" value="LOGIN" />
            </div>
          </form>
          <div className="login9-login">Or login with</div>
          <div className="login9-links">
            <div className="login9-facebook">
              <i className="fab fa-facebook-f">
                <span>Facebook</span>
              </i>
            </div>
            <div className="login9-instagram">
              <i className="fab fa-instagram">
                <span>Instagram</span>
              </i>
            </div>
          </div>
          <div className="login9-signup">
            Don't have an account? 
            <Link to="#"> Signup Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login9;
