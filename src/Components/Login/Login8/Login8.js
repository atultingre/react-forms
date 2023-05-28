import React from 'react'
import "./Login8.css"
import { Link } from 'react-router-dom'
const Login8 = () => {
  return (
    <div className='login8-body'>
         <div className="login8-content">
         <div className="login8-text">
            Login Form
         </div>
         <form action="#" className='login8-form'>
            <div className="login8-field">
               <label className='login8-label'>Email or Phone</label>
               {/* placeholder='Email or Phone' */}
               <input type="text" required />
               <span className="fas fa-user"></span>
            </div>
            <div className="login8-field">
               <label className='login8-label'>Password</label>
               <input type="password" required/>
               <span className="fas fa-lock"></span>
            </div>
            <div className="login8-forgot-pass">
               <Link to="#">Forgot Password?</Link>
            </div>
            <button className='login8-button'>Sign in</button>
            <div className="login8-sign-up">
               Not a member?
               <Link to="#">signup now</Link>
            </div>
         </form>
      </div>
    </div>
  )
}

export default Login8