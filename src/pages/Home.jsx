import React from 'react'
import homeBg from '../assets/images/home_bg.png'

const Home = () => {
  return (
    <div className='w-full h-screen text-[50px] sm:text-[70px] lg:text-[100px] font-[700] uppercase flex flex-col items-center justify-center bg-center bg-cover' style={{ backgroundImage: `url(${homeBg})` }}>
      <h1 className='leading-none text-[#FF3217]' data-aos="zoom-in-up" data-aos-duration="1200">WATTANA</h1>
      <p className='text-[20px] sm:text-[30px] lg:text-[40px] text-[#000]' data-aos="zoom-in-up" data-aos-duration="1500">HOME SERVICES</p>
    </div>
  )
}

export default Home