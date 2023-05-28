import React from "react";
import "./Login4.css";
import { Link } from "react-router-dom";

const Login4 = () => {
  const pwShowHide = document.querySelectorAll(".eye-icon");
  const links = document.querySelectorAll(".link");

  pwShowHide.forEach((eyeIcon) => {
    eyeIcon.addEventListener("click", () => {
      let pwFields =
        eyeIcon.parentElement.parentElement.querySelectorAll(".password");

      pwFields.forEach((password) => {
        if (password.type === "password") {
          password.type = "text";
          eyeIcon.classList.replace("bx-hide", "bx-show");
          return;
        }
        password.type = "password";
        eyeIcon.classList.replace("bx-show", "bx-hide");
      });
    });
  });

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(".forms").classList.toggle("show-signup");
    });
  });
  return (
    <>
      <div>
        <section className="login4-container login4-forms">
          <div className="login4-form login4-login">
            <div className="login4-form-content">
              <header>Login</header>
              <form action="#">
                <div className="login4-field login4-input-field">
                  <input
                    type="email"
                    placeholder="Email"
                    className="login4-input input"
                  />
                </div>
                <div className="login4-field login4-input-field">
                  <input
                    type="password"
                    placeholder="Password"
                    className="login4-password input"
                  />
                  <i className="bx bx-hide eye-icon"></i>
                </div>
                <div className="login4-form-link">
                  <Link to="#" className="login4-forgot-pass">
                    Forgot password?
                  </Link>
                </div>
                <div className="login4-field login4-button-field">
                  <button className="login4-button">Login</button>
                </div>
              </form>
              <div className="login4-form-link">
                <span>
                  Don't have an account?
                  <Link
                    to="/register5"
                    className="login4-link login4-signup-link">
                    Signup
                  </Link>
                </span>
              </div>
            </div>
            <div className="login4-line"></div>
            <div className="media-options">
              <Link to="#" className="login4-field facebook">
                <i className="bx bxl-facebook facebook-icon"></i>
                <span>Login with Facebook</span>
              </Link>
            </div>
            <div className="media-options ">
              <Link to="#" className="login4-field google">
                <i className="bx bxl-google facebook-icon"></i>
                <span>Login with Google</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login4;
