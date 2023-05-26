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
      document.querySelector(".forms").classList.toggle("show-signup");
    });
  });

  return (
    <div className="registration5-form">
      <section className="registration5-container forms">
        <div className="form signup">
          <div className="form-content">
            <header>Signup</header>
            <form action="#">
              <div className="field input-field">
                <input type="email" placeholder="Email" className="input" />
              </div>
              <div className="field input-field">
                <input
                  type="password"
                  placeholder="Create password"
                  className="password"
                />
              </div>
              <div className="field input-field">
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="password"
                />
                <i className="bx bx-hide eye-icon"></i>
              </div>
              <div className="field button-field">
                <button>Signup</button>
              </div>
            </form>
            <div className="form-link">
              <span>
                Already have an account?
                <Link to="/login4" className="link login-link">
                  Login
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
  );
};

export default Registration5;
