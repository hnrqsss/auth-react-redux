import React from 'react'
import { Route } from 'react-router-dom'

import Login from '../login/Login'


const PublicRoutes = () => {
  return (
    <div>
      <Route path='/' component={Login} />
    </div>
  )
}

export default PublicRoutes