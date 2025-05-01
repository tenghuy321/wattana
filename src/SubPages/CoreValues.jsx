import React, { useState } from 'react';

const data = [
    {
        number: '1',
        title: 'Belief in Honesty and Fairness',
        shortText: 'We treat our customers as our friends and family.',
        moreText: 'more text',
    },
    {
        number: '2',
        title: 'Dedication to Excellent',
        shortText: 'In everything we do, we always work to attain better outcomes.',
        moreText: 'more text',
    },
    {
        number: '3',
        title: 'Belief in the Value of the Individual',
        shortText: 'WATTANA prioritizes on employee value and views them as the most valuable asset.',
        moreText: 'more text',
    },
    {
        number: '4',
        title: 'Always Keep Learning ',
        shortText: 'We aim to learn at least 1% per day of new knowledge and experience. We make it a part of our daily operation to read and to learn.',
        moreText: 'more text',
    },
    {
        number: '5',
        title: 'Getting Feedback Early',
        shortText: 'Receiving feedback early means we can act to improve quickly as well.',
        moreText: 'more text',
    },
    {
        number: '6',
        title: 'Concern for Social Responsibility',
        shortText: 'We have declared our intent to do business  in accordance with our obligations and responsibilities to the nation and society as a whole.',
        moreText: 'more text',
    },
    {
        number: '7',
        title: 'Showing Respect',
        shortText: 'Show respect to all involved parties, namely our teams, our customers and the industry as a whole.',
        moreText: 'more text',
    },
];

const CoreValues = () => {
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
