import React from 'react'
import './LoginSignup.css'

import email from '../assets/email.png';
import password from '../assets/password.png';
import user from '../assets/user.png';

export default function LoginSignup() {
  return (
    <div className="container">
    <div className="header">
    <div className="text">Sign-Up</div>
    <div className="underline"></div>  
    </div>
    <div className="inputs">
        <div className="input">
        <img src={user} alt="user" />
        <input type="text" placeholder='Username'/>
        </div>
        <div className="input">
        <img src={email} alt="email-icon" />
        <input type="email" placeholder='Email Id'/>
        </div>
        <div className="input">
        <img src={password} alt="password-icon" />
        <input type="password" placeholder='Password'/>
        </div>
    </div>
    <div className="forgot-password">Forgot Password?<span>Click Here!</span></div>
    <div className="submit-container">
        <div className="submit">Sign-Up</div>
        <div className="submit">Login</div>
        </div>
    </div>
  )
}
