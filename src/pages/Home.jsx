import React from 'react'
import homeBg from '../assets/images/home_bg.png'
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  
  return (
    <div className='w-full h-screen text-[50px] sm:text-[70px] lg:text-[100px] font-[700] flex flex-col items-center justify-center bg-center bg-cover pt-0 md:pt-20' style={{ backgroundImage: `url(${homeBg})` }}>
      <h1 className='leading-none text-[#FF3217] uppercase' data-aos="zoom-in-up" data-aos-duration="1200">WATTANA</h1>
      <p className='text-[20px] sm:text-[30px] lg:text-[40px] text-[#000] uppercase' data-aos="zoom-in-up" data-aos-duration="1500">HOME SERVICES</p>


      <div className='flex flex-col space-y-2 text-[10px] lg:text-[14px] font-[500] max-w-5xl mx-auto px-4 mt-4'>
        <h1 className='text-[12px] sm:text-[14px] lg:text-[16px] font-[600] text-[#FF3217]'>{t("home_title_1")}</h1>
        <p>{t("home_body_1")}</p>
        <p>{t("home_body_2")}</p>
        <p>{t("home_body_3")}</p>

      </div>
    </div>
  )
}

export default Home