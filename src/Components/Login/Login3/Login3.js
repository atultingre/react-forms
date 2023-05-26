import React from 'react'
import "./Login3.css"
import { Link } from 'react-router-dom'
const Login3 = () => {
  return (
    <div className='login3-form'>
         <div className="login3-container">
      <form action="#">
        <div className="title">Login</div>
        <div className="input-box underline">
          <input type="text" placeholder="Enter Your Email" required/>
          <div className="underline"></div>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Enter Your Password" required/>
          <div className="underline"></div>
        </div>
        <div className="input-box button">
          <input type="submit" name="" value="Continue"/>
        </div>
      </form>
        <div className="option">or Connect With Social Media</div>
        <div className="twitter">
          <Link href="#"><i className="fab fa-twitter"></i>Sign in With Twitter</Link>
        </div>
        <div className="facebook">
          <Link href="#"><i className="fab fa-facebook-f"></i>Sign in With Facebook</Link>
        </div>
    </div>
    </div>
  )
}

export default Login3