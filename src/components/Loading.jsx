import React from 'react'
import { BarLoader } from 'react-spinners'
import logo from '../assets/images/logo.png'
const Loading = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-[#fff]'>
        <img src={logo} alt="logo" className='w-32 h-20' />
        <BarLoader size={40} color={"#FF3217"} />
    </div>
  )
}

export default Loading