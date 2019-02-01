import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import Dashboard from '../pages/admin/dashboard'

const components = {
  dashboard: Dashboard
}

const PrivateRoutes = ({ isLogged }) => {
  return (
    Object.keys(components).map(index => {
      return (
        <Route
          path={`/${index}`}
          key={index}
          render={props => {
            const Component = components[index]
            return (isLogged ?
              (<Component {...props} />) : (<Redirect to='/' />))
          }
          }
        />
      )
    })
  )
}

export default PrivateRoutes