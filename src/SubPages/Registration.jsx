import React from 'react'
import img1 from '../assets/images/license_1.png'
import img2 from '../assets/images/license_2.png'
import img3 from '../assets/images/license_3.jpg'
import img4 from '../assets/images/license_4.jpg'

const Registration = () => {
  return (
    <div className='w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 pb-[4rem] overflow-hidden'>
        <img data-aos="fade-right" data-aos-duration="1600" src={img1} alt="" className='w-full h-full' />
        <img data-aos="fade-left" data-aos-duration="1600" src={img2} alt="" className='w-full h-full' />
        <img data-aos="fade-left" data-aos-duration="1600" src={img3} alt="" className='w-full h-full' />
        <img data-aos="fade-left" data-aos-duration="1600" src={img4} alt="" className='w-full h-full' />
    </div>
  )
}

export default Registration