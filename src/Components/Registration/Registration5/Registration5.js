import "./Registration5.css";

import { Link } from "react-router-dom";

const Registration5 = () => {
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
      document
        .querySelector(".registration5-forms")
        .classList.toggle("show-signup");
    });
  });

  return (
    <div className="registration5-body">
      <section className="registration5-container registration5-forms">
        <div className="registration5-form1 registration5-signup">
          <div className="form-content">
            <header className="registration5-header">Signup</header>
            <form action="#" className="registration5-form">
              <div className="registration5-field registration5-input-field">
                <input
                  type="email"
                  placeholder="Email"
                  className="input registration5-input"
                />
              </div>
              <div className="registration5-field registration5-input-field">
                <input
                  type="password"
                  placeholder="Create password"
                  className="password registration5-input"
                />
              </div>
              <div className="registration5-field registration5-input-field">
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="password registration5-input"
                />
                <i className="bx bx-hide eye-icon"></i>
              </div>
              <div className="registration5-field button-field">
                <button className="registration5-button">Signup</button>
              </div>
            </form>
            <div className="registration5-form-link">
              <span className="registration5-span-link">
                Already have an account? 
                <Link to="/login4" className="link login-link">
                   Login
                </Link>
              </span>
            </div>
          </div>
          <div className="registration5-line"></div>
          <div className="registration5-media-options">
            <Link to="#" className="registration5-field facebook">
              <i className="bx bxl-facebook facebook-icon"></i>
              <span className="registration5-span"> Login with Facebook</span>
            </Link>
          </div>
          <div className="registration5-media-options">
            <Link to="#" className="registration5-field facebook">
              <i className="bx bxl-google facebook-icon"></i>
              <span className="registration5-span"> Login with Google</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration5;
