import React, { useState } from "react";
import "./Login5.css";
import { Link } from "react-router-dom";

const Login5 = () => {
  const [isChecked, setIsChecked] = useState();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="login5-body">
      <div className="login5-container">
        <input
          type="checkbox"
          id="flip"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <div className="login5-cover">
          {isChecked ? (
            <div className="front">
              <img className="backImg" src="/images/backImg.jpg" alt="" />
            </div>
          ) : (
              <img src="/images/frontImg.jpg" alt="" />
          )}
        </div>
        <div className="login5-forms">
          <div className="login5-form-content">
            <div className="login5-form">
              <div className="login5-title">Login</div>
              <form action="#">
                <div className="login5-input-boxes">
                  <div className="login5-input-box">
                    <i className="fas fa-envelope"></i>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="login5-input-box">
                    <i className="fas fa-lock"></i>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div className="login5-text">
                    <Link to="#">Forgot password?</Link>
                  </div>
                  <div className="login5-button login5-input-box">
                    <input type="submit" value="Sumbit" />
                  </div>
                  <div className="login5-text sign-up-text">
                    Don't have an account?<label for="flip">Sigup now</label>
                  </div>
                </div>
              </form>
            </div>

            <div className="signup-form">
              <div className="login5-title">Signup</div>
              <form action="#">
                <div className="login5-input-boxes">
                  <div className="login5-input-box">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Enter your name" required />
                  </div>
                  <div className="login5-input-box">
                    <i className="fas fa-envelope"></i>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="login5-input-box">
                    <i className="fas fa-lock"></i>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div className="login5-button login5-input-box">
                    <input type="submit" value="Sumbit" />
                  </div>
                  <div className="login5-text sign-up-text">
                    Already have an account? <label for="flip">Login now</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login5;
