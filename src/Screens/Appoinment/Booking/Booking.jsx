import React from 'react'
import AppoinmentModal from '../AppoinmentModal/AppoinmentModal'

const Booking = ({ name, time, isAvailable, date, setBookingSuccess }) => {
  const [modalShow, setModalShow] = React.useState(false)

  return (
    <>
      {isAvailable.toLowerCase() === 'active' && (
        <div className='col-md-4'>
          <div class='card mb-4 text-center shadow rounded'>
            <div class='card-body'>
              <h5 class='card-title'>{name}</h5>
              <p class='card-text'>{time}</p>
              <button onClick={() => setModalShow(true)} className="btn btn-primary">Get Appoinment</button>
            </div>
          </div>
        </div>
      )}
      <AppoinmentModal
        name={name}
        time={time}
        date={date}
        show={modalShow}
        setBookingSuccess={setBookingSuccess}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}

export default Booking
