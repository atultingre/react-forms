import React from "react";
import "./Login4.css";
import { Link } from "react-router-dom";

const Login4 = () => {
  const pwShowHide = document.querySelectorAll(".eye-icon");
    const links = document.querySelectorAll(".link");

    pwShowHide.forEach((eyeIcon) => {
      eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

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
      <div className="login4-form">
        <section className="login4-container forms">
          <div className="form login">
            <div className="form-content">
              <header>Login</header>
              <form action="#">
                <div className="field input-field">
                  <input type="email" placeholder="Email" className="input" />
                </div>
                <div className="field input-field">
                  <input
                    type="password"
                    placeholder="Password"
                    className="password"
                  />
                  <i className="bx bx-hide eye-icon"></i>
                </div>
                <div className="form-link">
                  <Link to="#" className="forgot-pass">
                    Forgot password?
                  </Link>
                </div>
                <div className="field button-field">
                  <button>Login</button>
                </div>
              </form>
              <div className="form-link">
                <span>
                  Don't have an account?{" "}
                  <Link to="/register5" className="link signup-link">
                    Signup
                  </Link>
                </span>
              </div>
            </div>
            <div className="line"></div>
            <div className="media-options">
              <Link to="#" className="field facebook">
                <i className="bx bxl-facebook facebook-icon"></i>
                <span>Login with Facebook</span>
              </Link>
            </div>
            <div className="media-options">
              <Link to="#" className="field google">
                <img src="#" alt="" className="google-img" />
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
