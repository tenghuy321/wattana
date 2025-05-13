import React, { useEffect, useState } from 'react'
// import homeBg from '../assets/images/home_bg.png'
import { useTranslation } from 'react-i18next';
import img1 from '../assets/images/home_bg.png';
import img2 from '../assets/images/services_bg.png';
const Home = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const bgImages = [img1, img2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % bgImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className='relative w-full h-screen text-[50px] sm:text-[70px] lg:text-[100px] font-[700] overflow-hidden'>
      <div
        className="z-1 flex transition-transform duration-1000 ease-in-out w-full h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {bgImages.map((img, index) => (
          <div
            key={index}
            className="min-w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      <div className='absolute inset-0 flex flex-col items-center justify-center pt-0 md:pt-20'>
        <h1 className='leading-none text-[#FF3217] uppercase' data-aos="zoom-in-up" data-aos-duration="1200">WATTANA</h1>
        <p className='text-[20px] sm:text-[30px] lg:text-[40px] text-[#000] uppercase' data-aos="zoom-in-up" data-aos-duration="1500">HOME SERVICES</p>


        <div className='flex flex-col space-y-2 text-[10px] lg:text-[14px] font-[500] max-w-5xl mx-auto px-4 mt-4' data-aos="zoom-in-up" data-aos-duration="1600">
          <h1 className='text-[12px] sm:text-[14px] lg:text-[16px] font-[600] text-[#FF3217]'>{t("home_title_1")}</h1>
          <p>{t("home_body_1")}</p>
          <p>{t("home_body_2")}</p>
          <p>{t("home_body_3")}</p>

        </div>
      </div>
    </div>
  )
}

export default Home