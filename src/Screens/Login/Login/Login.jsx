import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Shared/Navbar/Navbar'
const Login = () => {
  const [loginInfo, setLoginInfo] = useState({})

  // handle login input
  const handleOnChange = (e) => {
    const field = e.target.name
    const value = e.target.value

    const newLoginData = { ...loginInfo }
    newLoginData[field] = value
    setLoginInfo(newLoginData)

    // console.log(field, value)
  }

  // handle login submit
  const handleLoginSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='container-fluid px-5'>
      <Navbar />

      <div className='container'>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <h2 className='text-center'>Login</h2>
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

              <button type='submit' class='btn btn-primary mt-3'>
                Submit
              </button>
            </form>
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
