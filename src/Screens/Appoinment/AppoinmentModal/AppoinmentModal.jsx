import React from 'react'
import { Modal } from 'react-bootstrap'

const AppoinmentModal = (props) => {
  const handleSubmitBooking = (e) => {
    e.preventDefault()
    alert('submit')
    
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
          Appoinment for the date of {props.date.toDateString()}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Service name: {props.name}</h4>
        <p>Time: {props.time}</p>

        <form onSubmit={handleSubmitBooking}>
          <div class='form-group'>
            <input
              type='text'
              class='mb-2 form-control'
              placeholder='Enter name'
            />
          </div>

          <div class='form-group'>
            <input
              type='text'
              class='mb-2 form-control'
              placeholder='Enter Phone number'
            />
          </div>

          <div class='form-group'>
            <input
              type='email'
              class='mb-2 form-control'
              placeholder='Enter email'
            />
          </div>

          <button type='submit' className='mt-4'>
            Confirm Appoinment
          </button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={props.onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  )
}

export default AppoinmentModal
