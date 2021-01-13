import React from 'react'

const FirstStep = ({
  handleSecondStep,
  email,
  handleEmailInput,
  password,
  confirmedPassword,
  handlePasswordInput,
  handlePasswordConfirm
}) => {

  const handleEnter = (e) => {
    if (e.key === 'Enter' && email === '' && password === '' && confirmedPassword === '') return
    if (e.key === 'Enter' && password === '' && confirmedPassword === '') return
    if (e.key === 'Enter' && email === '') return
    if (e.key === 'Enter' && confirmedPassword === password) {
      handleSecondStep()
    } else if (e.key === 'Enter' && confirmedPassword !== password ) return
   }

   const toTheNextStep = () => {
    if (email === '' && password === '' && confirmedPassword === '') return
    if (password === '' && confirmedPassword === '') return
    if (email === '') return
    if(confirmedPassword !== password) return
    handleSecondStep()
   }

   const handleEmailChange = (e) => {
      const { value } = e.target
      handleEmailInput(value)
   }

   const handlePasswordChange = (e) => {
      const { value } = e.target
      handlePasswordInput(value)
   }

   const handleConfirmedPasswordChange = (e) => {
     const { value } = e.target
     handlePasswordConfirm(value)
   }

  return (
    <div className="form form-signup" onKeyPress={handleEnter}>
      <input onChange={handleEmailChange} className="input-signup"type="text" placeholder="Email" value={email} />
      <input onChange={handlePasswordChange} className="input-signup"type="password" placeholder="Password" value={password} />
      <input onChange={handleConfirmedPasswordChange} className="input-signup" type="password" placeholder="Confirm password" value={confirmedPassword} />
      <div className="choices">
        <input type="checkbox" id="keep-me-logged" name="Keep me logged" />
        <label className="checkbox-form" forHtml="keep-me-logged">Keep me logged</label>
      </div>
      <button type="button" onClick={toTheNextStep}  className="button-next">Next</button>
    </div>
  )
}

export default FirstStep