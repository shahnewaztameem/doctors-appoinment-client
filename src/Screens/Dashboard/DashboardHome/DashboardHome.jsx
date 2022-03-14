import React, {useState} from 'react';
import Appoinments from '../Appoinments/Appoinments'
import AppoinmentCalendar from '../../Shared/AppoinmentCalendar/AppoinmentCalendar'

const DashboardHome = () => {
  const [date, setDate] = useState(new Date())
  return (
    <>
      <div className='row'>
        <div className='col-md-4'>
          <div className='w-100'>
            <AppoinmentCalendar setDate={setDate} value={date} />
          </div>
        </div>
        <div className='col-md-8'>
          <Appoinments date={date} />
        </div>
      </div>
    </>
  )
};

export default DashboardHome;