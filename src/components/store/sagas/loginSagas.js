import { put } from 'redux-saga/effects'
import { Creators } from './../actions'

export function* requestLogin(api, { user }) {
  try {
    const { data } = yield api.get(`users?email=${user.email}`)
    if (data.length === 0) {
      localStorage.removeItem('user')
      return yield put(Creators.requestLoginError('User not found'))
    }

    const responseUser = data[0]

    if (responseUser.password !== user.password) {
      localStorage.removeItem('user')
      return yield put(Creators.requestLoginError('Wrong password'))
    }

    responseUser.password = undefined

    localStorage.setItem('user', JSON.stringify(responseUser))

    yield put(Creators.requestLoginSuccess())

  } catch (error) {
    localStorage.removeItem('user')
    return yield put(Creators.requestLoginError('Error when try to authenticate ' + error))
  }
}

export function* logout() {
  yield localStorage.removeItem('user')
}