import React, { useState } from 'react';
import { useTranslation } from "react-i18next";

const CoreValues = () => {
    const { t } = useTranslation();

    const data = [
      {
        number: "1",
        title: t("core_value_title_1"),
        shortText: t("core_values_content_1"),
        moreText: t("core_values_content_more_1"),
      },
      {
        number: "2",
        title: t("core_value_title_2"),
        shortText: t("core_values_content_2"),
        moreText: t("core_values_content_more_2"),
      },
      {
        number: "3",
        title: t("core_value_title_3"),
        shortText: t("core_values_content_3"),
        moreText: t("core_values_content_more_3"),
      },
      {
        number: "4",
        title: t("core_value_title_4"),
        shortText: t("core_values_content_4"),
        moreText: t("core_values_content_more_4"),
      },
      {
        number: "5",
        title: t("core_value_title_5"),
        shortText: t("core_values_content_5"),
        moreText: t("core_values_content_more_5"),
      },
      {
        number: "6",
        title: t("core_value_title_6"),
        shortText: t("core_values_content_6"),
        moreText: t("core_values_content_more_6"),
      },
      {
        number: "7",
        title: t("core_value_title_7"),
        shortText: t("core_values_content_7"),
        moreText: t("core_values_content_more_7"),
      },
    ];
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <div className='w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 pb-20 text-black text-[12px] md:text-[14px] px-4'>
            {data.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                    <div data-aos="fade-up" data-aos-duration="1200" key={index} className="text-[#000] rounded-lg">
                        <h1 className="font-[600] text-[20px] text-[#FF3217]">{item.number}</h1>
                        <p className="h-[2rem] lg:h-[3rem] xl:h-[2rem] font-[400] text-[14px] text-[#FF3217]">{item.title}</p>
                        <p className='text-[11px]'>{item.shortText}</p>

                        {isOpen && <p className="mt-2 text-[11px] text-black">{item.moreText}</p>}

                        <button
                            onClick={() => handleToggle(index)}
                            className="block px-3 py-1 border border-red-500 mt-4 md:mt-2 rounded-full text-[11px] text-[#FF3217]"
                        >
                            {isOpen ? 'Show Less' : 'Read More'}
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default CoreValues;
