import React, { useState } from "react";
import "./Login12.css";
import { Link } from "react-router-dom";

const Login12 = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSignupClick = () => {
    setIsLogin(false);
  };

  const handleLoginClick = () => {
    setIsLogin(true);
  };

  const handleSignupLinkClick = () => {
    handleSignupClick();
    return false;
  };
  return (
    <div className="login12-body">
      <div className="login12-wrapper">
        <div className="login12-title-text">
          <div className="login12-title login12-login">Login Form</div>
          <div className="login12-title login12-signup">Signup Form</div>
        </div>
        <div className="login12-form-container">
          <div className="login12-slide-controls">
            <input
              className="login12-input"
              type="radio"
              name="slide"
              id="login"
              checked={isLogin}
              onChange={handleLoginClick}
            />
            <input
              className="login12-input"
              type="radio"
              name="slide"
              id="signup"
              checked={!isLogin}
              onChange={handleSignupClick}
            />
            <label
              htmlFor="login"
              className="login12-slide login12-login login12-label">
              Login
            </label>
            <label
              htmlFor="signup"
              className="login12-slide login12-signup login12-label">
              Signup
            </label>
            <div className="login12-slider-tab"></div>
          </div>

          <div className="login12-form-inner">
            <div className="login12-form">
              <form
                action="#"
                className={isLogin ? "login12-login" : "login12-signup"}>
                <div className="login12-field">
                  <input
                    className="login12-input"
                    type="text"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="login12-field">
                  <input
                    className="login12-input"
                    type="password"
                    placeholder="Password"
                    required
                  />
                </div>
                {isLogin && (
                  <div className="login12-pass-link">
                    <Link to="#">Forgot password?</Link>
                  </div>
                )}
                <div className="login12-field login12-btn">
                  <div className="login12-btn-layer"></div>
                  <input
                    className="login12-input"
                    type="submit"
                    value={isLogin ? "Login" : "Signup"}
                  />
                </div>
                {isLogin && (
                  <div className="login12-signup-link">
                    Not a member?
                    <Link to="" onClick={handleSignupLinkClick}>
                      Signup now
                    </Link>
                  </div>
                )}
              </form>
            </div>
            {!isLogin && (
              <form action="#" className="login12-signup login12-form">
                <div className="login12-field">
                  <input
                    className="login12-input"
                    type="text"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="login12-field">
                  <input
                    className="login12-input"
                    type="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="login12-field">
                  <input
                    className="login12-input"
                    type="password"
                    placeholder="Confirm password"
                    required
                  />
                </div>
                <div className="login12-field login12-btn">
                  <div className="login12-btn-layer"></div>
                  <input
                    className="login12-input"
                    type="submit"
                    value="Signup"
                  />
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login12;
