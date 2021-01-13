import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import logo from '../../logo-dimtech-black.png'
import { Link } from 'react-router-dom'


import './login.css'

const Login = () => {

  const [ isForgot, setIsForgot ] = useState(false)
  const [ isEmailSent, setIsEmailSent ] = useState(false)


  const handleForgotComponent = () => {
    setIsForgot(!isForgot)
  }

  const handleIsEmailState = () => {
    setIsEmailSent(false)
    setIsForgot(false)
  }
  
  return (
    <>
      <div className="welcome">
        <img src={logo} className="welcome-logo" />
        <div className="home-description">
          <p className="title">Hi, <span className="content">Welcome on Dimtech</span></p>
          <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
          dolor in reprehenderit.</p>
          <button className="button-home">Learn more</button>
        </div>
      </div>
      <div className="login">
      { !isForgot && (
        <>
          <p className="login-title">Sign-in</p>
          <form method="post" className="form">
            <input className="input"type="text" placeholder="Email" />
            <input className="input"type="password" placeholder="Password" />
            <div className="choices">
              <input type="checkbox" id="keep-me-logged" name="Keep me logged" />
              <label forHtml="keep-me-logged">Keep me logged</label>
              <Link onClick={handleForgotComponent} className="forgot-password">Forgot your password ?</Link>
            </div>
            <button className="button-login">Login</button>
            <p className="account">Need an account ?<Link className="sign-up" to="/sign-up"> Sign up</Link></p>
          </form>
        </>
      ) }
      { isForgot && (
        <>
        <p className="login-title">Forgotten password</p>
        { !isEmailSent && (
          <>
            <p className="description-forgot-password">Please enter your e-mail address to reset your password.</p>
            <form className="form">
              <input className="input" type="text" placeholder="Email" />
              <div className="forgot-buttons">
                <button className="button-login">Send</button>
                <Link className="button-cancel" onClick={handleForgotComponent}>Cancel</Link>
              </div>
            </form>
          </>
        ) }
        { isEmailSent && (
          <div className="email-box">
            <p className="description-forgot-sent"> An Email has been sent to <span className="contact">contact@contact.com</span> to reset you password<FontAwesomeIcon className="icon-check" icon={faCheckCircle} />
            </p>
            <button className="button-home" onClick={handleIsEmailState}>Home</button>
          </div>
        ) }
        </>
      )}
      </div>
    </>
  )
}

export default Login