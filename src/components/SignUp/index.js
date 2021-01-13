import React, { useState } from 'react'
import logo from '../../logo-dimtech-white.png'
import { Link } from 'react-router-dom'
import classNames from "classnames"

import './signup.css'
import FirstStep from '../../containers/SignUp/FirstStep'
import SecondStep from '../../containers/SignUp/SecondStep'
import ThirdStep from './ThirdStep'

const Signup = () => {

  const [ isFirstStep, setIsFirstStep ] = useState(true)
  const [ isSecondStep, setIsSecondStep ] = useState(false)
  const [ isThirdStep, setIsThirdStep ] = useState(false)

  const handleFirstStep = () => {
    setIsFirstStep(true)
    setIsSecondStep(false)
    setIsThirdStep(false)
  }

  const handleSecondStep = () => {
    setIsFirstStep(false)
    setIsSecondStep(true)
    setIsThirdStep(false)
  }

  const handleThirdStep = () => {
    setIsFirstStep(false)
    setIsSecondStep(false)
    setIsThirdStep(true)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    console.log('coucou');
  }

  const activeFirstButton = classNames('button-signup', { 'button-signup-active' : isFirstStep})
  const activeSecondButton = classNames('button-signup', { 'button-signup-active' : isSecondStep})
  const activeThirdButton = classNames('button-signup', { 'button-signup-active' : isThirdStep })

  return (
    <>
      <div className="disclaimer-risk">
        <img src={logo} className="welcome-logo" />
        <div className="signup-description">
        { isFirstStep && ( 
          <>
            <p className="title">Disclaimer risk</p>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit.</p>
          </>
        ) }
        { isSecondStep && (
          <>
            <p className="title">Why we need these information ?</p>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit.</p>
          </>
        )}
        { isThirdStep && (
          <>
            <p className="title">A little more more about you….</p>
          </>
        ) }
         </div>
      </div>
      <div className="signup">
        <div className="buttons-signup">
          <button className={activeFirstButton}>1</button>
          <button className={activeSecondButton}>2</button>
          <button className={activeThirdButton}>3</button>
        </div>
        <form method="post" onSubmit={handleOnSubmit}>
          { isFirstStep && ( 
            <FirstStep handleSecondStep={handleSecondStep} />
          )}
          { isSecondStep && (
            <SecondStep handleThirdStep={handleThirdStep} />
          )}
          { isThirdStep && (
            <ThirdStep />
          )}
        </form>
      </div>
    </>

  )

}

export default Signup