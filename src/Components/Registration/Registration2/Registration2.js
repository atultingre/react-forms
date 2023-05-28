import React from 'react'
import "./Registration2.css"

const Registration2 = () => {
  return (
    <div className='registration2-body'>
        <div className="registration2-container">
            <div className="registration2-title">Registration</div>
            <div className="registration2-content">
            <form action="#" className='registration2-form'>
                <div className="registration2-user-details">
                <div className="registration2-input-box">
                    <span className="registration2-details">Full Name</span>
                    <input className="registration2-input" type="text" placeholder="Enter your name" required/>
                </div>
                <div className="registration2-input-box">
                    <span className="registration2-details">Username</span>
                    <input className="registration2-input" type="text" placeholder="Enter your username" required/>
                </div>
                <div className="registration2-input-box">
                    <span className="registration2-details">Email</span>
                    <input className="registration2-input" type="text" placeholder="Enter your email" required/>
                </div>
                <div className="registration2-input-box">
                    <span className="registration2-details">Phone Number</span>
                    <input className="registration2-input" type="text" placeholder="Enter your number" required/>
                </div>
                <div className="registration2-input-box">
                    <span className="registration2-details">Password</span>
                    <input className="registration2-input" type="text" placeholder="Enter your password" required/>
                </div>
                <div className="registration2-input-box">
                    <span className="registration2-details">Confirm Password</span>
                    <input className="registration2-input" type="text" placeholder="Confirm your password" required/>
                </div>
                </div>
                <div className="gender-details">
                    <input className="registration2-input" type="radio" name="gender" id="dot-1"/>
                    <input className="registration2-input" type="radio" name="gender" id="dot-2"/>
                    <input className="registration2-input" type="radio" name="gender" id="dot-3"/>
                    <span className="registration2-gender-title">Gender</span>
                    <div className="registration2-category">
                        <label for="dot-1">
                            <span className="dot one"></span>
                            <span className="gender">Male</span>
                        </label>
                        <label for="dot-2">
                            <span className="dot two"></span>
                            <span className="gender">Female</span>
                        </label>
                        <label for="dot-3">
                            <span className="dot three"></span>
                            <span className="gender">Prefer not to say</span>
                        </label>
                    </div>
                </div>
                <div className="registration2-button">
                <input className="registration2-input" type="submit" value="Register"/>
                </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Registration2