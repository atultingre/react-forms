import React from 'react'
import "./Login8.css"
import { Link } from 'react-router-dom'
const Login8 = () => {
  return (
    <div className='login8-body'>
         <div className="content">
         <div className="text">
            Login Form
         </div>
         <form action="#">
            <div className="login8-field">
               {/* <label>Email or Phone</label> */}
               <input type="text" required placeholder='Email or Phone'/>
               <span className="fas fa-user"></span>
            </div>
            <div className="login8-field">
               {/* <label>Password</label> */}
               <input type="password" required placeholder='Password'/>
               <span className="fas fa-lock"></span>
            </div>
            <div className="forgot-pass">
               <Link to="#">Forgot Password?</Link>
            </div>
            <button className='login8-button'>Sign in</button>
            <div className="sign-up">
               Not a member?
               <Link to="#">signup now</Link>
            </div>
         </form>
      </div>
    </div>
  )
}

export default Login8