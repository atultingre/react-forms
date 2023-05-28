import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login11.css";

const Login11 = () => {
  useEffect(() => {
    const wrapper = document.querySelector(".login11-wrapper");
    const signupHeader = document.querySelector(
      ".login11-signup .login11-header"
    );
    const loginHeader = document.querySelector(
      ".login11-login .login11-header"
    );

    const handleLoginClick = () => {
      wrapper.classList.add("active");
    };

    const handleSignupClick = () => {
      wrapper.classList.remove("active");
    };

    loginHeader.addEventListener("click", handleLoginClick);
    signupHeader.addEventListener("click", handleSignupClick);

    return () => {
      loginHeader.removeEventListener("click", handleLoginClick);
      signupHeader.removeEventListener("click", handleSignupClick);
    };
  }, []);

  return (
    <div className="login11-body">
      <section className="login11-wrapper">
        <div className="login11-form login11-signup">
          <header className="login11-header">Signup</header>
          <form action="#" className="login11-form">
            <input
              className="login11-input"
              type="text"
              placeholder="Full name"
              required
            />
            <input
              className="login11-input"
              type="text"
              placeholder="Email address"
              required
            />
            <input
              className="login11-input"
              type="password"
              placeholder="Password"
              required
            />
            <div className="login11-checkbox">
              <input
                className="login11-input"
                type="checkbox"
                id="signupCheck"
              />
              <label className="login11-label" htmlFor="signupCheck">
                I accept all terms & conditions
              </label>
            </div>
            <input className="login11-input" type="submit" value="Signup" />
          </form>
        </div>
        <div className="login11-form login11-login">
          <header className="login11-header">Login</header>
          <form action="#" className="login11-form">
            <input
              className="login11-input"
              type="text"
              placeholder="Email address"
              required
            />
            <input
              className="login11-input"
              type="password"
              placeholder="Password"
              required
            />
            <Link to="#">Forgot password?</Link>
            <input className="login11-input" type="submit" value="Login" />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login11;
