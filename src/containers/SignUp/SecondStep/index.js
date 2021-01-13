import { connect } from 'react-redux'
import SecondStep from '../../../components/SignUp/SecondStep'
import {
  handleFirstNameInput,
  handleLastNameInput,
  handleBirthdateInput,
  handleCountryInput,
  handleProfessionInput,
  handleNumberInput,
  handleAvatarFile,
  } from '../../../store/reducers/user'

const mapStateToProps = (state) => ({
  firstName: state.user.firstName,
  lastName: state.user.lastName,
  profession: state.user.profession,
  number: state.user.number,
  avatar: state.user.avatar,
})

const mapDispatchToProps = (dispatch) => ({
  handleFirstNameInput: (firstNameValue) => {
    dispatch(handleFirstNameInput(firstNameValue))
  },
  handleLastNameInput: (lastNameValue) => {
    dispatch(handleLastNameInput(lastNameValue))
  },
  handleBirthdateInput: (birthdayValue) => {
    dispatch(handleBirthdateInput(birthdayValue))
  },
  handleCountryInput: (countryValue) => {
    dispatch(handleCountryInput(countryValue))
  },
  handleProfessionInput: (professionValue) => {
    dispatch(handleProfessionInput(professionValue))
  },
  handleNumberInput: (numberValue)  => {
    dispatch(handleNumberInput(numberValue))
  },
  handleAvatarFile: (avatarValue) => {
    dispatch(handleAvatarFile(avatarValue))
  }

})

const SecondStepContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SecondStep)

export default SecondStepContainer