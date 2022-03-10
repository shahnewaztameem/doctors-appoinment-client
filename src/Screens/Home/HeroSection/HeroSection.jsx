import React from 'react'
import { Link } from 'react-router-dom'
import bg from '../../../images/bg_img.png'

const HeroSection = () => {
  return (
    <div className='container'>
      <div className='row d-flex align-items-center'>
        <div className='col-md-7'>
          <h1>Get Doctor's Appoinment more efficiently</h1>
          <h5 className='mt-4'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde,
            magnam tempora quae nesciunt beatae impedit animi. Iste voluptatum
            dolorum dolorem quis temporibus nesciunt amet maiores magni
            laudantium. Earum maxime dignissimos autem aspernatur temporibus
            soluta! Quisquam earum quasi blanditiis aut voluptatibus quis, porro
            eius libero est nam. Delectus suscipit vero aliquam.
          </h5>

          <Link to='/appoinment' className='nav-link ps-0'>
            <button>Get An Appoinment</button>
          </Link>
        </div>
        <div className='col-md-5'>
          <img src={bg} className='img-fluid' alt='' />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
