import React from 'react'
import aboutBg from '../assets/images/abouts/about_bg.png'
import logo from '../assets/images/logo.png'
import icon1 from '../assets/images/icon-1.png'
import icon2 from '../assets/images/icon-2.png'
import icon3 from '../assets/images/icon-3.png'

const Contact = () => {
  return (
    <div className='w-full h-screen bg-white'>
      <div className='w-full h-[40%] text-[20px] md:text-[25px] bg-center bg-cover' style={{ backgroundImage: `url(${aboutBg})` }}>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-10 items-start justify-center max-w-7xl mx-auto px-4'>
        <div className='flex flex-col space-y-4 text-[22px] text-[#FF3217] font-[700]'>
          <h1 className='pt-10'>Need Consultation</h1>
          <p className='text-[14px] text-[#FF3217] font-[400] pt-4 sm:pt-10'>Please feel free to reach out to us, and one of our consultants will respond within 48 hours.</p>

          <a href="#" className='flex items-center space-x-2 text-[14px] text-[#000] font-[400]'>
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 19C14.7467 19 19 14.7467 19 9.5C19 4.25329 14.7467 0 9.5 0C4.25329 0 0 4.25329 0 9.5C0 14.7467 4.25329 19 9.5 19Z" fill="#FF3217" />
              <path d="M9.49777 9.96976L4.49023 7.47156V12.4353C4.49092 12.687 4.59119 12.9281 4.76913 13.106C4.94707 13.284 5.18822 13.3843 5.43986 13.3849H13.5601C13.8118 13.3843 14.0529 13.284 14.2309 13.106C14.4088 12.9281 14.5091 12.687 14.5098 12.4353V7.52388L9.49777 9.96976Z" fill="white" />
              <path d="M9.50223 9.03133L14.5098 6.5873V6.56578C14.5091 6.31413 14.4088 6.07299 14.2309 5.89505C14.0529 5.71711 13.8118 5.61684 13.5601 5.61615H5.43986C5.194 5.61664 4.95786 5.7122 4.78086 5.88284C4.60386 6.05348 4.49972 6.28596 4.49023 6.53164L9.50223 9.03133Z" fill="white" />
            </svg>
            <span>wattanabuilds@gmail.com</span>
          </a>

          <img src={logo} alt="" className='w-32 h-20' />
        </div>

        <div className='flex flex-col space-y-4 text-[22px] text-[#FF3217] font-[700]'>
          <h1 className='pt-10'>Contact Us</h1>

          <div className='flex items-center space-x-2 text-[14px] text-[#000] font-[400] pt-4 sm:pt-10'>
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.50064 15.9388C12.902 15.9388 16.47 12.3708 16.47 7.96939C16.47 3.56802 12.902 0 8.50064 0C4.09927 0 0.53125 3.56802 0.53125 7.96939C0.53125 12.3708 4.09927 15.9388 8.50064 15.9388Z" fill="#FF3217" />
              <path d="M12.4851 9.61708C11.6254 9.61708 10.8055 9.4298 10.0494 9.06022C9.93086 9.00344 9.79339 8.99448 9.66787 9.03731C9.54236 9.08114 9.43975 9.17279 9.38197 9.29134L9.02335 10.0335C7.94748 9.41586 7.05491 8.52229 6.43629 7.44642L7.17943 7.0878C7.29897 7.03002 7.38963 6.92742 7.43346 6.8019C7.47629 6.67638 7.46832 6.53891 7.41055 6.42036C7.03997 5.66526 6.85269 4.84541 6.85269 3.98472C6.85269 3.70978 6.62954 3.48663 6.3546 3.48663H4.51566C4.24072 3.48663 4.01758 3.70978 4.01758 3.98472C4.01758 8.65378 7.81599 12.4522 12.4851 12.4522C12.76 12.4522 12.9831 12.2291 12.9831 11.9541V10.1152C12.9831 9.84023 12.76 9.61708 12.4851 9.61708Z" fill="#FAFAFA" />
            </svg>

            <span><a href="tel:092 959 777">092 959 777</a> | <a href="tel:088 722 722 7">088 722 722 7</a> </span>
          </div>
          <div className='flex items-end space-x-2 text-[14px] text-[#000] font-[400]'>
            <svg className='mb-[2px]' width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.50064 15.9388C12.902 15.9388 16.47 12.3708 16.47 7.96939C16.47 3.56802 12.902 0 8.50064 0C4.09927 0 0.53125 3.56802 0.53125 7.96939C0.53125 12.3708 4.09927 15.9388 8.50064 15.9388Z" fill="#FF3217" />
              <path d="M12.4851 9.61708C11.6254 9.61708 10.8055 9.4298 10.0494 9.06022C9.93086 9.00344 9.79339 8.99448 9.66787 9.03731C9.54236 9.08114 9.43975 9.17279 9.38197 9.29134L9.02335 10.0335C7.94748 9.41586 7.05491 8.52229 6.43629 7.44642L7.17943 7.0878C7.29897 7.03002 7.38963 6.92742 7.43346 6.8019C7.47629 6.67638 7.46832 6.53891 7.41055 6.42036C7.03997 5.66526 6.85269 4.84541 6.85269 3.98472C6.85269 3.70978 6.62954 3.48663 6.3546 3.48663H4.51566C4.24072 3.48663 4.01758 3.70978 4.01758 3.98472C4.01758 8.65378 7.81599 12.4522 12.4851 12.4522C12.76 12.4522 12.9831 12.2291 12.9831 11.9541V10.1152C12.9831 9.84023 12.76 9.61708 12.4851 9.61708Z" fill="#FAFAFA" />
            </svg>

            <span >Head Office <br /> <a href="tel:096 722 722 7">096 / 088 722 722 7</a></span>
          </div>
          <a href="#" className='flex items-start space-x-2 text-[14px] text-[#000] font-[400]'>
            <div className='mt-[2px]'>
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.50064 15.9388C12.8899 15.9388 16.47 12.3587 16.47 7.96939C16.47 3.58009 12.8899 0 8.50064 0C4.11134 0 0.53125 3.58009 0.53125 7.96939C0.53125 12.3587 4.11134 15.9388 8.50064 15.9388Z" fill="#FF3217" />
                <path d="M11.529 12.158C11.529 12.4361 11.2246 12.7209 10.6939 12.9393C10.1107 13.1794 9.33183 13.3114 8.50052 13.3114C7.66922 13.3114 6.89033 13.1794 6.3071 12.9393C5.77627 12.7208 5.47206 12.4361 5.47206 12.158C5.47206 11.7067 6.27924 11.2616 7.4024 11.087L8.38646 12.0996C8.41653 12.1303 8.45766 12.1478 8.50055 12.1478C8.54345 12.1476 8.58457 12.1303 8.61465 12.0996L9.59849 11.087C10.7218 11.2616 11.529 11.7067 11.529 12.158ZM5.90272 9.08747C4.46807 7.61083 4.46873 5.20781 5.90406 3.73092C6.59497 3.01968 7.51733 2.62769 8.50096 2.62769C9.48415 2.6279 10.4054 3.01903 11.0956 3.72958C11.0988 3.73266 11.1016 3.73556 11.1047 3.7382C12.5329 5.21553 12.5303 7.61344 11.097 9.08809L8.50049 11.7606L5.90272 9.08747ZM7.21798 5.01545C6.51073 5.7227 6.51073 6.87369 7.21798 7.58097C7.92523 8.28801 9.07578 8.28801 9.78306 7.58097C10.4903 6.87372 10.4903 5.72273 9.78306 5.01545C9.42933 4.66193 8.96505 4.48505 8.50052 4.48505C8.03599 4.48505 7.57172 4.66193 7.21798 5.01545Z" fill="white" />
              </svg>
            </div>

            <span>#31-33, National Road 1, Chbar Ampov Phnom Penh, Cambodia</span>
          </a>
        </div>

        <div className='flex flex-col space-y-4 text-[22px] text-[#FF3217] font-[700] pb-20 xl:pb-0'>
          <h1 className='pt-10'>Our Social Media</h1>

          <div className='flex items-center space-x-4'>
            <a href="#">
              <img src={icon1} alt="" className="w-8 h-8"  />
            </a>
            <a href="#">
              <img src={icon2} alt="" className="w-8 h-8"  />
            </a>
            <a href="#">
              <img src={icon3} alt="" className="w-8 h-8"  />
            </a>
          </div>

          <div className="map-container">
            <iframe className='w-full h-[200px] xl:h-[230px]'
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d977.3215331615611!2d104.85821154367481!3d11.531320305733324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2skh!4v1745982353964!5m2!1sen!2skh"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact