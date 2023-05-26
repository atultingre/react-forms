import React from "react";
import "./Registration6.css";

const Registration6 = () => {
  return (
    <div className="registration6-body">
       <section className="registration6-container">
      <header>Registration Form</header>
      <form action="#" className="registration6-form">
        <div className="input-box">
          <label className="registration6-label">Full Name</label>
          <input className="registration6-input" type="text" placeholder="Enter full name" required />
        </div>
        <div className="input-box">
          <label className="registration6-label">Email Address</label>
          <input className="registration6-input" type="text" placeholder="Enter email address" required />
        </div>
        <div className="column">
          <div className="input-box">
            <label className="registration6-label">Phone Number</label>
            <input className="registration6-input" type="number" placeholder="Enter phone number" required />
          </div>
          <div className="input-box">
            <label className="registration6-label">Birth Date</label>
            <input className="registration6-input" type="date" placeholder="Enter birth date" required />
          </div>
        </div>
        <div className="gender-box">
          <h3>Gender</h3>
          <div className="gender-option">
            <div className="gender">
              <input className="registration6-input" type="radio" id="check-male" name="gender" checked />
              <label className="registration6-label" for="check-male">male</label>
            </div>
            <div className="gender">
              <input className="registration6-input" type="radio" id="check-female" name="gender" />
              <label className="registration6-label" for="check-female">Female</label>
            </div>
            <div className="gender">
              <input className="registration6-input" type="radio" id="check-other" name="gender" />
              <label className="registration6-label" for="check-other">prefer not to say</label>
            </div>
          </div>
        </div>
        <div className="input-box address">
          <label className="registration6-label">Address</label>
          <input className="registration6-input" type="text" placeholder="Enter street address" required />
          <input className="registration6-input" type="text" placeholder="Enter street address line 2" required />
          <div className="column">
            <div className="select-box">
              <select>
                <option hidden>Country</option>
                <option>America</option>
                <option>Japan</option>
                <option>India</option>
                <option>Nepal</option>
              </select>
            </div>
            <input className="registration6-input" type="text" placeholder="Enter your city" required />
          </div>
          <div className="column">
            <input className="registration6-input" type="text" placeholder="Enter your region" required />
            <input className="registration6-input" type="number" placeholder="Enter postal code" required />
          </div>
        </div>
        <button className="registration6-button">Submit</button>
      </form>
    </section>
    </div>
  );
};

export default Registration6;
