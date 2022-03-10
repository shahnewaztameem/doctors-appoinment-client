import React from 'react'
import Navbar from '../Shared/Navbar/Navbar'
import HeroSection from './HeroSection/HeroSection'
import InstantAppoinment from './InstantAppoinment/InstantAppoinment'
import OurServices from './OurServices/OurServices'

const Home = () => {
  return (
    <div className='container-fluid px-5'>
      <Navbar />
      <HeroSection />
      <OurServices />
      <InstantAppoinment />
    </div>
  )
}

export default Home
