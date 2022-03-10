import React, { useState } from 'react'
import Navbar from '../../Shared/Navbar/Navbar'
import AppoinmentHeader from '../AppoinmentHeader/AppoinmentHeader'
import AvailableAppoinments from '../AvailableAppoinments/AvailableAppoinments'

const Appoinment = () => {
  const [date, setDate] = useState(new Date())
  return (
    <div className='container-fluid px-5'>
      <Navbar />
      <AppoinmentHeader date={date} setDate={setDate}/>
      <AvailableAppoinments date={date}/>
    </div>
  )
}

export default Appoinment
