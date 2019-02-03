import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import PrivateRoutes from './privateRouter'
import Login from '../pages/login'

const Routes = ({ isLogged }) => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <PrivateRoutes isLogged={isLogged} />
      </Switch>
    </Router>
  )
}

const mapStateToProps = (state) => {
  return {
    isLogged: state.login.isLogged
  }
}

export default connect(mapStateToProps)(Routes)