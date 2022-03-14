import React from 'react'
const appointmentServiceInfo = [
  {
    id: 1,
    description: '100,000 Verified doctors',
  },
  {
    id: 1,
    description: '3M+ Patient recommendations',
  },
  {
    id: 1,
    description: '25M Patients/year',
  },
]
const InstantAppoinment = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-8'>
          <h2>Instant appointment with doctors.Guaranteed.</h2>
          {appointmentServiceInfo.map((info) => (
            <div>{info.description}</div>
          ))}
          <button className='btn btn-primary mt-4'>Get Appoinment Now</button>
        </div>
        <div className='col-md-4'>
          <video
            poster='//www.practostatic.com/web-assets/home/assets/images/book.875ca26a3c4283c777660377e421e99b.png'
            width='250'
            height='480'
            loading='false'
            loop
            autoPlay
          >
            <source
              src='//www.practostatic.com/web-assets/home/assets/videos/appointment.700ce682eaec91bf93b6574cb8f09cd0.webm'
              type='video/webm'
            ></source>
          </video>
        </div>
      </div>
    </div>
  )
}

export default InstantAppoinment
