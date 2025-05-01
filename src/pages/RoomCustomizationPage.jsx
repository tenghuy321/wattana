import React from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './RoomCustomizationPage.css';

import livingRoom1 from '../assets/images/living/living1.jpg';
import livingRoom2 from '../assets/images/living/living2.jpg';
import livingRoom3 from '../assets/images/living/living3.jpg';
import livingRoom4 from '../assets/images/living/living4.jpg';
import livingRoom5 from '../assets/images/living/living5.jpg';
import livingRoom6 from '../assets/images/living/living6.jpg';
import defaultImage from '../assets/images/testing.jpg';

const allImages = {
    'living-room': {
        livingRoom1: { name: 'Glass Windows', images: [livingRoom1, livingRoom2] },
        livingRoom2: { name: 'Glass Windows', images: [livingRoom3, livingRoom4] },
        livingRoom3: { name: 'Glass Windows', images: [livingRoom5, livingRoom6] },
        livingRoom4: { name: 'Glass Windows', images: [livingRoom1, livingRoom3] },
        livingRoom5: { name: 'Glass Windows', images: [livingRoom2, livingRoom5] },
        livingRoom6: { name: 'Glass Windows', images: [livingRoom4, livingRoom6] },
    },
    bedroom: {
        bedroom1: { name: 'Glass Windows', images: [livingRoom1] },
        bedroom2: { name: 'Glass Windows', images: [livingRoom2] },
        bedroom3: { name: 'Glass Windows', images: [livingRoom3] },
        bedroom4: { name: 'Glass Windows', images: [livingRoom4] },
        bedroom5: { name: 'Glass Windows', images: [livingRoom5] },
        bedroom6: { name: 'Glass Windows', images: [livingRoom6] },
    },
    kitchen: {
        kitchen1: { name: 'Glass Windows', images: [defaultImage] },
        kitchen2: { name: 'Glass Windows', images: [defaultImage] },
        kitchen3: { name: 'Glass Windows', images: [defaultImage] },
        kitchen4: { name: 'Glass Windows', images: [defaultImage] },
        kitchen5: { name: 'Glass Windows', images: [defaultImage] },
        kitchen6: { name: 'Glass Windows', images: [defaultImage] },
    },
    'dining-area': {
        dining1: { name: 'Glass Windows', images: [defaultImage] },
        dining2: { name: 'Glass Windows', images: [defaultImage] },
        dining3: { name: 'Glass Windows', images: [defaultImage] },
        dining4: { name: 'Glass Windows', images: [defaultImage] },
        dining5: { name: 'Glass Windows', images: [defaultImage] },
        dining6: { name: 'Glass Windows', images: [defaultImage] },
    },
    balcony: {
        balcony1: { name: 'Glass Windows', images: [defaultImage] },
        balcony2: { name: 'Glass Windows', images: [defaultImage] },
        balcony3: { name: 'Glass Windows', images: [defaultImage] },
        balcony4: { name: 'Glass Windows', images: [defaultImage] },
        balcony5: { name: 'Glass Windows', images: [defaultImage] },
        balcony6: { name: 'Glass Windows', images: [defaultImage] },
    },
};


const RoomCustomizationPage = () => {
    const { roomType, roomId } = useParams();
    const roomData = allImages[roomType]?.[roomId];
    const images = roomData?.images;
    const roomName = roomData?.name;

    return (
        <div className="flex flex-col justify-center items-center w-full h-screen bg-gray-100 pt-20 overflow-hidden">
            <div className='absolute top-14 md:top-14 lg:top-36 xl:top-40 left-4 md:left-10 xl:left-20 text-black text-[14px] md:text-[16px]'>
                <a href="/customization" className='border border-[#FF3217] hover:bg-[#FF3217] hover:text-white px-4 py-2 rounded-full flex items-center space-x-2'>
                    <svg className='w-4 h-4 md:w-6 md:h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                        <path d="M9 14l-4 -4l4 -4"></path>
                        <path d="M5 10h11a4 4 0 1 1 0 8h-1"></path>
                    </svg>
                    <span>Back</span>
                </a>
            </div>
            <h1 data-aos="fade-right" data-aos-duration="1200" className='mb-4 text-xl font-semibold text-gray-700'>{roomName}</h1>
            <div className="w-full max-w-4xl h-1/2 sm:h-2/3 flex justify-center items-center px-4">
                {images && images.length > 0 ? (
                    <div className='w-full h-full'>
                        <Swiper modules={[Navigation]}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            className="w-full h-full">
                            {images.map((img, index) => (
                                <SwiperSlide key={index} className="flex justify-center items-center">
                                    <img
                                        src={img}
                                        alt={`${roomType} ${roomId} ${index}`}
                                        className="max-h-full object-contain"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="swiper-button-prev">
                            <svg width="28" height="47" viewBox="0 0 28 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.2">
                                    <path d="M0.73418 24.8164L21.2225 45.3044C21.6964 45.7787 22.329 46.0399 23.0035 46.0399C23.678 46.0399 24.3106 45.7787 24.7844 45.3044L26.2933 43.796C27.2751 42.813 27.2751 41.2155 26.2933 40.2341L9.08868 23.0295L26.3123 5.80582C26.7862 5.33158 27.0479 4.69938 27.0479 4.02525C27.0479 3.35038 26.7862 2.71818 26.3123 2.24356L24.8035 0.735481C24.3293 0.261234 23.6971 -2.69958e-05 23.0226 -2.70548e-05C22.3481 -2.71137e-05 21.7155 0.261234 21.2416 0.735481L0.734181 21.2422C0.259188 21.7179 -0.0017031 22.3531 -0.000205889 23.0284C-0.00170322 23.7062 0.259188 24.3411 0.73418 24.8164Z" fill="#515151" />
                                </g>
                            </svg>

                        </div>
                        <div className="swiper-button-next">
                            <svg width="28" height="47" viewBox="0 0 28 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.2">
                                    <path d="M26.3137 21.2235L5.82532 0.73551C5.35144 0.261265 4.71887 0 4.04437 0C3.36987 0 2.7373 0.261265 2.26343 0.73551L0.7546 2.24396C-0.227203 3.22689 -0.227203 4.82442 0.7546 5.80585L17.9592 23.0104L0.73551 40.2341C0.26164 40.7083 0 41.3405 0 42.0147C0 42.6895 0.26164 43.3217 0.73551 43.7964L2.24434 45.3044C2.71858 45.7787 3.35078 46.0399 4.02528 46.0399C4.69978 46.0399 5.33236 45.7787 5.80623 45.3044L26.3137 24.7977C26.7887 24.322 27.0496 23.6868 27.0481 23.0116C27.0496 22.3337 26.7887 21.6989 26.3137 21.2235Z" fill="#515151" />
                                </g>
                            </svg>
                        </div>
                    </div>
                ) : (
                    <p>No images available</p>
                )}
            </div>
        </div>


    );
};

export default RoomCustomizationPage;
