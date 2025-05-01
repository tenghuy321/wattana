import React from 'react'
import productsBg from "../assets/images/product1_bg.png"

const BookcaseCabinet = () => {
  return (
    <div className='w-full min-h-screen xl:h-screen text-[16px] sm:text-[20px] lg:text-[25px] font-[400] flex flex-col items-center justify-center lg:justify-end 2xl:justify-center bg-center bg-cover pt-[4rem] lg:pt-[10rem] xl:pt-[4rem] pb-[4rem] 2xl:pb-0' style={{ backgroundImage: `url(${productsBg})` }}>
      <h1 className='leading-none text-[#FF3217]'>Bookcase Cabinet</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-7xl mx-auto px-4 mt-10 md:mt-5'>
        <div className="relative w-full h-[220px] overflow-hidden">
          <img
            src="https://i.pinimg.com/736x/79/48/34/794834d45915364e4aaebd4b1e0c780b.jpg"
            alt="img1"
            className='w-full h-full object-cover object-center transition-transform duration-300 hover:scale-110'
          />
        </div>
        <div className="relative w-full h-[220px] overflow-hidden">
          <img
            src="https://i.pinimg.com/736x/79/48/34/794834d45915364e4aaebd4b1e0c780b.jpg"
            alt="img1"
            className='w-full h-full object-cover object-center transition-transform duration-300 hover:scale-110'
          />
        </div>
        <div className="relative w-full h-[220px] overflow-hidden">
          <img
            src="https://i.pinimg.com/736x/79/48/34/794834d45915364e4aaebd4b1e0c780b.jpg"
            alt="img1"
            className='w-full h-full object-cover object-center transition-transform duration-300 hover:scale-110'
          />
        </div>
        <div className="relative w-full h-[220px] overflow-hidden">
          <img
            src="https://i.pinimg.com/736x/79/48/34/794834d45915364e4aaebd4b1e0c780b.jpg"
            alt="img1"
            className='w-full h-full object-cover object-center transition-transform duration-300 hover:scale-110'
          />
        </div>
        <div className="relative w-full h-[220px] overflow-hidden">
          <img
            src="https://i.pinimg.com/736x/79/48/34/794834d45915364e4aaebd4b1e0c780b.jpg"
            alt="img1"
            className='w-full h-full object-cover object-center transition-transform duration-300 hover:scale-110'
          />
        </div>
        <div className="relative w-full h-[220px] overflow-hidden">
          <img
            src="https://i.pinimg.com/736x/79/48/34/794834d45915364e4aaebd4b1e0c780b.jpg"
            alt="img1"
            className='w-full h-full object-cover object-center transition-transform duration-300 hover:scale-110'
          />
        </div>
      </div>

    </div>
  )
}

export default BookcaseCabinet