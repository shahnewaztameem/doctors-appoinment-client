import React from 'react'
import { Spinner } from 'react-bootstrap'
import { Redirect, Route } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin, loading } = useAuth()

  return (
    <div>
      {loading ? (
        <Spinner animation='border' size='sm' />
      ) : (
        <Route
          {...rest}
          render={({ location }) =>
            user.email && admin ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: '/',
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

export default AdminRoute
