import React from 'react'
import ceo from '../assets/images/abouts/ceo.png'
import { useTranslation } from "react-i18next";

const Msg = () => {
      const { t } = useTranslation();

  return (
    <div className='w-full max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-10 overflow-hidden mt-10 lg:mt-0 pb-[4rem] px-2'>
        <img data-aos="fade-right" data-aos-duration="1600" src={ceo} alt="ceo" className='w-40 h-40 object-cover object-center' />
        <div data-aos="fade-left" data-aos-duration="1600" className='text-[12px] md:text-[14px] pb-20 sm:pb-0 text-center sm:text-start'>
        <h1 className='text-[16px] md:text-[20px] font-[400] text-[#FF3217]'>{t('msg_header') }</h1>
            <p className='mt-2'>{t('msg_body')}</p>
        </div>
    </div>
  )
}

export default Msg