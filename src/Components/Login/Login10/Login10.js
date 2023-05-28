import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login10.css";

const Login10 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setEmailError("Email can't be blank");
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password can't be blank");
    } else {
      setPasswordError("");
    }

    if (email && password) {
      // Handle successful form submission, e.g., redirect to a specific URL
      // using history.push('/url') or submit the data to the server
      console.log("Form submitted:", email, password);
    }
  };

  return (
    <div className="login10-body">
      <div className="login10-wrapper">
        <header className="login10-header">Login Form</header>
        <form onSubmit={handleSubmit} className="login10-form">
          <div className={`login10-field email ${emailError && "error"}`}>
            <div className="login10-input-area">
              <input className="login10-input"
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <i className="icon fas fa-envelope"></i>
              {emailError && (
                <i className="error error-icon fas fa-exclamation-circle"></i>
              )}
            </div>
            {emailError && <div className="error error-txt">{emailError}</div>}
          </div>
          <div className={`login10-field password ${passwordError && "error"}`}>
            <div className="login10-input-area">
              <input className="login10-input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i className="icon fas fa-lock"></i>
              {passwordError && (
                <i className="error error-icon fas fa-exclamation-circle"></i>
              )}
            </div>
            {passwordError && (
              <div className="error error-txt">{passwordError}</div>
            )}
          </div>
          <div className="login10-pass-txt">
            <Link to="#">Forgot password?</Link>
          </div>
          <input className="login10-input" type="submit" value="Login" />
        </form>
        <div className="login10-sign-txt">
          Not a member yet? <Link to="#">Signup now</Link>
        </div>
      </div>
    </div>
  );
};

export default Login10;
