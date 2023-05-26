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
      <div className="bg-img">
        <div className="login9-content">
          <header>Login Form</header>
          <form action="#">
            <div className="login9-field">
              <span className="fa fa-user"></span>
              <input type="text" required placeholder="Email or Phone" />
            </div>
            <div className="login9-field space">
              <span className="fa fa-lock"></span>
              <input
                type={passwordVisible ? "text" : "password"}
                className="pass-key"
                required
                placeholder="Password"
              />
              <span className="show" onClick={handleTogglePassword}>
                {passwordVisible ? "HIDE" : "SHOW"}
              </span>
            </div>
            <div className="pass">
              <Link to="#">Forgot Password?</Link>
            </div>
            <div className="login9-field">
              <input type="submit" value="LOGIN" />
            </div>
          </form>
          <div className="login">Or login with</div>
          <div className="links">
            <div className="facebook">
              <i className="fab fa-facebook-f">
                <span>Facebook</span>
              </i>
            </div>
            <div className="instagram">
              <i className="fab fa-instagram">
                <span>Instagram</span>
              </i>
            </div>
          </div>
          <div className="signup">
            Don't have an account?
            <Link to="#">Signup Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login9;
