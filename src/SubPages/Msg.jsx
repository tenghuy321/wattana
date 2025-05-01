import React from 'react'
import ceo from '../assets/images/abouts/ceo.png'
const Msg = () => {
  return (
    <div className='w-full max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-10 overflow-hidden px-2'>
        <img data-aos="fade-right" data-aos-duration="1600" src={ceo} alt="ceo" className='w-40 h-40 object-cover object-center mt-10 sm:mt-0' />
        <div data-aos="fade-left" data-aos-duration="1600" className='text-[12px] md:text-[14px] pb-20 sm:pb-0 text-center sm:text-start'>
            <h1 className='text-[16px] md:text-[20px] font-[400] text-[#FF3217]'>Message from Mr. SOK SARAVUTH</h1>
            <p className='mt-2'>Using the aluminum raw materials to make the furniture has been the forefront solutions to solve the influx of the low-quality furniture issue. When it comes to
                aluminum, it is mainly about beauty, style, durable and long-term solution to fulfill the top satisfaction of the customers. With our aim to make the best and our
                values to the personnel, we firmly believe that we will be able to supply to all households in Cambodia to match with the economical living styles.</p>
        </div>
    </div>
  )
}

export default Msg