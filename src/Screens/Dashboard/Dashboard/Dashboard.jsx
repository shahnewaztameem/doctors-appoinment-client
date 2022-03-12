import React, { useState } from 'react'
import './Dashboard.css'
import useAuth from '../../../hooks/useAuth'
import Calendar from 'react-calendar'
import Appoinments from '../Appoinments/Appoinments'
import AppoinmentCalendar from '../../Shared/AppoinmentCalendar/AppoinmentCalendar'

const Dashboard = () => {
  const [date, setDate] = useState(new Date())

  const { user } = useAuth()
  return (
    <div id='wrapper'>
      <ul
        class='navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'
        id='accordionSidebar'
      >
        <a
          class='sidebar-brand d-flex align-items-center justify-content-center'
          href='index.html'
        >
          <div class='sidebar-brand-icon rotate-n-15'>
            <i class='fas fa-laugh-wink'></i>
          </div>
          <div class='sidebar-brand-text mx-3'>Doctor's Appoinment</div>
        </a>

        <hr class='sidebar-divider my-0' />

        <li class='nav-item active'>
          <a class='nav-link' href='index.html'>
            <i class='fas fa-fw fa-tachometer-alt'></i>
            <span>Dashboard</span>
          </a>
        </li>

        <hr class='sidebar-divider' />

        <div class='sidebar-heading'>Interface</div>

        <li class='nav-item'>
          <a
            class='nav-link collapsed'
            href='#'
            data-toggle='collapse'
            data-target='#collapseTwo'
            aria-expanded='true'
            aria-controls='collapseTwo'
          >
            <i class='fas fa-fw fa-cog'></i>
            <span>Components</span>
          </a>
          <div
            id='collapseTwo'
            class='collapse'
            aria-labelledby='headingTwo'
            data-parent='#accordionSidebar'
          >
            <div class='bg-white py-2 collapse-inner rounded'>
              <h6 class='collapse-header'>Custom Components:</h6>
              <a class='collapse-item' href='buttons.html'>
                Buttons
              </a>
              <a class='collapse-item' href='cards.html'>
                Cards
              </a>
            </div>
          </div>
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

            <div class='row'>
              <div class='col-xl-4 col-md-6 mb-4'>
                <div class='card border-left-primary shadow h-100 py-2'>
                  <div class='card-body'>
                    <div class='row no-gutters align-items-center'>
                      <div class='col mr-2'>
                        <div class='text-xs font-weight-bold text-primary text-uppercase mb-1'>
                          Earnings (Monthly)
                        </div>
                        <div class='h5 mb-0 font-weight-bold text-gray-800'>
                          $40,000
                        </div>
                      </div>
                      <div class='col-auto'>
                        <i class='fas fa-calendar fa-2x text-gray-300'></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class='col-xl-4 col-md-6 mb-4'>
                <div class='card border-left-success shadow h-100 py-2'>
                  <div class='card-body'>
                    <div class='row no-gutters align-items-center'>
                      <div class='col mr-2'>
                        <div class='text-xs font-weight-bold text-success text-uppercase mb-1'>
                          Earnings (Annual)
                        </div>
                        <div class='h5 mb-0 font-weight-bold text-gray-800'>
                          $215,000
                        </div>
                      </div>
                      <div class='col-auto'>
                        <i class='fas fa-dollar-sign fa-2x text-gray-300'></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class='col-xl-4 col-md-6 mb-4'>
                <div class='card border-left-warning shadow h-100 py-2'>
                  <div class='card-body'>
                    <div class='row no-gutters align-items-center'>
                      <div class='col mr-2'>
                        <div class='text-xs font-weight-bold text-warning text-uppercase mb-1'>
                          Pending Requests
                        </div>
                        <div class='h5 mb-0 font-weight-bold text-gray-800'>
                          18
                        </div>
                      </div>
                      <div class='col-auto'>
                        <i class='fas fa-comments fa-2x text-gray-300'></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-md-4'>
                <div className='w-100'>
                  <AppoinmentCalendar setDate={setDate} value={date} />
                </div>
              </div>
              <div className='col-md-8'>
                <Appoinments />
              </div>
            </div>
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
