import React, { useState } from 'react'
import './Dashboard.css'
import useAuth from '../../../hooks/useAuth'
import { Link } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useRouteMatch,
} from 'react-router-dom'
import DashboardHome from '../DashboardHome/DashboardHome'
import MakeAdmin from '../MakeAdmin/MakeAdmin'
import AddBookingSchedule from '../AddBookingSchedule/AddBookingSchedule'
import AdminRoute from '../../Login/AdminRoute/AdminRoute'

const Dashboard = () => {
  let { path, url } = useRouteMatch()

  const { user, admin } = useAuth()
  return (
    <div id='wrapper'>
      <ul
        class='navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'
        id='accordionSidebar'
      >
        <Link
          class='sidebar-brand d-flex align-items-center justify-content-center'
          to='/dashboard'
        >
          <div class='sidebar-brand-icon rotate-n-15'>
            <i class='fas fa-laugh-wink'></i>
          </div>
          <div class='sidebar-brand-text mx-3'>Doctor's Appoinment</div>
        </Link>

        <hr class='sidebar-divider my-0' />

        <li class='nav-item active'>
          <Link to={`${url}`} class='nav-link'>
            <i class='fas fa-fw fa-tachometer-alt'></i>
            <span>Dashboard</span>
          </Link>
        </li>
        {admin && (
          <>
            <li class='nav-item active'>
              <Link to={`${url}/make-admin`} class='nav-link'>
                <i class='fas fa-fw fa-tachometer-alt'></i>
                <span>Make user Admin</span>
              </Link>
            </li>
            <li class='nav-item active'>
              <Link to={`${url}/add-schedule`} class='nav-link'>
                <i class='fas fa-fw fa-tachometer-alt'></i>
                <span>Add Schedule</span>
              </Link>
            </li>
          </>
        )}
        <li class='nav-item active'>
          <Link to='/appoinment' class='nav-link'>
            <i class='fas fa-fw fa-tachometer-alt'></i>
            <span>Get an appoinment</span>
          </Link>
        </li>

       

       

        
      </ul>

      <div id='content-wrapper' class='d-flex flex-column'>
        <div id='content'>
          <nav class='navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow'>
            <button
              id='sidebarToggleTop'
              class='btn btn-link d-md-none rounded-circle mr-3'
            >
              <i class='fa fa-bars'></i>
            </button>

            <ul class='navbar-nav ml-auto'>
              <div class='topbar-divider d-none d-sm-block'></div>

              <li class='nav-item dropdown no-arrow'>
                <span class='mr-2 d-none d-lg-inline text-gray-600 small'>
                  Logged in as <strong>{user.email}</strong>
                </span>
              </li>
            </ul>
          </nav>

          <div class='container-fluid'>
            <div class='d-sm-flex align-items-center justify-content-between mb-4'>
              <h1 class='h3 mb-0 text-gray-800'>Dashboard</h1>
            </div>

            
            <Switch>
              <Route exact path={path}>
                <DashboardHome />
              </Route>
              <AdminRoute path={`${path}/make-admin`}>
                <MakeAdmin />
              </AdminRoute>
              <AdminRoute path={`${path}/add-schedule`}>
                <AddBookingSchedule />
              </AdminRoute>
            </Switch>
          </div>
        </div>

        <footer class='sticky-footer bg-white'>
          <div class='container my-auto'>
            <div class='copyright text-center my-auto'>
              <span>
                Copyright &copy; Doctors Appoinment {new Date().getFullYear()}
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Dashboard
