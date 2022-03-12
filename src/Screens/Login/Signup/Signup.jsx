import React, { useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import useAuth from '../../../hooks/useAuth'
import Navbar from '../../Shared/Navbar/Navbar'

const Signup = () => {
  const [loginInfo, setLoginInfo] = useState({})
  const [confirmPasswordError, setConfirmPasswordError] = useState('')

  const { user, registerUser, loading, userError } = useAuth()

  const history = useHistory()

  // handle login input
  const handleOnChange = (e) => {
    const field = e.target.name
    const value = e.target.value

    const newLoginData = { ...loginInfo }
    newLoginData[field] = value
    setLoginInfo(newLoginData)

    console.log(newLoginData)
  }

  // handle login submit
  const handleLoginSubmit = (e) => {
    if (loginInfo.password !== loginInfo.password2) {
      setConfirmPasswordError('Password does not match')
    }

    // registering user
    registerUser(loginInfo.email, loginInfo.password, loginInfo.name, history)
    e.preventDefault()
  }
  return (
    <div className='container-fluid px-5'>
      <Navbar />

      <div className='container'>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <h2 className='text-center'>Signup</h2>
            {userError && (
              <div class='alert alert-danger'>
                <strong>{userError}</strong>
              </div>
            )}
            <form onSubmit={handleLoginSubmit}>
              <div class='form-group'>
                <label className='mb-1'>Name</label>
                <input
                  type='text'
                  class='form-control mb-2'
                  name='name'
                  onChange={handleOnChange}
                  placeholder='Enter your name'
                />
              </div>
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

              <div class='form-group'>
                <label className='mb-1'>Confirm Password</label>
                <input
                  type='password'
                  class='form-control mb-2'
                  name='password2'
                  onChange={handleOnChange}
                  placeholder='Retype Password'
                />
              </div>
              <div>{confirmPasswordError}</div>

              {loading ? (
                <button class='btn btn-primary mt-3'>
                  <Spinner animation='border' size='sm' />
                </button>
              ) : (
                <button type='submit' class='btn btn-primary mt-3'>
                  {' '}
                  Submit
                </button>
              )}
            </form>
            <div>
              <p>
                Already have an account? <Link to='/login'>Login Here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
