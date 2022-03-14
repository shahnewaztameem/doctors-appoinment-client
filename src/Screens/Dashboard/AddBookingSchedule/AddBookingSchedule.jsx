import React, { useEffect, useState } from 'react'
import AppoinmentCalendar from '../../Shared/AppoinmentCalendar/AppoinmentCalendar'
import axios from 'axios'
import useAuth from '../../../hooks/useAuth'

const AddBookingSchedule = () => {
  const [date, setDate] = useState(new Date())
  const [dayName, setDayName] = useState('')
  const [timeOption, setTimeOption] = useState('')
  const [activated, setActivated] = useState('deactive')
  const [service, setService] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const { token } = useAuth()

  useEffect(() => {
    const getDayName = date.toDateString().split(' ')[0]
    if (getDayName.toLowerCase() === 'fri') {
      setDayName('fri')
    } else if (getDayName.toLowerCase() === 'thu') {
      setDayName('thu')
    } else {
      setDayName('weekDays')
    }
  }, [date])

  const handleOnChange = (e) => {
    setTimeOption(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formattedDate = date.toDateString()

    const services = {
      date: formattedDate,
      time: timeOption,
      available: activated,
      serviceName: service,
    }

    const config = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    }
    const { data } = await axios.post(
      'http://localhost:5000/api/bookings',
      services,
      config
    )

    console.log(data)

    if (data) {
      setSuccessMessage('Success')
      e.target.reset()
    }

    // console.log(services)
  }

  return (
    <div className='row'>
      <div className='col-md-6'>
        <AppoinmentCalendar
          setDate={setDate}
          value={date}
          minDate={new Date()}
        />
      </div>
      <div className='col-md-6'>
        {successMessage && (
          <div class='alert alert-success' role='alert'>
            {successMessage}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              name='servicename'
              placeholder='Enter service name'
              onChange={(e) => setService(e.target.value)}
            />
          </div>
          {dayName === 'fri' && (
            <select
              name=''
              class='form-select form-select-sm mb-4'
              onChange={handleOnChange}
              defaultValue={timeOption}
            >
              <option>Select a time slot</option>
              <option value='9:00PM - 12:00PM'>9:00PM - 12:00PM</option>
            </select>
          )}

          {dayName === 'thu' && (
            <select
              name=''
              class='form-select form-select-sm mb-4'
              onChange={handleOnChange}
              defaultValue={timeOption}
            >
              <option>Select a time slot</option>
              <option value='4:00PM - 6:00PM'>4:00PM - 6:00PM</option>
            </select>
          )}

          {dayName === 'weekDays' && (
            <select
              name=''
              class='form-select form-select-sm mb-4'
              onChange={handleOnChange}
              defaultValue={timeOption}
            >
              <option>Select a time slot</option>
              <option value='9:00PM - 12:00PM'>9:00PM - 12:00PM</option>
              <option value='4:00PM - 6:00PM'>4:00PM - 6:00PM</option>
            </select>
          )}

          <select
            class='form-select form-select-sm mb-4'
            onChange={(e) => setActivated(e.target.value)}
            defaultValue={activated}
          >
            <option value='deactive'>Deactivate</option>
            <option value='active'>Activate</option>
          </select>

          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddBookingSchedule
