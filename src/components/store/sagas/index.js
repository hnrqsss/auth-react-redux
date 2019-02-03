import api from './../../../utils/api'
import { requestLogin, logout } from './loginSagas'
import { takeLatest } from 'redux-saga/effects';

export default function* root() {
  yield [
    takeLatest('REQUEST_LOGIN', requestLogin, api),
    takeLatest('LOGOUT', logout)
  ]
}