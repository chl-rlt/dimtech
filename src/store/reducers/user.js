const initialState = {
  email: '',
  password: '',
  confirmedPassword: '',
  firstName: '',
  lastName: '',
  birthdate: '',
  country: '',
  profession: '',
  number: '',
  avatar: null,
  educationLvl: '',
  currentJob: '',
  currentJobTradingYears: '',
  tradingFrequency: '',
  horizonInvest: '',
  riskTolerance: '',
  regulationAwareness: '',
  encounteredWay: '',
}

const HANDLE_INPUT_EMAIL = 'HANDLE_INPUT_EMAIL'
const HANDLE_INPUT_PASSWORD = 'HANDLE_INPUT_PASSWORD'
const HANDLE_INPUT_PASSWORD_CONFIRM = 'HANDLE_INPUT_PASSWORD_CONFIRM'
const HANDLE_FIRSTNAME_INPUT = 'HANDLE_FIRSTNAME_INPUT'
const HANDLE_LASTNAME_INPUT = 'HANDLE_LASTNAME_INPUT'
const HANDLE_BIRTHDATE_INPUT = 'HANDLE_BIRTHDATE_INPUT'
const HANDLE_INPUT_COUNTRY = 'HANDLE_INPUT_COUNTRY'
const HANDLE_PROFESSION_INPUT = 'HANDLE_PROFESSION_INPUT'
const HANDLE_NUMBER_INPUT = 'HANDLE_NUMBER_INPUT'
const HANDLE_AVATAR_INPUT = 'HANDLE_AVATAR_INPUT'
const HANDLE_EDUCATIONLVL_INPUT = 'HANDLE_EDUCATIONLVL_INPUT'
const HANDLE_CURRENTJOB_INPUT = 'HANDLE_CURRENTJOB_INPUT'
const HANDLE_CURRENTJOBTRADING_INPUT = 'HANDLE_CURRENTJOBTRADING_INPUT'
const HANDLE_TRADINGFREQUENCY_INPUT = 'HANDLE_TRADINGFREQUENCY_INPUT'
const HANDLE_HORIZONINVEST_INPUT = 'HANDLE_HORIZONINVEST_INPUT'
const HANDLE_RISK_INPUT = 'HANDLE_RISK_INPUT '
const HANDLE_REGULATIONAWARENESS_INPUT = 'HANDLE_REGULATIONAWARENESS_INPUT'
const HANDLE_ENCOUNTEREDWAY_INPUT = 'HANDLE_ENCOUNTEREDWAY_INPUT'




const reducer = (state = initialState, action = {}) => {
  switch  (action.type) {
    case HANDLE_INPUT_EMAIL:
      return { ...state, email:  action.currentEmailValue }
    case HANDLE_INPUT_PASSWORD:
      return { ...state, password: action.currentPassword }
    case HANDLE_INPUT_PASSWORD_CONFIRM: 
      return { ...state, confirmedPassword: action.currentPasswordConfirm }
    case HANDLE_FIRSTNAME_INPUT: 
      return { ...state, firstName: action.currentFirstName}
    case HANDLE_LASTNAME_INPUT: 
      return { ...state, lastName: action.currentLastName}
    case HANDLE_BIRTHDATE_INPUT: 
      return { ...state, birthdate: action.currentBirthdate}
    case HANDLE_INPUT_COUNTRY: 
      return { ...state, country: action.currentCountry}
    case HANDLE_PROFESSION_INPUT: 
      return { ...state, profession: action.currentProfession}
    case HANDLE_NUMBER_INPUT: 
      return { ...state, number: action.currentNumber}
    case HANDLE_AVATAR_INPUT: 
      return { ...state, avatar: action.currentAvatar}
    case HANDLE_EDUCATIONLVL_INPUT: 
      return { ...state, educationLvl: action.currentEducationLevel}
    case HANDLE_CURRENTJOB_INPUT: 
      return { ...state, currentJob: action.currentJobValue}
    case HANDLE_CURRENTJOBTRADING_INPUT: 
      return { ...state, currentJobTradingYears: action.currentJobTrading}
    case HANDLE_TRADINGFREQUENCY_INPUT: 
      return { ...state, tradingFrequency: action.currentTradingFrequency}
    case HANDLE_HORIZONINVEST_INPUT: 
      return { ...state, horizonInvest: action.currentHorizonInvest}
    case HANDLE_RISK_INPUT: 
      return { ...state, riskTolerance: action.currentRiskTolerance}
    case HANDLE_REGULATIONAWARENESS_INPUT: 
      return { ...state, regulationAwareness: action.currentRegulationAwareness}
    case HANDLE_ENCOUNTEREDWAY_INPUT: 
      return { ...state, encounteredWay: action.currentEncounteredWay}
  
    default: return state
  }
}

export const handleEmailInput = (currentEmailValue) => ({
  type: HANDLE_INPUT_EMAIL,
  currentEmailValue,
})

export const handlePasswordInput = (currentPassword) => ({
  type: HANDLE_INPUT_PASSWORD,
  currentPassword,
})
export const handlePasswordConfirm = (currentPasswordConfirm) => ({
  type: HANDLE_INPUT_PASSWORD_CONFIRM,
  currentPasswordConfirm,
})

// set the firstname in the state
export const handleFirstNameInput = (currentFirstName) => ({
  type: HANDLE_FIRSTNAME_INPUT,
  currentFirstName,
})

//set the lastname in the state
export const handleLastNameInput = (currentLastName) => ({
  type: HANDLE_LASTNAME_INPUT,
  currentLastName,
})

//set the birthdate to the state
export const handleBirthdateInput = (currentBirthdate) => ({
  type: HANDLE_BIRTHDATE_INPUT,
  currentBirthdate,
})

//set the country to the state
export const handleCountryInput = (currentCountry) => ({
  type: HANDLE_INPUT_COUNTRY,
  currentCountry,
})

//set the profession to the state
export const handleProfessionInput = (currentProfession) => ({
  type: HANDLE_PROFESSION_INPUT,
  currentProfession,
})

//set the number to the state
export const handleNumberInput = (currentNumber) => ({
  type: HANDLE_PROFESSION_INPUT,
  currentNumber,
})

//set the avatar file to the state
export const handleAvatarFile = (currentAvatar) => ({
  type: HANDLE_AVATAR_INPUT,
  currentAvatar,
})

//set the eduction level to the state
export const handleEducationLvl = (currentEductionLevel) => ({
  type: HANDLE_EDUCATIONLVL_INPUT,
  currentEductionLevel,
})

//set the currentJob to the state
export const handleCurrentJob = (currentJobValue) => ({
  type: HANDLE_CURRENTJOB_INPUT,
  currentJobValue,
})

//set the currentJobeTrading to the state
export const handleCurrentJobTrading = (currentJobTrading) => ({
  type: HANDLE_CURRENTJOBTRADING_INPUT,
  currentJobTrading,
})

//set the trading frequency to the state
export const handleTradingFrequency = (currentTradingFrequency) => ({
  type: HANDLE_TRADINGFREQUENCY_INPUT,
  currentTradingFrequency,
})

//set the horizon invest to the state
export const handleHorizonInvest = (currentHorizonInvest) => ({
  type: HANDLE_HORIZONINVEST_INPUT,
  currentHorizonInvest,
})

//set the horizon risk to the state
export const handleRiskTolerance = (currentRiskTolerance) => ({
  type: HANDLE_RISK_INPUT,
  currentRiskTolerance,
})

//set the Regulation Awareness invest to the state
export const handleRegulationAwareness = (currentRegulationAwareness) => ({
  type: HANDLE_REGULATIONAWARENESS_INPUT,
  currentRegulationAwareness,
})

//set the EncounteredWay risk to the state
export const handleEncounteredWay = (currentEncounteredWay) => ({
  type: HANDLE_ENCOUNTEREDWAY_INPUT,
  currentEncounteredWay,
})




export default reducer