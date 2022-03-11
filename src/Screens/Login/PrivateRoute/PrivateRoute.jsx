import React from 'react'
import { Spinner } from 'react-bootstrap'
import { Redirect, Route } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'

const PrivateRoute = ({ children, ...rest }) => {
  const { user, loading } = useAuth()

  return (
    <div>
      {loading ? (
        <Spinner animation='border' size='sm' />
      ) : (
        <Route
          {...rest}
          render={({ location }) =>
            user.email ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: '/login',
                  state: { from: location },
                }}
              />
            )
          }
        />
      )}
    </div>
  )
}

export default PrivateRoute
