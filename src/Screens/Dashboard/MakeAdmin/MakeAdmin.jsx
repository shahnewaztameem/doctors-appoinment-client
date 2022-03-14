import React, { useState } from 'react'
import axios from 'axios'
import useAuth from '../../../hooks/useAuth'
const MakeAdmin = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const { token } = useAuth()

  const handleOnChange = (e) => {
    setEmail(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const user = { email }
    const config = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    }
    const { data } = await axios.put(
      'http://localhost:5000/api/users/admin',
      user,
      config
    )
    if (!data) {
      setError('Email not found!!')
      setSuccess('')
    } else {
      setError('')
      setSuccess('Success')
    }
    console.log(data)
  }
  return (
    <div className='row'>
      <div className='col-md-6 offset-md-3'>
        <h2 className='text-center'>make an admin</h2>
        {error && (
          <div className='alert alert-danger' role='alert'>
            {error}
          </div>
        )}
        {success && (
          <div className='alert alert-success' role='alert'>
            {success}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div class='form-group'>
            <label>Email address</label>
            <input
              type='email'
              class='form-control'
              placeholder='Enter email'
              onChange={handleOnChange}
            />
          </div>

          <button type='submit' className='btn btn-primary btn-block btn-sm'>
            Make Admin
          </button>
        </form>
      </div>{' '}
    </div>
  )
}

export default MakeAdmin
