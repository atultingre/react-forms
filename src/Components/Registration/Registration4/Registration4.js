import React, { useEffect } from "react";
import "./Registration4.css";

const Registration4 = () => {
  useEffect(() => {
    const slidePage = document.querySelector(".slide-page");
    const nextBtnFirst = document.querySelector(".firstNext");
    const prevBtnSec = document.querySelector(".prev-1");
    const nextBtnSec = document.querySelector(".next-1");
    const prevBtnThird = document.querySelector(".prev-2");
    const nextBtnThird = document.querySelector(".next-2");
    const prevBtnFourth = document.querySelector(".prev-3");
    const submitBtn = document.querySelector(".submit");
    const progressText = document.querySelectorAll(".step p");
    const progressCheck = document.querySelectorAll(".step .check");
    const bullet = document.querySelectorAll(".step .bullet");
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
        <header>Signup Form</header>
        <div className="progress-bar">
          <div className="step">
            <p>Name</p>
            <div className="bullet">
              <span>1</span>
            </div>
            <div className="check fas fa-check"></div>
          </div>
          <div className="step">
            <p>Contact</p>
            <div className="bullet">
              <span>2</span>
            </div>
            <div className="check fas fa-check"></div>
          </div>
          <div className="step">
            <p>Birth</p>
            <div className="bullet">
              <span>3</span>
            </div>
            <div className="check fas fa-check"></div>
          </div>
          <div className="registration4-step">
            <p>Submit</p>
            <div className="bullet">
              <span>4</span>
            </div>
            <div className="check fas fa-check"></div>
          </div>
        </div>
        <div className="form-outer">
          <form action="#" className="registration4-form">
            <div className="page slide-page">
              <div className="title">Basic Info:</div>
              <div className="field">
                <div className="label">First Name</div>
                <input type="text" />
              </div>
              <div className="field">
                <div className="label">Last Name</div>
                <input type="text" />
              </div>
              <div className="field">
                <button className="firstNext next">Next</button>
              </div>
            </div>
            <div className="page">
              <div className="title">Contact Info:</div>
              <div className="field">
                <div className="label">Email Address</div>
                <input type="text" />
              </div>
              <div className="field">
                <div className="label">Phone Number</div>
                <input type="Number" />
              </div>
              <div className="field btns">
                <button className="prev-1 prev">Previous</button>
                <button className="next-1 next">Next</button>
              </div>
            </div>
            <div className="page">
              <div className="title">Date of Birth:</div>
              <div className="field">
                <div className="label">Date</div>
                <input type="text" />
              </div>
              <div className="field">
                <div className="label">Gender</div>
                <select>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="field btns">
                <button className="prev-2 prev">Previous</button>
                <button className="next-2 next">Next</button>
              </div>
            </div>
            <div className="page">
              <div className="title">Login Details:</div>
              <div className="field">
                <div className="label">Username</div>
                <input type="text" />
              </div>
              <div className="field">
                <div className="label">Password</div>
                <input type="password" />
              </div>
              <div className="field btns">
                <button className="prev-3 prev">Previous</button>
                <button className="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration4;