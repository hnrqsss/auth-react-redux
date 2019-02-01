import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { Creators } from './../../store/actions'
import Modal from './../../modal'

import {
  Container,
  Form,
  FormContent,
  Input,
  Button
} from './styles'

const bgImage = '/images/bg-login.jpg'

const Login = props => {
  const handleEmail = event => {
    const email = event.target.value
    props.getEmail(email)
  }

  const handlePassword = event => {
    const password = event.target.value
    props.getPassword(password)
  }

  const handleSubmit = event => {
    event.preventDefault()
    const user = {
      email: props.login.email,
      password: props.login.password
    }
    props.requestLogin(user)
  }

  return (
    <Container image={bgImage}>

      {props.login.isLogged && <Redirect to='/dashboard' />}

      {props.login.error && <Modal
        title='Error'
        text={props.login.errorMessage}
        show={props.login.error}
      />}
      <Form onSubmit={handleSubmit} className='login-form'>
        <FormContent>
          <Input
            type='email'
            name='email'
            className='email-login'
            onKeyUp={handleEmail}
            required
            placeholder='email@email.com' />
        </FormContent>
        <FormContent>
          <Input
            type='password'
            name='password'
            className='password-login'
            onKeyUp={handlePassword}
            required
            placeholder='Password' />
        </FormContent>
        <FormContent>
          <Button>Login</Button>
        </FormContent>
      </Form>
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getEmail: (email) => dispatch(Creators.getEmail(email)),
    getPassword: (password) => dispatch(Creators.getPassword(password)),
    requestLogin: (user) => dispatch(Creators.requestLogin(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)