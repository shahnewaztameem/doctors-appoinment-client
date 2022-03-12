import React, { useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import useAuth from '../../../hooks/useAuth'
import Navbar from '../../Shared/Navbar/Navbar'
const Login = () => {
  const [loginInfo, setLoginInfo] = useState({})
  const { user, loginUser, loading, userError, googleSignIn } = useAuth()

  // handle login input
  const handleOnChange = (e) => {
    const field = e.target.name
    const value = e.target.value

    const newLoginData = { ...loginInfo }
    newLoginData[field] = value
    setLoginInfo(newLoginData)
  }

  // google signin
  const handleGoogleSignin = () => {
    googleSignIn(location, history)
  }

  // handle login submit
  const handleLoginSubmit = (e) => {
    loginUser(loginInfo.email, loginInfo.password, location, history)
    e.preventDefault()
  }

  const location = useLocation()
  const history = useHistory()

  return (
    <div className='container-fluid px-5'>
      <Navbar />

      <div className='container'>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <h2 className='text-center'>Login</h2>
            {userError && (
              <div class='alert alert-danger'>
                <strong>{userError}</strong>
              </div>
            )}
            
            <form onSubmit={handleLoginSubmit}>
              <div class='form-group'>
                <label className='mb-1'>Email address</label>
                <input
                  type='email'
                  class='form-control mb-2'
                  name='email'
                  onChange={handleOnChange}
                  placeholder='Enter email'
                />
              </div>
              <div class='form-group'>
                <label className='mb-1'>Password</label>
                <input
                  type='password'
                  class='form-control mb-2'
                  name='password'
                  onChange={handleOnChange}
                  placeholder='Password'
                />
              </div>

              {loading ? (
                <button class='btn btn-primary mt-3'>
                  <Spinner animation='border' size='sm' />
                </button>
              ) : (
                <button type='submit' class='btn btn-primary mt-3'>
                  {' '}
                  Login
                </button>
              )}
            </form>
            <button className='btn btn-primary btn-block mt-5' onClick={handleGoogleSignin}>Signin with Google</button>
            <div>
              <p>
                Don't have account? <Link to='/signup'>Signup here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
