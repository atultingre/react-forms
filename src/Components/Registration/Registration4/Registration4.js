import React, { useEffect } from "react";
import "./Registration4.css";

const Registration4 = () => {
  useEffect(() => {
    const slidePage = document.querySelector(".registration4-slide-page");
    const nextBtnFirst = document.querySelector(".firstNext");
    const prevBtnSec = document.querySelector(".prev-1");
    const nextBtnSec = document.querySelector(".next-1");
    const prevBtnThird = document.querySelector(".prev-2");
    const nextBtnThird = document.querySelector(".next-2");
    const prevBtnFourth = document.querySelector(".prev-3");
    const submitBtn = document.querySelector(".registration4-submit");
    const progressText = document.querySelectorAll(".registration4-step p");
    const progressCheck = document.querySelectorAll(".registration4-step .registration4-check");
    const bullet = document.querySelectorAll(".registration4-step .registration4-bullet");
    let current = 1;

    nextBtnFirst.addEventListener("click", function (event) {
      event.preventDefault();
      slidePage.style.marginLeft = "-25%";
      bullet[current - 1].classList.add("active");
      progressCheck[current - 1].classList.add("active");
      progressText[current - 1].classList.add("active");
      current += 1;
    });
    nextBtnSec.addEventListener("click", function (event) {
      event.preventDefault();
      slidePage.style.marginLeft = "-50%";
      bullet[current - 1].classList.add("active");
      progressCheck[current - 1].classList.add("active");
      progressText[current - 1].classList.add("active");
      current += 1;
    });
    nextBtnThird.addEventListener("click", function (event) {
      event.preventDefault();
      slidePage.style.marginLeft = "-75%";
      bullet[current - 1].classList.add("active");
      progressCheck[current - 1].classList.add("active");
      progressText[current - 1].classList.add("active");
      current += 1;
    });
    submitBtn.addEventListener("click", function () {
      bullet[current - 1].classList.add("active");
      progressCheck[current - 1].classList.add("active");
      progressText[current - 1].classList.add("active");
      current += 1;
      setTimeout(function () {
        alert("Your Form Successfully Signed up");
        window.location.reload();
      }, 800);
    });

    prevBtnSec.addEventListener("click", function (event) {
      event.preventDefault();
      slidePage.style.marginLeft = "0%";
      bullet[current - 2].classList.remove("active");
      progressCheck[current - 2].classList.remove("active");
      progressText[current - 2].classList.remove("active");
      current -= 1;
    });
    prevBtnThird.addEventListener("click", function (event) {
      event.preventDefault();
      slidePage.style.marginLeft = "-25%";
      bullet[current - 2].classList.remove("active");
      progressCheck[current - 2].classList.remove("active");
      progressText[current - 2].classList.remove("active");
      current -= 1;
    });
    prevBtnFourth.addEventListener("click", function (event) {
      event.preventDefault();
      slidePage.style.marginLeft = "-50%";
      bullet[current - 2].classList.remove("active");
      progressCheck[current - 2].classList.remove("active");
      progressText[current - 2].classList.remove("active");
      current -= 1;
    });
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  return (
    <div className="registration4-body">
      <div className="registration4-container">
        <header className="registration4-header">Signup Form</header>
        <div className="registration4-progress-bar">
          <div className="registration4-step">
            <p className="registration4-p">Name</p>
            <div className="registration4-bullet">
              <span className="registration4-span">1</span>
            </div>
            <div className="registration4-check fas fa-check"></div>
          </div>
          <div className="registration4-step">
            <p className="registration4-p">Contact</p>
            <div className="registration4-bullet">
              <span className="registration4-span">2</span>
            </div>
            <div className="registration4-check fas fa-check"></div>
          </div>
          <div className="registration4-step">
            <p className="registration4-p">Birth</p>
            <div className="registration4-bullet">
              <span className="registration4-span">3</span>
            </div>
            <div className="registration4-check fas fa-check"></div>
          </div>
          <div className="registration4-step">
            <p className="registration4-p">Submit</p>
            <div className="registration4-bullet">
              <span className="registration4-span">4</span>
            </div>
            <div className="registration4-check fas fa-check"></div>
          </div>
        </div>
        <div className="registration4-form-outer">
          <form action="#" className="registration4-form">
            <div className="registration4-page registration4-slide-page">
              <div className="registration4-title">Basic Info:</div>
              <div className="registration4-field">
                <div className="registration4-label">First Name</div>
                <input className="registration4-input" type="text" />
              </div>
              <div className="registration4-field">
                <div className="registration4-label">Last Name</div>
                <input className="registration4-input" type="text" />
              </div>
              <div className="registration4-field">
                <button className="firstNext registration4-next">Next</button>
              </div>
            </div>
            <div className="registration4-page">
              <div className="registration4-title">Contact Info:</div>
              <div className="registration4-field">
                <div className="registration4-label">Email Address</div>
                <input className="registration4-input" type="text" />
              </div>
              <div className="registration4-field">
                <div className="registration4-label">Phone Number</div>
                <input className="registration4-input" type="Number" />
              </div>
              <div className="registration4-field btns">
                <button className="prev-1 registration4-prev">Previous</button>
                <button className="next-1 registration4-next">Next</button>
              </div>
            </div>
            <div className="registration4-page">
              <div className="registration4-title">Date of Birth:</div>
              <div className="registration4-field">
                <div className="registration4-label">Date</div>
                <input className="registration4-input" type="text" />
              </div>
              <div className="registration4-field">
                <div className="registration4-label">Gender</div>
                <select>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="registration4-field btns">
                <button className="prev-2 registration4-prev">Previous</button>
                <button className="next-2 registration4-next">Next</button>
              </div>
            </div>
            <div className="registration4-page">
              <div className="registration4-title">Login Details:</div>
              <div className="registration4-field">
                <div className="registration4-label">Username</div>
                <input className="registration4-input" type="text" />
              </div>
              <div className="registration4-field">
                <div className="registration4-label">Password</div>
                <input className="registration4-input" type="password" />
              </div>
              <div className="registration4-field btns">
                <button className="prev-3 registration4-prev">Previous</button>
                <button className="registration4-submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration4;
