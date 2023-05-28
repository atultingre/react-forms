import React, { useState } from 'react';
import "./Login14.css";
import { Link } from 'react-router-dom';

const Login14 = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login14-body">
      <div className="login14-center">
        <div className="login14-header">Login Form</div>
        <form className="login14-form">
          <input className="login14-input" type="text" placeholder="Email or Username" />
          <i className="far fa-envelope"></i>
          <input
            className="login14-input"
            id="pswrd"
            type={passwordVisible ? "text" : "password"}
            placeholder="Password"
          />
          <i className={passwordVisible ? "fas fa-lock-open" : "fas fa-lock"} onClick={togglePasswordVisibility}></i>
          <input className="login14-input" type="submit" value="Sign in" />
          <Link to="#">Forgot Password?</Link>
        </form>
      </div>
    </div>
  );
};

export default Login14;
