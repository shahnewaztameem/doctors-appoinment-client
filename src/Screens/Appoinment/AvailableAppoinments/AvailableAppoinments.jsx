import React, { useEffect, useState } from 'react'
import Booking from '../Booking/Booking'
import axios from 'axios'

// const appoinmentsData = [
//   {
//     id: 1,
//     name: 'Medicine Doctor',
//     time: '6.00PM - 7.00PM',
//     isAvailable: true,
//   },
//   {
//     id: 1,
//     name: 'Dental Doctor',
//     time: '8.00PM - 9.00PM',
//     isAvailable: true,
//   },
//   {
//     id: 1,
//     name: 'Surgen Doctor',
//     time: '6.00PM - 7.00PM',
//     isAvailable: true,
//   },
//   {
//     id: 1,
//     name: 'Medicine Doctor',
//     time: '6.00PM - 7.00PM',
//     isAvailable: false,
//   },
//   {
//     id: 1,
//     name: 'Medicine Doctor',
//     time: '6.00PM - 7.00PM',
//     isAvailable: true,
//   },
//   {
//     id: 1,
//     name: 'Medicine Doctor',
//     time: '6.00PM - 7.00PM',
//     isAvailable: true,
//   },
// ]

const AvailableAppoinments = ({ date }) => {
  const [bookingSuccess, setBookingSuccess] = useState(false)
  const [appoinmentsData, setAppoinmentsData] = useState([])

  console.log(appoinmentsData)

  useEffect(() => {
    const formattedDate = date.toDateString()

    const url = `http://localhost:5000/api/bookings?date=${formattedDate}`

    const fetchBookingsByDate = async () => {
      try {
        const { data } = await axios.get(url)
        setAppoinmentsData(data)
        console.log(data)
      } catch (error) {}
    }

    fetchBookingsByDate()
  }, [date])
  return (
    <>
      <div className='row mt-5'>
        <div className='col-md-12'>
          <h3>
            {bookingSuccess && (
              <div className='alert alert-success text-center' role='alert'>
                Success
              </div>
            )}
          </h3>
          <h4 className='text-center mb-5'>
            Available appoinments on {date.toDateString()}
          </h4>
        </div>
      </div>

      <div className='row'>
        {appoinmentsData.length > 0 ? (
          appoinmentsData.map((appoinmentData) => (
            <Booking
              name={appoinmentData.serviceName}
              time={appoinmentData.time}
              isAvailable={appoinmentData.available}
              date={date}
              setBookingSuccess={setBookingSuccess}
            />
          ))
        ) : (
          <div className='text-center alert alert-danger'>
            No Schedule is available
          </div>
        )}
      </div>
    </>
  )
}

export default AvailableAppoinments
