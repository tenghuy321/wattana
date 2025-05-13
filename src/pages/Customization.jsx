import React, { useState } from 'react'
import customizationBg from '../assets/images/customization_bg.png'
import customization from '../assets/images/customization.png'
import defaultImage from '../assets/images/testing.jpg'
import livingRoom1 from '../assets/images/living/living1.jpg';
import livingRoom2 from '../assets/images/living/living2.jpg';
import livingRoom3 from '../assets/images/living/living3.jpg';
import livingRoom4 from '../assets/images/living/living4.jpg';
import livingRoom5 from '../assets/images/living/living5.jpg';
import livingRoom6 from '../assets/images/living/living6.jpg';

import client1 from '../assets/images/clients/client-1.jpg';
import client2 from '../assets/images/clients/client-2.jpg';
import client3 from '../assets/images/clients/client-3.png';
import client4 from '../assets/images/clients/client-4.jpg';
import client5 from '../assets/images/clients/client-5.jpg';


import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const roomImages = {
  'Living Room Space': [
    { img: livingRoom1, link: "/customization/living-room/livingRoom1", name: "Glass Windows" },
    { img: livingRoom2, link: "/customization/living-room/livingRoom2", name: "Glass Windows" },
    { img: livingRoom3, link: "/customization/living-room/livingRoom3", name: "Glass Windows" },
    { img: livingRoom4, link: "/customization/living-room/livingRoom4", name: "Glass Windows" },
    { img: livingRoom5, link: "/customization/living-room/livingRoom5", name: "Glass Windows" },
    { img: livingRoom6, link: "/customization/living-room/livingRoom6", name: "Glass Windows" },
  ],
  'Bedroom Space': [
    { img: livingRoom1, link: "/customization/bedroom/bedroom1", name: "Glass Windows" },
    { img: livingRoom2, link: "/customization/bedroom/bedroom2", name: "Glass Windows" },
    { img: livingRoom3, link: "/customization/bedroom/bedroom3", name: "Glass Windows" },
    { img: livingRoom4, link: "/customization/bedroom/bedroom4", name: "Glass Windows" },
    { img: livingRoom5, link: "/customization/bedroom/bedroom5", name: "Glass Windows" },
    { img: livingRoom6, link: "/customization/bedroom/bedroom6", name: "Glass Windows" },
  ],
  'Kitchen': [
    { img: defaultImage, link: "/customization/kitchen/kitchen1", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/kitchen/kitchen2", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/kitchen/kitchen3", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/kitchen/kitchen4", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/kitchen/kitchen5", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/kitchen/kitchen6", name: "Glass Windows" },
  ],
  'Door glass': [
    { img: defaultImage, link: "/customization/kitchen/kitchen1", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/kitchen/kitchen2", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/kitchen/kitchen3", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/kitchen/kitchen4", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/kitchen/kitchen5", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/kitchen/kitchen6", name: "Glass Windows" },
  ],
  'Living Room Cabnet': [
    { img: defaultImage, link: "/customization/dining-area/dining1", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/dining-area/dining2", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/dining-area/dining3", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/dining-area/dining4", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/dining-area/dining5", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/dining-area/dining6", name: "Glass Windows" },
  ],
  'Balcony Space': [
    { img: defaultImage, link: "/customization/balcony/balcony1", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony2", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony3", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony4", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony5", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony6", name: "Glass Windows" },
  ],

  'Railing': [
    { img: defaultImage, link: "/customization/balcony/balcony1", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony2", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony3", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony4", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony5", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony6", name: "Glass Windows" },
  ],

  'Mirror': [
    { img: defaultImage, link: "/customization/balcony/balcony1", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony2", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony3", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony4", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony5", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony6", name: "Glass Windows" },
  ],
  'Wardrobe': [
    { img: defaultImage, link: "/customization/balcony/balcony1", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony2", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony3", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony4", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony5", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony6", name: "Glass Windows" },
  ],

  'Bathroom Space': [
    { img: defaultImage, link: "/customization/balcony/balcony1", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony2", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony3", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony4", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony5", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony6", name: "Glass Windows" },
  ],

  'Study Space': [
    { img: defaultImage, link: "/customization/balcony/balcony1", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony2", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony3", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony4", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony5", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony6", name: "Glass Windows" },
  ],

  'Book Cabinet': [
    { img: defaultImage, link: "/customization/living-room/livingRoom1", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony2", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony3", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony4", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony5", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony6", name: "Glass Windows" },
  ],

  'Glass Fix': [
    { img: defaultImage, link: "/customization/balcony/balcony1", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony2", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony3", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony4", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony5", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony6", name: "Glass Windows" },
  ],

  'Glass Windows': [
    { img: defaultImage, link: "/customization/balcony/balcony1", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony2", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony3", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony4", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony5", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony6", name: "Glass Windows" },
  ],
};


const Customization = () => {

  const [selectedRoom, setSelectedRoom] = useState('Living Room Space');

  const handleRoomClick = (room) => {
    setSelectedRoom(room);
  };

  const imagesToShow = roomImages[selectedRoom] || [defaultImage, defaultImage, defaultImage];

  const { t } = useTranslation();


  return (
    <>
      <div className='w-full min-h-screen lg:h-screen bg-center bg-cover flex flex-col items-center justify-center overflow-hidden' style={{ backgroundImage: `url(${customizationBg})` }}>
        <h1 className='text-[22px] text-[#FF3217] pt-20 xl:pt-10 tracking-wider'>{t("customization")}</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center mt-10 max-w-7xl mx-auto lg:px-4'>
          <div data-aos="fade-right" data-aos-duration="1200" className="flex flex-col space-y-4 justify-center items-center lg:items-start order-2 lg:order-none mt-10 sm:mt-10 mb-0 sm:mb-20 lg:mb-0 lg:mt-0">
            {imagesToShow.slice(0, 3).map((imgObj, i) => (
              <Link
                key={i}
                to={{
                  pathname: imgObj.link,

                }}
                className={`w-full md:w-[80%] lg:w-[200px] h-[150px] lg:h-[120px] px-4 lg:px-0 rounded-md block overflow-hidden ${i % 2 === 0 ? 'ml-0 lg:ml-6' : ''}`}
              >
                <img
                  src={imgObj.img}
                  alt={`Room Preview ${i}`}
                  className="w-full h-full object-cover rounded-md hover:scale-110 transition-all duration-500"
                />
              </Link>

            ))}
          </div>

          {/* <div data-aos="fade-up" data-aos-duration="1200" className="relative w-full max-w-5xl mx-auto mt-5 lg:mt-10 col-span-1 sm:col-span-2 lg:col-span-1 order-1 lg:order-none px-2">
          <img src={customization} alt="3D Floor Plan" className="w-full h-auto" />


          <div className="absolute left-[2%] top-[40%] sm:left-[2%] sm:top-[45%] md:left-[2%] md:top-[40%] lg:-left-[26%] lg:top-[40%] cursor-pointer" onClick={() => handleRoomClick('Living Room Space')}>
            <div className="relative flex space-x-2 items-center">
              <span className="ml-2 bg-white text-[8px] xl:text-[12px] px-2 py-1 rounded shadow whitespace-nowrap">Living Room Space</span>
              <div className="w-1 h-1 sm:hidden rotate-45 bg-[#FF3217]"></div>
              <div className="hidden sm:block w-10 sm:w-20 h-px bg-[#FF3217] rotate-[-20deg] sm:rotate-[10deg] origin-left"></div>
            </div>
          </div>

          <div className="absolute left-[20%] top-[70%] sm:left-[15%] sm:top-[70%] md:left-[15%] md:top-[70%] lg:left-[-5%] lg:top-[70%] xl:left-[-2%] xl:top-[74%] cursor-pointer" onClick={() => handleRoomClick('Door glass')}>
            <div className="relative flex space-x-2 items-center">
              <span className="ml-2 bg-white text-[10px] xl:text-[12px] px-2 py-1 rounded shadow whitespace-nowrap">Door glass</span>
              <div className="w-1 h-1 sm:hidden rotate-45 bg-[#FF3217]"></div>
              <div className="hidden sm:block w-10 sm:w-20 h-px bg-[#FF3217] rotate-[-20deg] sm:rotate-[-10deg] origin-left"></div>
            </div>
          </div>


          <div className="absolute left-[6%] top-[10%] sm:left-[0%] sm:top-[15%] md:left-[0%] md:top-[15%] lg:-left-[24%] lg:top-[12%] cursor-pointer" onClick={() => handleRoomClick('Kitchen')}>
            <div className="relative flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 items-center">
              <span className="ml-2 bg-white text-[8px] sm:text-[10px] xl:text-[12px] px-2 py-1 rounded shadow whitespace-nowrap">Kitchen Space</span>
              <div className="w-1 h-1 sm:hidden rotate-45 bg-[#FF3217]"></div>
              <div className="hidden sm:block w-10 sm:w-14 h-px bg-[#FF3217] rotate-[-20deg] sm:rotate-[10deg] origin-left"></div>
            </div>
          </div>


          <div className="absolute left-[38%] top-[1%] sm:left-[42%] sm:top-[-6%] md:left-[42%] md:top-[-6%] lg:left-[37%] lg:top-[-30%] xl:left-[40%] xl:top-[-20%] cursor-pointer" onClick={() => handleRoomClick('Wardrobe')}>
            <div className="relative flex flex-col space-y-2 sm:space-y-9 items-center">
              <span className="bg-white text-[8px] sm:text-[10px] xl:text-[12px] px-2 py-1 rounded shadow whitespace-nowrap">Wardrobe</span>
              <div className="w-1 h-1 sm:hidden rotate-45 bg-[#FF3217]"></div>
              <div className="hidden sm:block w-10 sm:w-16 h-px bg-[#FF3217] rotate-[90deg]"></div>
            </div>
          </div>


          <div className="absolute left-[25%] top-[16%] sm:left-[33%] sm:top-[2%] md:left-[33%] md:top-[2%] lg:left-[28%] lg:top-[-15%] xl:left-[30%] xl:top-[-10%] cursor-pointer" onClick={() => handleRoomClick('Mirror')}>
            <div className="relative flex flex-row sm:flex-col space-x-2 sm:space-x-0 sm:space-y-9 items-center">
              <span className="bg-white text-[8px] sm:text-[10px] xl:text-[12px] px-2 py-1 rounded shadow whitespace-nowrap">Mirror</span>
              <div className="w-1 h-1 sm:hidden rotate-45 bg-[#FF3217]"></div>
              <div className="hidden sm:block w-10 sm:w-16 h-px bg-[#FF3217] rotate-[90deg]"></div>
            </div>
          </div>


          <div className="absolute left-[20%] top-[50%] sm:left-[20%] sm:top-[55%] md:left-[10%] md:top-[55%] lg:-left-[20%] lg:top-[55%] xl:-left-[14%] xl:top-[55%] cursor-pointer" onClick={() => handleRoomClick('Living Room Cabnet')}>
            <div className="relative flex space-x-2 items-center">
              <span className="ml-2 bg-white text-[8px] sm:text-[10px] xl:text-[12px] px-2 py-1 rounded shadow whitespace-nowrap">Living Room Cabnet</span>
              <div className="w-1 h-1 sm:hidden rotate-45 bg-[#FF3217]"></div>
              <div className="hidden sm:block w-10 md:w-24 xl:w-40 h-px bg-[#FF3217] rotate-[-20deg] sm:rotate-[-10deg] origin-left"></div>
            </div>
          </div>


          <div className="absolute left-[50%] top-[10%] sm:left-[20%] sm:top-[25%] md:left-[50%] md:top-[0%] lg:left-[48%] lg:top-[-14%] xl:left-[40%] xl:top-[-2%] cursor-pointer" onClick={() => handleRoomClick('Bathroom Space')}>
            <div className="relative flex space-x-2 items-center">
              <div className="hidden sm:block w-10 sm:w-40 h-px bg-[#FF3217] rotate-[-20deg] origin-right"></div>
              <div className="w-1 h-1 sm:hidden rotate-45 bg-[#FF3217]"></div>
              <span className="ml-2 bg-white text-[8px] sm:text-[10px] xl:text-[12px] px-2 py-1 rounded shadow whitespace-nowrap">Bathroom Space</span>
            </div>
          </div>


          <div className="absolute left-[63%] top-[18%] sm:left-[65%] sm:top-[15%] md:left-[65%] md:top-[15%] lg:left-[68%] lg:top-[10%] xl:left-[65%] xl:top-[10%] cursor-pointer" onClick={() => handleRoomClick('Study Space')}>
            <div className="relative flex space-x-2 items-center">
              <div className="hidden sm:block w-10 sm:w-20 h-px bg-[#FF3217] rotate-[-20deg] origin-right"></div>
              <div className="w-1 h-1 sm:hidden rotate-45 bg-[#FF3217]"></div>
              <span className="ml-2 bg-white text-[8px] sm:text-[10px] xl:text-[12px] px-2 py-1 rounded shadow whitespace-nowrap">Study Space</span>
            </div>
          </div>

          <div className="absolute left-[75%] top-[25%] sm:left-[80%] sm:top-[25%] md:left-[80%] md:top-[25%] lg:left-[80%] lg:top-[22%] xl:left-[80%] xl:top-[25%] cursor-pointer" onClick={() => handleRoomClick('Book Cabinet')}>
            <div className="relative flex space-x-2 items-center">
              <div className="hidden sm:block w-10 lg:w-20 h-px bg-[#FF3217] rotate-[0deg] origin-right"></div>
              <div className="w-1 h-1 sm:hidden rotate-45 bg-[#FF3217]"></div>
              <span className="ml-2 bg-white text-[8px] sm:text-[10px] xl:text-[12px] px-2 py-1 rounded shadow whitespace-nowrap">Book Cabinet</span>
            </div>
          </div>


          <div className="absolute left-[82%] top-[35%] sm:left-[86%] sm:top-[35%] md:left-[88%] md:top-[35%] lg:left-[88%] lg:top-[35%] cursor-pointer" onClick={() => handleRoomClick('Glass Fix')}>
            <div className="relative flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 items-center">
              <div className="hidden sm:block w-6 lg:w-14 h-px bg-[#FF3217] rotate-[0deg] origin-right"></div>
              <div className="w-1 h-1 sm:hidden rotate-45 bg-[#FF3217]"></div>
              <span className="ml-2 bg-white text-[8px] sm:text-[10px] xl:text-[12px] px-2 py-1 rounded shadow whitespace-nowrap">Glass Fix</span>
            </div>
          </div>

          <div className="absolute left-[20%] top-[80%] sm:left-[20%] sm:top-[85%] md:left-[20%] md:top-[85%] lg:left-[-2%] lg:top-[86%] cursor-pointer" onClick={() => handleRoomClick('Balcony Space')}>
            <div className="relative flex space-x-2 items-center">
              <span className="ml-2 bg-white text-[8px] sm:text-[10px] xl:text-[12px] px-2 py-1 rounded shadow whitespace-nowrap">Balcony Space</span>
              <div className="w-1 h-1 sm:hidden rotate-45 bg-[#FF3217]"></div>
              <div className="hidden sm:block w-10 sm:w-20 h-px bg-[#FF3217] rotate-[-20deg] sm:rotate-[-20deg] origin-left"></div>
            </div>
          </div>

          <div className="absolute left-[50%] top-[78%] sm:left-[50%] sm:top-[82%] md:left-[50%] md:top-[82%] lg:left-[50%] lg:top-[78%] cursor-pointer" onClick={() => handleRoomClick('Railing')}>
            <div className="relative flex flex-col space-y-2 items-center">
              <div className="hidden sm:block w-px h-10 sm:h-14 bg-[#FF3217] origin-left"></div>
              <div className="w-1 h-1 sm:hidden rotate-45 bg-[#FF3217]"></div>
              <span className="bg-white text-[8px] sm:text-[10px] xl:text-[12px] px-2 py-1 rounded shadow whitespace-nowrap">Railing</span>
            </div>
          </div>

          <div className="absolute left-[62%] top-[45%] sm:left-[60%] sm:top-[50%] md:left-[65%] md:top-[45%] lg:left-[55%] lg:top-[45%] xl:left-[55%] xl:top-[50%] cursor-pointer" onClick={() => handleRoomClick('Glass Windows')}>
            <div className="relative flex flex-col space-y-2 items-center">
              <div className="hidden sm:block w-px h-10 sm:h-20 bg-[#FF3217] rotate-[-20deg] origin-left"></div>
              <div className="w-1 h-1 sm:hidden rotate-45 bg-[#FF3217]"></div>
              <span className="sm:ml-10 bg-white text-[8px] sm:text-[10px] xl:text-[12px] px-2 py-1 rounded shadow whitespace-nowrap">Glass Windows</span>
            </div>
          </div>

          <div className="absolute left-[55%] top-[35%] sm:left-[60%] sm:top-[45%] md:left-[60%] md:top-[45%] lg:left-[55%] lg:top-[50%] cursor-pointer" onClick={() => handleRoomClick('Bedroom Space')}>
            <div className="relative flex space-x-2 items-center">
              <div className="hidden sm:block w-10 sm:w-32 h-px bg-[#FF3217] rotate-[20deg] origin-right"></div>
              <div className="w-1 h-1 sm:hidden rotate-45 bg-[#FF3217]"></div>
              <span className="ml-2 bg-white text-[8px] sm:text-[10px] xl:text-[12px] px-2 py-1 rounded shadow whitespace-nowrap">Bedroom Space</span>
            </div>
          </div>
        </div> */}


          <div data-aos="fade-up" data-aos-duration="1200" className="relative w-full max-w-5xl mx-auto mt-5 lg:mt-10 col-span-1 sm:col-span-2 lg:col-span-1 order-1 lg:order-none px-2">
            <img src={customization} alt="3D Floor Plan" className="w-full h-auto" />

            {/* Living Room */}
            <div className="absolute left-[2%] top-[40%] sm:left-[6%] sm:top-[45%] md:left-[6%] md:top-[45%] lg:-left-[5%] lg:top-[40%] cursor-pointer" onClick={() => handleRoomClick('Living Room Space')}>
              <div className="relative flex space-x-2 items-center">
                <span className="ml-2 bg-white text-[8px] xl:text-[10px] px-2 py-1 rounded shadow whitespace-nowrap">Living Room Space</span>
                <div className="w-1 h-1 rotate-45 bg-[#FF3217]"></div>
              </div>
            </div>

            {/* Glass */}
            <div className="absolute left-[20%] top-[70%] sm:left-[25%] sm:top-[70%] md:left-[30%] md:top-[70%] lg:left-[17%] lg:top-[68%] cursor-pointer" onClick={() => handleRoomClick('Door glass')}>
              <div className="relative flex space-x-2 items-center">
                <span className="ml-2 bg-white text-[8px] xl:text-[10px] px-2 py-1 rounded shadow whitespace-nowrap">Door glass</span>
                <div className="w-1 h-1 rotate-45 bg-[#FF3217]"></div>
              </div>
            </div>


            {/* Kitchen */}
            <div className="absolute left-[6%] top-[10%] sm:left-[5%] sm:top-[18%] md:left-[5%] md:top-[20%] lg:left-[-5%] lg:top-[14%] cursor-pointer" onClick={() => handleRoomClick('Kitchen')}>
              <div className="relative flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 items-center">
                <span className="ml-2 bg-white text-[8px] xl:text-[10px] px-2 py-1 rounded shadow whitespace-nowrap">Kitchen Space</span>
                <div className="w-1 h-1 rotate-45 bg-[#FF3217]"></div>
              </div>
            </div>

            {/* wardrobe */}
            <div className="absolute left-[38%] top-[1%] sm:left-[42%] sm:top-[6%] md:left-[42%] md:top-[6%] lg:left-[40%] lg:top-[-5%] cursor-pointer" onClick={() => handleRoomClick('Wardrobe')}>
              <div className="relative flex flex-col space-y-2 items-center">
                <span className="bg-white text-[8px] xl:text-[10px] px-2 py-1 rounded shadow whitespace-nowrap">Wardrobe</span>
                <div className="w-1 h-1 rotate-45 bg-[#FF3217]"></div>
              </div>
            </div>

            {/* mirror */}
            <div className="absolute left-[25%] top-[16%] sm:left-[35%] sm:top-[15%] md:left-[35%] md:top-[15%] lg:left-[32%] lg:top-[10%] cursor-pointer" onClick={() => handleRoomClick('Mirror')}>
              <div className="relative flex flex-row sm:flex-col space-x-2 sm:space-x-0 sm:space-y-2 items-center">
                <span className="bg-white text-[8px] xl:text-[10px] px-2 py-1 rounded shadow whitespace-nowrap">Mirror</span>
                <div className="w-1 h-1 rotate-45 bg-[#FF3217]"></div>
              </div>
            </div>


            {/* Living Room Cabnet */}
            <div className="absolute left-[20%] top-[50%] sm:left-[30%] sm:top-[48%] md:left-[30%] md:top-[50%] lg:left-[15%] lg:top-[48%] cursor-pointer" onClick={() => handleRoomClick('Living Room Cabnet')}>
              <div className="relative flex space-x-2 items-center">
                <span className="ml-2 bg-white text-[8px] xl:text-[10px] px-2 py-1 rounded shadow whitespace-nowrap">Living Room Cabnet</span>
                <div className="w-1 h-1 rotate-45 bg-[#FF3217]"></div>
              </div>
            </div>


            {/* Bathroom Space */}
            <div className="absolute left-[50%] top-[10%] sm:left-[50%] sm:top-[13%] md:left-[50%] md:top-[15%] lg:left-[50%] lg:top-[8%] xl:left-[50%] xl:top-[10%] cursor-pointer" onClick={() => handleRoomClick('Bathroom Space')}>
              <div className="relative flex space-x-2 items-center">
                <div className="w-1 h-1 rotate-45 bg-[#FF3217]"></div>
                <span className="ml-2 bg-white text-[8px] xl:text-[10px] px-2 py-1 rounded shadow whitespace-nowrap">Bathroom Space</span>
              </div>
            </div>

            {/* Study Space */}
            <div className="absolute left-[63%] top-[18%] sm:left-[65%] sm:top-[20%] md:left-[65%] md:top-[20%] lg:left-[65%] lg:top-[18%] cursor-pointer" onClick={() => handleRoomClick('Study Space')}>
              <div className="relative flex space-x-2 items-center">
                <div className="w-1 h-1 rotate-45 bg-[#FF3217]"></div>
                <span className="ml-2 bg-white text-[8px] xl:text-[10px] px-2 py-1 rounded shadow whitespace-nowrap">Study Space</span>
              </div>
            </div>

            {/* Book Cabinet */}
            <div className="absolute left-[75%] top-[25%] sm:left-[80%] sm:top-[25%] md:left-[80%] md:top-[25%] lg:left-[80%] lg:top-[26%] xl:left-[80%] xl:top-[25%] cursor-pointer" onClick={() => handleRoomClick('Book Cabinet')}>
              <div className="relative flex space-x-2 items-center">
                <div className="w-1 h-1 rotate-45 bg-[#FF3217]"></div>
                <span className="ml-2 bg-white text-[8px] xl:text-[10px] px-2 py-1 rounded shadow whitespace-nowrap">Book Cabinet</span>
              </div>
            </div>

            {/* Glass Fix */}
            <div className="absolute left-[82%] top-[35%] sm:left-[88%] sm:top-[35%] md:left-[88%] md:top-[35%] lg:left-[88%] lg:top-[35%] cursor-pointer" onClick={() => handleRoomClick('Glass Fix')}>
              <div className="relative flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 items-center">
                <div className="w-1 h-1 rotate-45 bg-[#FF3217]"></div>
                <span className="ml-2 bg-white text-[8px] xl:text-[10px] px-2 py-1 rounded shadow whitespace-nowrap">Glass Fix</span>
              </div>
            </div>

            {/* Balcony */}
            <div className="absolute left-[20%] top-[80%] sm:left-[30%] sm:top-[80%] md:left-[30%] md:top-[80%] lg:left-[20%] lg:top-[78%] cursor-pointer" onClick={() => handleRoomClick('Balcony Space')}>
              <div className="relative flex space-x-2 items-center">
                <span className="ml-2 bg-white text-[8px] xl:text-[10px] px-2 py-1 rounded shadow whitespace-nowrap">Balcony Space</span>
                <div className="w-1 h-1 rotate-45 bg-[#FF3217]"></div>
              </div>
            </div>

            {/* Railing  */}
            <div className="absolute left-[50%] top-[78%] sm:left-[50%] sm:top-[82%] md:left-[50%] md:top-[82%] lg:left-[50%] lg:top-[78%] cursor-pointer" onClick={() => handleRoomClick('Railing')}>
              <div className="relative flex flex-col space-y-2 items-center">
                <div className="w-1 h-1 rotate-45 bg-[#FF3217]"></div>
                <span className="bg-white text-[8px] xl:text-[10px] px-2 py-1 rounded shadow whitespace-nowrap">Railing</span>
              </div>
            </div>

            {/* Glass Windows */}
            <div className="absolute left-[62%] top-[45%] sm:left-[60%] sm:top-[50%] md:left-[65%] md:top-[45%] lg:left-[50%] lg:top-[50%] xl:left-[55%] xl:top-[48%] cursor-pointer" onClick={() => handleRoomClick('Glass Windows')}>
              <div className="relative flex flex-col space-y-2 items-center">
                <div className="w-1 h-1 rotate-45 bg-[#FF3217]"></div>
                <span className="sm:ml-10 bg-white text-[8px] xl:text-[10px] px-2 py-1 rounded shadow whitespace-nowrap">Glass Windows</span>
              </div>
            </div>

            {/* Bedroom Space */}
            <div className="absolute left-[55%] top-[35%] sm:left-[60%] sm:top-[35%] md:left-[60%] md:top-[35%] lg:left-[55%] lg:top-[35%] cursor-pointer" onClick={() => handleRoomClick('Bedroom Space')}>
              <div className="relative flex space-x-2 items-center">
                <div className="w-1 h-1 rotate-45 bg-[#FF3217]"></div>
                <span className="ml-2 bg-white text-[8px] xl:text-[10px] px-2 py-1 rounded shadow whitespace-nowrap">Bedroom Space</span>
              </div>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-duration="1200" className="flex flex-col space-y-4 justify-center items-center lg:items-end order-3 lg:order-none mt-4 sm:mt-10 mb-20 lg:mb-0 lg:mt-0">
            {imagesToShow.slice(3, 6).map((imgObj, i) => (
              <Link
                key={i + 3}
                to={{
                  pathname: imgObj.link,
                  state: { imageUrl: imgObj.img, title: imgObj.name }, // Pass the image URL to the new page
                }}
                className={`w-full md:w-[80%] lg:w-[200px] h-[150px] lg:h-[120px] px-4 lg:px-0 rounded-md block overflow-hidden ${i % 2 === 0 ? 'mr-0 lg:mr-6' : ''}`}
              >
                <img
                  src={imgObj.img}
                  alt={`Room Preview ${i}`}
                  className="w-full h-full object-cover rounded-md hover:scale-110 transition-all duration-500"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className='py-10 text-[14px] w-full max-w-7xl mx-auto px-4'>
        <h1 className='text-[20px] text-[#FF3217] font-[600]'>{t("our_clients")}</h1>
        <p>{t("our_clients_des")}</p>

        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 items-center justify-center my-10'>
          <div className='flex items-center justify-center'>
            <img src={client1} alt="" className='w-32 h-32 object-contain' />
          </div>
          <div className='flex items-center justify-center'>
            <img src={client2} alt="" className='w-32 h-32 object-contain' />
          </div>
          <div className='flex items-center justify-center'>
            <img src={client3} alt="" className='w-32 h-32 object-contain' />
          </div>
          <div className='flex items-center justify-center'>
            <img src={client4} alt="" className='w-32 h-32 object-contain' />
          </div>
          <div className='flex items-center justify-center'>
            <img src={client5} alt="" className='w-32 h-32 object-contain' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Customization