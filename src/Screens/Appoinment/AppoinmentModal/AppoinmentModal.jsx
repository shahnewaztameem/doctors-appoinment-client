import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import useAuth from '../../../hooks/useAuth'
import axios from 'axios'

const AppoinmentModal = (props) => {
  const { name, time, date, onHide, setBookingSuccess } = props
  const { user } = useAuth()

  const initialInfo = {
    patientName: user.displayName,
    email: user.email,
    phone: '',
  }
  const [appoinmentInfo, setAppoinmentInfo] = useState(initialInfo)

  const handleChange = (e) => {
    const field = e.target.name
    const value = e.target.value

    const newAppoinmentInfo = { ...appoinmentInfo }
    newAppoinmentInfo[field] = value

    setAppoinmentInfo(newAppoinmentInfo)
  }

  const handleSubmitBooking = (e) => {
    e.preventDefault()
    const appoinment = {
      ...appoinmentInfo,
      serviceName: name,
      time,
      date: date.toLocaleDateString(),
    }
    // console.log(appoinment)

    createAppoinment(appoinment)
    setBookingSuccess(false)
  }

  //send data to backend
  const createAppoinment = async (appoinmentData) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await axios.post(
        'http://localhost:5000/api/appoinments',
        appoinmentData,
        config
      )

      if (data._id) {
        setBookingSuccess(true)
        onHide()
      }

      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Appoinment for the date of {date.toDateString()}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Service name: {name}</h4>
        <p>Time: {time}</p>

        <form onSubmit={handleSubmitBooking}>
          <div class='form-group'>
            <input
              type='text'
              className='mb-2 form-control'
              name='patientName'
              defaultValue={user.displayName}
              onBlur={handleChange}
            />
          </div>

          <div class='form-group'>
            <input
              type='text'
              class='mb-2 form-control'
              placeholder='Enter Phone number'
              name='phone'
              onBlur={handleChange}
            />
          </div>

          <div>
            <input
              type='email'
              className='mb-2 form-control'
              name='patientName'
              defaultValue={user.email}
              onBlur={handleChange}
            />
          </div>

          <button type='submit' className='mt-4'>
            Confirm Appoinment
          </button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  )
}

export default AppoinmentModal
