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
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const roomImages = {
  'Living Room': [
    { img: livingRoom1, link: "/customization/living-room/livingRoom1", name: "Glass Windows" },
    { img: livingRoom2, link: "/customization/living-room/livingRoom2", name: "Glass Windows" },
    { img: livingRoom3, link: "/customization/living-room/livingRoom3", name: "Glass Windows" },
    { img: livingRoom4, link: "/customization/living-room/livingRoom4", name: "Glass Windows" },
    { img: livingRoom5, link: "/customization/living-room/livingRoom5", name: "Glass Windows" },
    { img: livingRoom6, link: "/customization/living-room/livingRoom6", name: "Glass Windows" },
  ],
  'Bedroom': [
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
  'Dining Area': [
    { img: defaultImage, link: "/customization/dining-area/dining1", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/dining-area/dining2", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/dining-area/dining3", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/dining-area/dining4", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/dining-area/dining5", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/dining-area/dining6", name: "Glass Windows" },
  ],
  'Balcony': [
    { img: defaultImage, link: "/customization/balcony/balcony1", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony2", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony3", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony4", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony5", name: "Glass Windows" },
    { img: defaultImage, link: "/customization/balcony/balcony6", name: "Glass Windows" },
  ],
};


const Customization = () => {

  const [selectedRoom, setSelectedRoom] = useState('Living Room');

  const handleRoomClick = (room) => {
    setSelectedRoom(room);
  };

  const imagesToShow = roomImages[selectedRoom] || [defaultImage, defaultImage, defaultImage];

  const { t } = useTranslation();
  

  return (
    <div className='w-full min-h-screen lg:h-screen bg-center bg-cover flex flex-col items-center justify-center overflow-hidden' style={{ backgroundImage: `url(${customizationBg})` }}>
      <h1 className='text-[22px] text-[#FF3217] pt-20 xl:pt-10 tracking-wider'>{t("customization")}</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center mt-10 max-w-7xl mx-auto lg:px-4'>
        <div data-aos="fade-right" data-aos-duration="1200" className="flex flex-col space-y-4 justify-center items-center lg:items-start order-2 lg:order-none mt-10 sm:mt-10 mb-20 lg:mb-0 lg:mt-0">
          {imagesToShow.slice(0, 3).map((imgObj, i) => (
            <Link
              key={i}
              to={{
                pathname: imgObj.link,
                // state: { imageUrl: imgObj.img, title: imgObj.name }, // Pass to the new page
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

        <div data-aos="fade-up" data-aos-duration="1200" className="relative w-full max-w-5xl mx-auto mt-5 lg:mt-10 col-span-1 sm:col-span-2 lg:col-span-1 order-1 lg:order-none px-2">
          <img src={customization} alt="3D Floor Plan" className="w-full h-auto" />

          {/* Living Room */}
          <div className="absolute left-[30%] top-[50%] sm:left-[20%] sm:top-[55%] md:left-[12%] md:top-[55%] lg:left-[3%] lg:top-[55%] cursor-pointer" onClick={() => handleRoomClick('Living Room')}>
            <div className="flex items-center space-x-2">
              <span className="bg-white text-[10px] xl:text-[12px] px-2 py-1 rounded shadow hidden sm:block">Living Room</span>
              <div className="w-2 h-2 rotate-45 bg-[#FF3217]"></div>
              <span className="bg-white text-[10px] xl:text-[12px] px-2 py-1 rounded shadow sm:hidden">Living Room</span>
            </div>
          </div>

          {/* Kitchen */}
          <div className="absolute left-[20%] top-[14%] sm:left-[14%] sm:top-[16%] md:left-[10%] md:top-[15%] lg:-left-[4%] lg:top-[14%] cursor-pointer" onClick={() => handleRoomClick('Kitchen')}>
            <div className="flex items-center space-x-2">
              <span className="bg-white text-[10px] xl:text-[12px] px-2 py-1 rounded shadow hidden sm:block">Kitchen</span>
              <div className="w-2 h-2 rotate-45 bg-[#FF3217]"></div>
              <span className="bg-white text-[10px] xl:text-[12px] px-2 py-1 rounded shadow sm:hidden">Kitchen</span>
            </div>
          </div>

          {/* Dining Area */}
          <div className="absolute left-[30%] top-[32%] sm:left-[20%] sm:top-[38%] md:left-[18%] md:top-[40%] lg:left-[2%] lg:top-[35%] cursor-pointer" onClick={() => handleRoomClick('Dining Area')}>
            <div className="flex items-center space-x-2">
              <span className="bg-white text-[10px] xl:text-[12px] px-2 py-1 rounded shadow hidden sm:block">Dining Area</span> 
              <div className="w-2 h-2 rotate-45 bg-[#FF3217]"></div>
              <span className="bg-white text-[10px] xl:text-[12px] px-2 py-1 rounded shadow sm:hidden">Dining Area</span> 
            </div>
          </div>

          {/* Bedroom */}
          <div className="absolute left-[70%] top-[15%] sm:left-[72%] sm:top-[20%] md:left-[80%] md:top-[20%] cursor-pointer" onClick={() => handleRoomClick('Bedroom')}>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rotate-45 bg-[#FF3217]"></div>
              <span className="bg-white text-[10px] xl:text-[12px] px-2 py-1 rounded shadow">Bedroom</span>
            </div>
          </div>

          {/* Balcony */}
          <div className="absolute left-[45%] top-[70%] sm:left-[45%] sm:top-[74%] md:left-[45%] md:top-[74%] cursor-pointer" onClick={() => handleRoomClick('Balcony')}>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rotate-45 bg-[#FF3217]"></div>
              <span className="bg-white text-[10px] xl:text-[12px] px-2 py-1 rounded shadow">Balcony</span>
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
  )
}

export default Customization