import React from 'react'
import { useTranslation } from "react-i18next";

const WhyUs = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-wrap items-center justify-center w-full max-w-4xl mx-auto pb-[4rem] md:pb-0 overflow-hidden">
      <div
        data-aos="fade-up"
        data-aos-duration="1200"
        className="flex flex-col text-[12px] w-full md:w-1/3 text-center p-5"
      >
        <h1 className="text-[22px] text-[#FF3217]">01</h1>
        <p className="h-[2rem]">{t("why_us_con_1")}</p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1300"
        className="flex flex-col text-[12px] w-full md:w-1/3 text-center p-5"
      >
        <h1 className="text-[22px] text-[#FF3217]">02</h1>
        <p className="h-[2rem]">{t("why_us_con_2")}</p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1600"
        className="flex flex-col text-[12px] w-full md:w-1/3 text-center p-5"
      >
        <h1 className="text-[22px] text-[#FF3217]">03</h1>
        <p className="h-[2rem]">{t("why_us_con_3")}</p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1800"
        className="flex flex-col text-[12px] w-full md:w-1/3 text-center p-5"
      >
        <h1 className="text-[22px] text-[#FF3217]">04</h1>
        <p className="h-[2rem]">{t("why_us_con_4")}</p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="flex flex-col text-[12px] w-full md:w-1/3 text-center p-5"
      >
        <h1 className="text-[22px] text-[#FF3217]">05</h1>
        <p className="h-[2rem]">{t("why_us_con_5")}</p>
      </div>
    </div>
  );
}

export default WhyUs