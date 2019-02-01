import { createActions } from 'reduxsauce'

export const {
  Types,
  Creators
} = createActions({
  getEmail: ['email'],
  getPassword: ['password'],
  requestLogin: ['user'],
  requestLoginSuccess: null,
  requestLoginError: ['errorMessage'],
  logout: null
})

export default Creators
