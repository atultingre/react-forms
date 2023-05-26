import React from 'react'
import "./Login7.css"
import { Link } from 'react-router-dom'
const Login7 = () => {
  return (
    <div className='login7-body'>
         <div className="login-form">
         <div className="text">
            LOGIN
         </div>
         <form>
            <div className="field">
               <div className="fas fa-envelope"></div>
               <input type="text" placeholder="Email or Phone"/>
            </div>
            <div className="field">
               <div className="fas fa-lock"></div>
               <input type="password" placeholder="Password"/>
            </div>
            <button>LOGIN</button>
            <div className="link">
               Not a member?
               <Link to="#">Signup now</Link>
            </div>
         </form>
      </div>
    </div>
  )
}

export default Login7