import React, { useState } from 'react'
import bg from '../../../images/bg_img.png'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

const AppoinmentHeader = ({date, setDate}) => {
   
  console.log(date.toDateString());
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <Calendar onChange={setDate} value={date} minDate={new Date()} />
        </div>
        <div className='col-md-6'>
          <img src={bg} alt='bgimage' className='img-fluid' />
        </div>
      </div>
    </div>
  )
}

export default AppoinmentHeader
