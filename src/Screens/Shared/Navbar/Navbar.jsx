import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'

const Navbar = () => {
  const { user, logout } = useAuth()

  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light'>
        <Link to="/" className='navbar-brand'>
          Doctor's Appoinment
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/appoinment' className='nav-link' href='#'>
                Appoinment
              </Link>
            </li>
            {user?.email && (
              <li className='nav-item'>
                <Link to='/dashboard' className='nav-link'>
                  Dashboard
                </Link>
              </li>
            )}

            <li className='nav-item'>
              {user?.email ? (
                <button onClick={logout} className='nav-link btn btn-primary text-white'>
                  Logout
                </button>
              ) : (
                <Link className='nav-link' to='/login'>
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
