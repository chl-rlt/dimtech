import React, { useState, useEffect } from 'react'
import { months, days, years } from '../../../datas/date'
import photo from '../../../profile-photo.png'
import countries from 'country-region-data'

const SecondStep = ({
  firstName,
  lastName,
  birthdate,
  country,
  profession,
  number,
  avatar,
  handleThirdStep, 
  handleFirstNameInput, 
  handleLastNameInput, 
  handleBirthdateInput, 
  handleCountryInput, 
  handleProfessionInput, 
  handleNumberInput,
  handleAvatarFile
}) => {

  const [ month, setMonth ] = useState('')
  const [ year, setYear ] = useState('')
  const [ day, setDay ] = useState('')
  const [ date, setDate ] = useState('')

  useEffect(() => {
    setCurrentBirthdate()
  }, [month || year || date])

  const setCurrentBirthdate = () => {
    const currentDate = `${month}/${year}/${day}`
    setDate(currentDate)
    console.log(date)
  }

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      handleThirdStep()
    }
   }

   const getMonthValue = (e) => {
    const { value } = e.target
    setMonth(value)
   }
   
   const getYearValue = (e) => {
    const { value } = e.target
    setYear(value)
   }
   
   const getDayValue = (e) => {
     const { value }  = e.target
     setDay(value)
   }

   const handleFirstNameChange = (e) => {
    const { value } = e.target
    handleFirstNameInput(value)
   }

   const handleLastNameChange = (e) => {
    const { value } = e.target
    handleLastNameInput(value)
   }

   const handleBirthdateChange = (e) => {
    const { value } = e.target
    handleBirthdateInput(value)
   }
   
   const handleCountryChange = (e) => {
    const { value } = e.target
    handleCountryInput(value)
   }

   const handleProfessionChange = (e) => {
    const { value } = e.target
    handleProfessionInput(value)
   }
   
   const handleNumberChange = (e) => {
    const { value } = e.target
    handleNumberInput(value)
   }

   const handleAvatarChange = (e) => {
     console.log(e.target.value)
   }
   

  return (
    <div className="form form-signup" onKeyPress={handleEnter}>
      <div className="box">
        <div className="left">
          <input onChange={handleFirstNameChange} className="input-signup" type="text" placeholder="First Name" value={firstName} />
          <input onChange={handleLastNameChange} className="input-signup" type="text" placeholder="Last Name" value={lastName} />
          <label className="label-signup" forHtml="date-of-birth">Date of birth</label>
          <div className="selects-signup">
            <select onClick={handleBirthdateChange} onClick={getMonthValue} className="select-signup" name="month" id="month" value={birthdate}>
              <option value="">Month</option>
              {months.map((month) => (
                <option key={month.id} value={month.value}>{month.value}</option>
              ))}
            </select>
            <select onClick={getYearValue} className="select-signup" name="year" id="year" >
              <option value="">Year</option>
              {years.map((year) => (
                <option key={year.id} value={year.year}>{year.year}</option>
              ))}
            </select>
            <select onClick={getDayValue} className="select-signup" id="day" name="day">
              <option value="">Day</option>
              {days.map((day) => (
                <option key={day.id} value={day.day}>{day.day}</option>
              ))}
            </select>
          </div>
          <select onChange={handleCountryChange} className="select-signup-country" id="country-of-residence" name="residence" value={country}>
            <option value="">Country of residence</option>
            { countries.map((single) => (
              <option value={single.countryName}>{single.countryName}</option>
            )) }
          </select>
          <input onChange={handleProfessionChange} className="input-signup" type="text" placeholder="Profession" value={profession}/>
          <label className="label-signup" forHtml="Phone number">Phone number</label>
          <div className="phone-number">
            <select onChange={handleNumberChange} className="select-signup-phone" id="tel-ind" >
              <option>Ind</option>
              <option value="+33">+33 France</option>
              <option value="+44">+44 United Kingdom</option>
              <option value="+1">+1 United States of America</option>
            </select>
            <input className="input-signup-phone" type="tel" placeholder="Number" value={number}/>
          </div>
        </div>
        <div className="signup-photo-box">
          <img src={photo} className="signup-photo" />
          <input onChange={handleAvatarChange} type="file" className="signup-input-file" value={avatar}/>
        </div>
      </div>
      <button type="button" onClick={handleThirdStep} className="button-next-secondstep">Next</button>
    </div>
  )
}

export default SecondStep
