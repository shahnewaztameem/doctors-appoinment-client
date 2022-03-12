import React, { useState } from 'react'
import Booking from '../Booking/Booking'

const appoinmentsData = [
  {
    id: 1,
    name: 'Medicine Doctor',
    time: '6.00PM - 7.00PM',
    isAvailable: true,
  },
  {
    id: 1,
    name: 'Dental Doctor',
    time: '8.00PM - 9.00PM',
    isAvailable: true,
  },
  {
    id: 1,
    name: 'Surgen Doctor',
    time: '6.00PM - 7.00PM',
    isAvailable: true,
  },
  {
    id: 1,
    name: 'Medicine Doctor',
    time: '6.00PM - 7.00PM',
    isAvailable: false,
  },
  {
    id: 1,
    name: 'Medicine Doctor',
    time: '6.00PM - 7.00PM',
    isAvailable: true,
  },
  {
    id: 1,
    name: 'Medicine Doctor',
    time: '6.00PM - 7.00PM',
    isAvailable: true,
  },
]

const AvailableAppoinments = ({ date }) => {
  const [bookingSuccess, setBookingSuccess] = useState(false)
  return (
    <>
      <div className='row mt-5'>
        <div className='col-md-12'>
          <h3>{bookingSuccess && 'Success'}</h3>
          <h2 className='text-center'>
            Available appoinments on {date.toDateString()}
          </h2>
        </div>
      </div>

      <div className='row'>
        {appoinmentsData.map((appoinmentData) => (
          <Booking
            name={appoinmentData.name}
            time={appoinmentData.time}
            isAvailable={appoinmentData.isAvailable}
            date={date}
            setBookingSuccess={setBookingSuccess}
          />
        ))}
      </div>
    </>
  )
}

export default AvailableAppoinments
