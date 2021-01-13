import { connect } from 'react-redux'
import FirstStep from '../../../components/SignUp/FirstStep'
import { handleEmailInput, handlePasswordInput, handlePasswordConfirm } from '../../../store/reducers/user'

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  confirmedPassword: state.user.confirmedPassword,
})

const mapDispatchToProps = (dispatch) => ({
  handleEmailInput: (currentEmail) => {
    dispatch(handleEmailInput(currentEmail))
  },
  handlePasswordInput: (currentPassword) => {
    dispatch(handlePasswordInput(currentPassword))
  },
  handlePasswordConfirm: (currentPasswordConfirm) => {
    dispatch(handlePasswordConfirm(currentPasswordConfirm))
  },
})

const FirstStepContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FirstStep)

export default FirstStepContainer