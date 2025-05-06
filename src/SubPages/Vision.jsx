import React from 'react'
import { useTranslation } from "react-i18next";

const Vision = () => {
    const {t} = useTranslation();
    return (
      <div
        data-aos="fade-up"
        data-aos-duration="1200"
        className="text-center w-full md:max-w-[500px] mx-auto mt-10 text-black text-[12px] md:text-[14px] px-4"
      >
        {t('vision_content')}
      </div>
    );
}

export default Vision