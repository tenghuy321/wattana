import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import aboutBg from '../assets/images/abouts/about_bg1.png'

const About = () => {
    return (
        <div className='w-full h-screen bg-white'>
            <div className='w-full h-1/2 text-[20px] md:text-[25px] bg-center bg-cover' style={{ backgroundImage: `url(${aboutBg})` }}>
                <div className='flex flex-col space-y-2 justify-center lg:justify-end w-full h-full max-w-5xl mx-auto lg:pb-[5rem] px-4 sm:px-10'>
                    <h1 className='text-[#FF3217] font-[600]' data-aos="fade-right" data-aos-duration="1200">About Us</h1>
                    <p className='text-[12px] sm:text-[14px] text-black' data-aos="fade-right" data-aos-duration="1200">Wattana Glass ＆ Aluminum was founded by Mr. Sok Saravuth, who is a Cambodian. We have started this business since 2010. To
                        date, we have served customers across 25 provinces. Our main business objective is to use aluminum raw material and convert
                        into furniture and other necessities. </p>
                </div>
            </div>

            <div className='flex items-center justify-between sm:justify-around max-w-5xl mx-auto px-4 sm:px-10 relative -top-[25px] sm:-top-[32px] lg:-top-[30px]'>
                <NavLink data-aos="fade-up" data-aos-duration="1200" to='/about/vision' className={({ isActive }) => `flex flex-col items-center text-[16px] md:text-[18px] gap-4 ${isActive ? 'text-[#FF3217] font-[600]' : 'text-[#000]'}`}>
                    <NavLink to='/about/vision' className={({ isActive }) => `rounded-full flex items-center justify-center ${isActive ? 'w-12 h-12 sm:w-16 sm:h-16 bg-[#FF3217]' : 'w-10 h-10 sm:w-12 sm:h-12 bg-[#000]'}`}>
                        <svg className='w-6 h-6' viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_10_293" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="22" height="21">
                                <path d="M0.333496 0.333374H21.0001V21H0.333496V0.333374Z" fill="white" />
                            </mask>
                            <g mask="url(#mask0_10_293)">
                                <path d="M10.6667 10.6263L5.82299 20.3945H4.00659" stroke="white" strokeMiterlimit="10" />
                                <path d="M10.6667 10.6263V20.3945" stroke="white" strokeMiterlimit="10" />
                                <path d="M17.3269 20.3945H15.5105L10.6667 10.6263" stroke="white" strokeMiterlimit="10" />
                                <path d="M8.85034 20.3945H12.4831" stroke="white" strokeMiterlimit="10" />
                                <path d="M11.8777 9.41541C11.8777 10.0842 11.3355 10.6263 10.6667 10.6263C9.99799 10.6263 9.45581 10.0842 9.45581 9.41541C9.45581 8.74661 9.99799 8.20447 10.6667 8.20447C11.3355 8.20447 11.8777 8.74661 11.8777 9.41541Z" stroke="white" strokeMiterlimit="10" />
                                <path d="M19.9464 6.92331L11.8331 9.08862" stroke="white" strokeMiterlimit="10" />
                                <path d="M9.49339 9.71556L7.00743 10.3709L5.75378 5.69215L18.6928 2.24462" stroke="white" strokeMiterlimit="10" />
                                <path d="M0.918457 6.36095L2.48553 12.2093" stroke="white" strokeMiterlimit="10" />
                                <path d="M1.70178 9.2851L4.04115 8.65827" stroke="white" strokeMiterlimit="10" />
                                <path d="M6.69397 9.20115L4.3546 9.82797L3.72778 7.48861L6.06715 6.86179" stroke="white" strokeMiterlimit="10" />
                                <path d="M18.2225 0.490098L20.4164 8.6778" stroke="white" strokeMiterlimit="10" />
                                <path d="M16.3535 2.87142L17.6072 7.55011" stroke="white" strokeMiterlimit="10" />
                            </g>
                        </svg>
                    </NavLink>
                    <span className='hidden sm:block'>Vision</span>
                </NavLink>
                <NavLink data-aos="fade-up" data-aos-duration="1400" to='/about/mission' className={({ isActive }) => `flex flex-col items-center text-[16px] md:text-[18px] gap-4 ${isActive ? 'text-[#FF3217] font-[600]' : 'text-[#000]'}`}>
                    <NavLink to='/about/mission' className={({ isActive }) => `rounded-full flex items-center justify-center ${isActive ? 'w-12 h-12 sm:w-14 sm:h-14 bg-[#FF3217]' : 'w-10 h-10 sm:w-12 sm:h-12 bg-[#000]'}`}>
                        <svg className='w-6 h-6' viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.3441 0.722753C8.79909 0.722753 7.27598 1.11361 5.91096 1.85642L4.31491 0.180479C4.17375 0.032179 3.97036 -0.0304921 3.77526 0.0141087C3.58016 0.0587096 3.42003 0.204463 3.35029 0.400937L2.54433 2.6716L0.38183 3.51782C0.194712 3.59105 0.0558985 3.75918 0.0134214 3.96404C-0.0290165 4.16889 0.0306313 4.3824 0.171869 4.53066L1.76797 6.2066C1.06052 7.63983 0.688282 9.23909 0.688282 10.8614C0.688282 16.4518 5.01985 21 10.3441 21C15.6684 21 20 16.4518 20 10.8614C20 5.27089 15.6684 0.722753 10.3441 0.722753ZM10.3441 14.1981C12.0964 14.1981 13.522 12.7013 13.522 10.8614C13.522 9.02143 12.0964 7.52459 10.3441 7.52459C9.67949 7.52459 9.06216 7.74028 8.55154 8.10797L7.0763 6.55898C7.97321 5.80643 9.10941 5.3557 10.3441 5.3557C13.2354 5.3557 15.5876 7.82554 15.5876 10.8614C15.5876 13.8972 13.2354 16.367 10.3441 16.367C7.45285 16.367 5.10065 13.8972 5.10065 10.8614C5.10065 9.56493 5.52988 8.37192 6.24659 7.43017L7.72183 8.97917C7.37165 9.51532 7.16622 10.1635 7.16622 10.8614C7.16622 12.7012 8.59183 14.1981 10.3441 14.1981ZM10.759 10.4257L9.40409 9.00311C9.68465 8.84602 10.0046 8.75661 10.3441 8.75661C11.4494 8.75661 12.3486 9.70079 12.3486 10.8613C12.3486 12.0218 11.4494 12.966 10.3441 12.966C9.23884 12.966 8.33962 12.0218 8.33962 10.8613C8.33962 10.5048 8.42477 10.1689 8.57438 9.87431L9.92927 11.2969C10.0438 11.4172 10.194 11.4773 10.3441 11.4773C10.4943 11.4773 10.6444 11.4172 10.7589 11.2969C10.9881 11.0564 10.9881 10.6663 10.759 10.4257ZM4.13092 1.72968L6.1052 3.80272L5.85139 5.27278L3.68186 2.99481L4.13092 1.72968ZM1.6473 4.33748L2.85219 3.866L5.02172 6.14397L3.62162 6.41051L1.6473 4.33748ZM10.3441 19.7679C5.6669 19.7679 1.86168 15.7725 1.86168 10.8614C1.86168 9.56855 2.13086 8.29262 2.64477 7.12721L3.00911 7.50976C3.12011 7.62636 3.26976 7.69022 3.42394 7.69022C3.45872 7.69022 3.49372 7.68697 3.52861 7.68036L4.8215 7.43428C4.25381 8.43903 3.92729 9.61081 3.92729 10.8614C3.92729 14.5765 6.80588 17.5991 10.3441 17.5991C13.8824 17.5991 16.761 14.5765 16.761 10.8614C16.761 7.14618 13.8824 4.12363 10.3441 4.12363C9.15314 4.12363 8.03716 4.46651 7.08025 5.06259L7.31462 3.70505C7.34892 3.50628 7.28822 3.30242 7.15218 3.15958L6.78784 2.77702C7.89772 2.23742 9.1129 1.95478 10.3442 1.95478C15.0214 1.95478 18.8266 5.95025 18.8266 10.8613C18.8266 15.7725 15.0213 19.7679 10.3441 19.7679Z" fill="#FEFFFF" />
                        </svg>
                    </NavLink>
                    <span className='hidden sm:block'>Mission</span>
                </NavLink>
                <NavLink data-aos="fade-up" data-aos-duration="1600" to='/about/core-values' className={({ isActive }) => `flex flex-col items-center text-[16px] md:text-[18px] gap-4 ${isActive ? 'text-[#FF3217] font-[600]' : 'text-[#000]'}`}>
                    <NavLink to='/about/core-values' className={({ isActive }) => `rounded-full flex items-center justify-center ${isActive ? 'w-12 h-12 sm:w-14 sm:h-14 bg-[#FF3217]' : 'w-10 h-10 sm:w-12 sm:h-12 bg-[#000]'}`}>
                        <svg className="w-6 h-6" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_10_276" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
                                <path d="M0 0.444441H29.037V29.4814H0V0.444441Z" fill="white" />
                            </mask>
                            <g mask="url(#mask0_10_276)">
                                <path d="M20.1092 17.1505L23.7302 13.5295C24.3684 12.8914 24.7269 12.0259 24.7269 11.1235V4.24419C24.7269 3.30451 25.4886 2.5428 26.4283 2.5428C27.3679 2.5428 28.1296 3.30451 28.1296 4.24419V13.5335C28.1296 14.8601 27.6645 16.1449 26.8151 17.1641L22.4584 22.3923V25.2279H14.5186V20.2787C14.5186 18.7746 15.116 17.3321 16.1795 16.2686L21.1178 11.33C21.7822 10.6656 22.8593 10.6656 23.5238 11.3299C24.1882 11.9943 24.1883 13.0715 23.5239 13.7359L20.1093 17.1508" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8.92791 17.1505L5.30691 13.5295C4.66872 12.8914 4.31024 12.0259 4.31024 11.1235V4.24419C4.31024 3.30451 3.54847 2.5428 2.60886 2.5428C1.66924 2.5428 0.907471 3.30451 0.907471 4.24419V13.5335C0.907471 14.8601 1.37257 16.1449 2.22196 17.1641L6.57876 22.3923V25.2279H14.5186V20.2787C14.5186 18.7746 13.9211 17.3321 12.8576 16.2686L7.91933 11.33C7.25494 10.6656 6.1778 10.6656 5.51335 11.3299C4.8489 11.9943 4.84884 13.0715 5.51323 13.7359L8.92786 17.1508" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M23.5926 28.6307H14.5186V25.228H23.5926V28.6307Z" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M14.5184 28.6307H5.44434V25.228H14.5184V28.6307Z" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M14.5184 2.97301L13.6652 2.11976C12.5657 1.02027 10.7831 1.02027 9.68355 2.11976C8.584 3.21931 8.584 5.00191 9.68355 6.10146L14.5184 10.9363L19.3533 6.10146C20.4529 5.00191 20.4529 3.21931 19.3533 2.11976C18.2538 1.02027 16.4712 1.02027 15.3717 2.11976L14.5184 2.97301Z" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                        </svg>
                    </NavLink>
                    <span className='hidden sm:block'>Core Values</span>
                </NavLink>
                <NavLink data-aos="fade-up" data-aos-duration="1800" to='/about/msg' className={({ isActive }) => `flex flex-col items-center text-[16px] md:text-[18px] gap-4 ${isActive ? 'text-[#FF3217] font-[600]' : 'text-[#000]'}`}>
                    <NavLink to='/about/msg' className={({ isActive }) => `rounded-full flex items-center justify-center ${isActive ? 'w-12 h-12 sm:w-14 sm:h-14 bg-[#FF3217]' : 'w-10 h-10 sm:w-12 sm:h-12 bg-[#000]'}`}>
                        <svg className='w-6 h-6' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.99096 0C7.22565 0 5.78208 1.44859 5.78208 3.21389C5.78208 4.97919 7.22565 6.42148 8.99096 6.42148C10.7563 6.42148 12.2049 4.97919 12.2049 3.21389C12.2049 1.44859 10.7563 0 8.99096 0ZM8.99096 1.28407C10.0623 1.28407 10.9208 2.14254 10.9208 3.21389C10.9208 4.28524 10.0623 5.13741 8.99096 5.13741C7.91961 5.13741 7.06739 4.28524 7.06739 3.21389C7.06739 2.14254 7.91961 1.28407 8.99096 1.28407ZM5.78208 7.06226C4.72613 7.06226 3.8585 7.92993 3.8585 8.98585V10.2699C2.77427 10.2578 1.72104 10.2699 0.644607 10.2699C-0.212265 10.2699 -0.212265 11.5552 0.644607 11.5552H1.2904V16.0481C1.2904 17.1041 2.15802 17.9767 3.21397 17.9767H14.773C15.8289 17.9767 16.6978 17.1041 16.6978 16.0481V11.5552H17.3423C18.1992 11.5552 18.1992 10.2699 17.3423 10.2699H14.1284V8.98585C14.1284 7.92993 13.2608 7.06226 12.2049 7.06226H5.78208ZM5.78208 8.34633H12.2049C12.5716 8.34633 12.8444 8.6191 12.8444 8.98585V10.2699H5.14256V8.98585C5.14256 8.6191 5.41529 8.34633 5.78208 8.34633ZM2.57445 11.5552H15.4125V16.0481C15.4125 16.4149 15.1398 16.6927 14.773 16.6927H3.21397C2.84718 16.6927 2.57445 16.4149 2.57445 16.0481V11.5552Z" fill="white" />
                        </svg>

                    </NavLink>
                    <span className='hidden sm:block'>MSG From CEO</span>
                </NavLink>
            </div>

            <div className='w-full max-w-7xl mx-auto'>
                <Outlet />
            </div>
        </div>
    )
}

export default About