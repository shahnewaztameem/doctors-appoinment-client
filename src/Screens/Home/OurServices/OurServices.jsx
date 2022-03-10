import React from 'react'
import './OurServices.css'

const ourServicesData = [
  {
    id: 1,
    title: 'Fast Appoinment',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
  },
  {
    id: 2,
    title: 'Specialized Doctors',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas.',
  },
  {
    id: 2,
    title: 'Quick Service',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
  },
]
const OurServices = () => {
  return (
    <div>
      <section className='section-services'>
        <div className='container'>
          <div className='row justify-content-center text-center'>
            <div className='col-md-10 col-lg-8'>
              <div className='header-section'>
                <h2 className='title'>
                  Exclusive <span>Services</span>
                </h2>
                <p className='description'>
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some injected
                  humour
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            {ourServicesData.map((data) => (
              <div className='col-md-6 col-lg-4'>
                <div className='single-service'>
                  <div className='part-1'>
                    <i className='fab fa-500px'></i>
                    <h3 className='title'>{data.title}</h3>
                  </div>
                  <div className='part-2'>
                    <p className='description'>{data.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

       
      </section>
    </div>
  )
}

export default OurServices
