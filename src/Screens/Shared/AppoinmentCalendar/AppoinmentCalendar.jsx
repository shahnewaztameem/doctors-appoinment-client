import React from 'react'
import Calendar from 'react-calendar/dist/umd/Calendar'

const AppoinmentCalendar = ({ setDate, value, minDate }) => {
  // console.log(value);
  return <Calendar onChange={setDate} value={value} minDate={minDate} />
}

export default AppoinmentCalendar
