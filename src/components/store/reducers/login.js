import { createReducer } from 'reduxsauce'

import { Types } from './../actions'

const INITIAL_STATE = {
  isLogged: false,
  isFetching: false,
  email: '',
  password: '',
  errorMessage: '',
  error: false
}

export const getEmail = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isFetching: false,
    isLogged: false,
    email: action.email,
    errorMessage: '',
    error: false
  }
}

export const getPassword = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isFetching: false,
    isLogged: false,
    password: action.password,
    errorMessage: '',
    error: false
  }
}

export const requestLoginSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isFetching: false,
    isLogged: true,
    email: '',
    password: '',
    errorMessage: '',
    error: false
  }
}

export const requestLoginError = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isFetching: false,
    isLogged: false,
    errorMessage: action.errorMessage,
    error: true
  }
}

export const logout = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isFetching: false,
    isLogged: false,
    email: '',
    password: '',
    errorMessage: '',
    error: false
  }
}

export const HANDLERS = {
  [Types.GET_EMAIL]: getEmail,
  [Types.GET_PASSWORD]: getPassword,
  [Types.REQUEST_LOGIN_SUCCESS]: requestLoginSuccess,
  [Types.REQUEST_LOGIN_ERROR]: requestLoginError,
  [Types.LOGOUT]: logout
}

export default createReducer(INITIAL_STATE, HANDLERS)