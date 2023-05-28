import React, { useState } from "react";
import "./Registration3.css";

const Registration3 = () => {
  const [isSecActive, setIsSecActive] = useState(false);

  const handleNextClick = () => {
    const allInput = document.querySelectorAll(".first input");
    allInput.forEach((input) => {
      if (input.value !== "") {
        setIsSecActive(true);
      } else {
        setIsSecActive(false);
      }
    });
  };

  const handleBackClick = () => {
    setIsSecActive(false);
  };

  return (
    <div className="registration3-body">
      <div className="registration3-container">
        <header className="registration3-header">Registration</header>
        <form action="#" className="registration3-form1">
          <div className="registration3-form .first">
            <div className="registration3-details personal">
              <span className="registration3-title">Personal Details</span>
              <div className="registration3-fields">
                <div className="registration3-input-field">
                  <label className="registration3-label">Full Name</label>
                  <input
                    className="registration3-input"
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="registration3-input-field">
                  <label className="registration3-label">Date of Birth</label>
                  <input
                    className="registration3-input"
                    type="date"
                    placeholder="Enter birth date"
                    required
                  />
                </div>
                <div className="registration3-input-field">
                  <label className="registration3-label">Email</label>
                  <input
                    className="registration3-input"
                    type="text"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="registration3-input-field">
                  <label className="registration3-label">Mobile Number</label>
                  <input
                    className="registration3-input"
                    type="number"
                    placeholder="Enter mobile number"
                    required
                  />
                </div>
                <div className="registration3-input-field">
                  <label className="registration3-label">Gender</label>
                  <select defaultValue="" required>
                    <option value="" disabled>
                      Select gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div className="registration3-input-field">
                  <label className="registration3-label">Occupation</label>
                  <input
                    className="registration3-input"
                    type="text"
                    placeholder="Enter your occupation"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="registration3-details ID">
              <span className="registration3-title">Identity Details</span>
              <div className="registration3-fields">
                <div className="registration3-input-field">
                  <label className="registration3-label">ID Type</label>
                  <input
                    className="registration3-input"
                    type="text"
                    placeholder="Enter ID type"
                    required
                  />
                </div>
                <div className="registration3-input-field">
                  <label className="registration3-label">ID Number</label>
                  <input
                    className="registration3-input"
                    type="number"
                    placeholder="Enter ID number"
                    required
                  />
                </div>
                <div className="registration3-input-field">
                  <label className="registration3-label">
                    Issued Authority
                  </label>
                  <input
                    className="registration3-input"
                    type="text"
                    placeholder="Enter issued authority"
                    required
                  />
                </div>
                <div className="registration3-input-field">
                  <label className="registration3-label">Issued State</label>
                  <input
                    className="registration3-input"
                    type="text"
                    placeholder="Enter issued state"
                    required
                  />
                </div>
                <div className="registration3-input-field">
                  <label className="registration3-label">Issued Date</label>
                  <input
                    className="registration3-input"
                    type="date"
                    placeholder="Enter your issued date"
                    required
                  />
                </div>
                <div className="registration3-input-field">
                  <label className="registration3-label">Expiry Date</label>
                  <input
                    className="registration3-input"
                    type="date"
                    placeholder="Enter expiry date"
                    required
                  />
                </div>
              </div>
              <button className="registration3-nextBtn" onClick={handleNextClick}>
                <span className="registration3-btnText button">Next</span>
                <i className="uil uil-navigator"></i>
              </button>
            </div>
          </div>
          <div className=".registration3-form second">
            <div className="registration3-details registration3-address">
              <span className="registration3-title">Address Details</span>
              <div className="registration3-fields">
                <div className="registration3-input-field">
                  <label className="registration3-label">Address Type</label>
                  <input
                    className="registration3-input"
                    type="text"
                    placeholder="Permanent or Temporary"
                    required
                  />
                </div>
                <div className="registration3-input-field">
                  <label className="registration3-label">Nationality</label>
                  <input
                    className="registration3-input"
                    type="text"
                    placeholder="Enter nationality"
                    required
                  />
                </div>
                <div className="registration3-input-field">
                  <label className="registration3-label">State</label>
                  <input
                    className="registration3-input"
                    type="text"
                    placeholder="Enter your state"
                    required
                  />
                </div>
                <div className="registration3-input-field">
                  <label className="registration3-label">District</label>
                  <input
                    className="registration3-input"
                    type="text"
                    placeholder="Enter your district"
                    required
                  />
                </div>
                <div className="registration3-input-field">
                  <label className="registration3-label">Block Number</label>
                  <input
                    className="registration3-input"
                    type="number"
                    placeholder="Enter block number"
                    required
                  />
                </div>
                <div className="registration3-input-field">
                  <label className="registration3-label">Ward Number</label>
                  <input
                    className="registration3-input"
                    type="number"
                    placeholder="Enter ward number"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="registration3-details family">
              <span className="registration3-title">Family Details</span>
              <div className="registration3-fields">
                <div className="registration3-input-field">
                  <label className="registration3-label">Father Name</label>
                  <input
                    className="registration3-input"
                    type="text"
                    placeholder="Enter father name"
                    required
                  />
                </div>
                <div className="registration3-input-field">
                  <label className="registration3-label">Mother Name</label>
                  <input
                    className="registration3-input"
                    type="text"
                    placeholder="Enter mother name"
                    required
                  />
                </div>
                <div className="registration3-input-field">
                  <label className="registration3-label">Grandfather</label>
                  <input
                    className="registration3-input"
                    type="text"
                    placeholder="Enter grandfther name"
                    required
                  />
                </div>
                <div className="registration3-input-field">
                  <label className="registration3-label">Spouse Name</label>
                  <input
                    className="registration3-input"
                    type="text"
                    placeholder="Enter spouse name"
                    required
                  />
                </div>
                <div className="registration3-input-field">
                  <label className="registration3-label">Father in Law</label>
                  <input
                    className="registration3-input"
                    type="text"
                    placeholder="Father in law name"
                    required
                  />
                </div>
                <div className="registration3-input-field">
                  <label className="registration3-label">Mother in Law</label>
                  <input
                    className="registration3-input"
                    type="text"
                    placeholder="Mother in law name"
                    required
                  />
                </div>
              </div>
              <div className="registration3-buttons">
                <div className="backBtn">
                  <i className="uil uil-navigator"></i>
                  <button onClick={handleBackClick} className="registration3-btnText button">Back</button>
                </div>
                <button className="registration3-sumbit" onClick={handleNextClick}>
                  <span className="registration3-btnText button">Submit</span>
                  <i className="uil uil-navigator"></i>
                </button>
              </div>
              {isSecActive && <div>Section Active</div>}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration3;
