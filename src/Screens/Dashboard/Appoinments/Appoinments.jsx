import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useAuth from '../../../hooks/useAuth'

const Appoinments = ({ date }) => {
  const { user } = useAuth()
  const [appoinments, setAppoinments] = useState([])

  useEffect(() => {
    const url = `http://localhost:5000/api/appoinments?email=${user.email}`

    const fetchAppoinmentsByEmail = async () => {
      try {
        const { data } = await axios.get(url)
        setAppoinments(data)
        console.log(data)
      } catch (error) {}
    }
    
    fetchAppoinmentsByEmail()
  }, [])

  return (
    <div>
      <h2>My Appoinments ({appoinments.length})</h2>
      <table class='table table-dark'>
        <thead>
          <tr>
            <th scope='col'>Patient Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Service name</th>
            <th scope='col'>Time</th>
            <th scope='col'>Date</th>
          </tr>
        </thead>
        <tbody>
          {appoinments.map((appoinment) => (
            <tr>
              <td>{appoinment.patientName}</td>
              <td>{appoinment.email}</td>
              <td>{appoinment.serviceName}</td>
              <td>{appoinment.time}</td>
              <td>{appoinment.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Appoinments
