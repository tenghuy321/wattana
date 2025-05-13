import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import Button from "./Button";

const Header = () => {
    const [open, setOpen] = useState(false);
    const { t } = useTranslation();

    return (
      <>
        <section className="absolute left-1/2 -translate-x-1/2 w-full flex items-center justify-between h-[3rem] lg:h-[2rem] px-4 max-w-7xl mx-auto bg-white lg:rounded-bl-[20px] lg:rounded-br-[20px] z-10">
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-[12px]">
              <svg
                className="w-4 h-4"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.5 11C8.53757 11 11 8.53757 11 5.5C11 2.46243 8.53757 0 5.5 0C2.46243 0 0 2.46243 0 5.5C0 8.53757 2.46243 11 5.5 11Z"
                  fill="#2196F3"
                />
                <path
                  d="M8.25 6.63713C7.65669 6.63713 7.09088 6.50787 6.56906 6.25281C6.48725 6.21363 6.39237 6.20744 6.30575 6.237C6.21913 6.26725 6.14831 6.3305 6.10844 6.41231L5.86094 6.9245C5.11844 6.49825 4.50244 5.88156 4.0755 5.13906L4.58837 4.89156C4.67087 4.85169 4.73344 4.78087 4.76369 4.69425C4.79325 4.60763 4.78775 4.51275 4.74788 4.43094C4.49213 3.90981 4.36288 3.344 4.36288 2.75C4.36288 2.56025 4.20888 2.40625 4.01913 2.40625H2.75C2.56025 2.40625 2.40625 2.56025 2.40625 2.75C2.40625 5.97231 5.02769 8.59375 8.25 8.59375C8.43975 8.59375 8.59375 8.43975 8.59375 8.25V6.98088C8.59375 6.79113 8.43975 6.63713 8.25 6.63713Z"
                  fill="#FAFAFA"
                />
              </svg>

              <p>096/088 722 722 7</p>
            </div>
            <div className="flex items-center gap-2 text-[12px]">
              <svg
                className="w-4 h-4"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.5 11C8.53757 11 11 8.53757 11 5.5C11 2.46243 8.53757 0 5.5 0C2.46243 0 0 2.46243 0 5.5C0 8.53757 2.46243 11 5.5 11Z"
                  fill="#2196F3"
                />
                <path
                  d="M5.49871 5.77156L2.59961 4.32523V7.19898C2.60001 7.34467 2.65806 7.48428 2.76108 7.5873C2.8641 7.69032 3.0037 7.74837 3.14939 7.74877H7.85061C7.9963 7.74837 8.13591 7.69032 8.23892 7.5873C8.34194 7.48428 8.39999 7.34467 8.40039 7.19898V4.35553L5.49871 5.77156Z"
                  fill="white"
                />
                <path
                  d="M5.50129 5.22844L8.40039 3.81347V3.80101C8.39999 3.65532 8.34194 3.51571 8.23892 3.4127C8.13591 3.30968 7.9963 3.25163 7.85061 3.25123H3.14939C3.00706 3.25151 2.87034 3.30684 2.76787 3.40563C2.66539 3.50442 2.6051 3.63901 2.59961 3.78125L5.50129 5.22844Z"
                  fill="white"
                />
              </svg>

              <p>wattanabuilds@gmail.com</p>
            </div>
            <div className="flex items-center gap-2 text-[12px]">
              <svg
                className="w-4 h-4"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.5 11C8.52923 11 11 8.52923 11 5.5C11 2.47077 8.52923 0 5.5 0C2.47077 0 0 2.47077 0 5.5C0 8.52923 2.47077 11 5.5 11Z"
                  fill="#2196F3"
                />
                <path
                  d="M7.59005 8.3906C7.59005 8.58254 7.37996 8.77908 7.01376 8.92981C6.61125 9.09552 6.07371 9.18661 5.49999 9.18661C4.92627 9.18661 4.38873 9.09552 3.98622 8.92981C3.61987 8.77906 3.40992 8.58254 3.40992 8.3906C3.40992 8.07918 3.96699 7.77202 4.74213 7.65149L5.42127 8.35031C5.44202 8.37152 5.47041 8.38357 5.50001 8.38357C5.52962 8.38342 5.558 8.37152 5.57875 8.35031L6.25774 7.65149C7.03299 7.77202 7.59005 8.07918 7.59005 8.3906ZM3.70714 6.27153C2.71703 5.25244 2.71748 3.59402 3.70806 2.57475C4.18489 2.0839 4.82145 1.81337 5.50029 1.81337C6.17883 1.81352 6.81464 2.08345 7.29099 2.57383C7.29314 2.57596 7.29512 2.57796 7.29724 2.57978C8.28293 3.59934 8.2811 5.25424 7.29189 6.27196L5.49997 8.11637L3.70714 6.27153ZM4.61485 3.46126C4.12675 3.94937 4.12675 4.74371 4.61485 5.23183C5.10296 5.71979 5.897 5.71979 6.38512 5.23183C6.87323 4.74373 6.87323 3.94939 6.38512 3.46126C6.141 3.21729 5.82058 3.09521 5.49999 3.09521C5.1794 3.09521 4.85898 3.21729 4.61485 3.46126Z"
                  fill="white"
                />
              </svg>

              <p>{t("contact_location")}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className='mr-2 hidden lg:flex'>
              <Button />
            </div>

            <svg
              className="w-5 h-5"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                fill="#29A71A"
              />
              <path
                d="M11.5273 4.47272C10.695 3.63209 9.58965 3.11655 8.41069 3.01911C7.23172 2.92167 6.05674 3.24873 5.09769 3.94131C4.13864 4.63389 3.45864 5.64638 3.18036 6.79617C2.90208 7.94596 3.04383 9.15734 3.58004 10.2118L3.05368 12.7673C3.04822 12.7927 3.04806 12.819 3.05323 12.8445C3.05839 12.87 3.06876 12.8941 3.08368 12.9155C3.10554 12.9478 3.13675 12.9727 3.17314 12.9868C3.20953 13.001 3.24936 13.0036 3.28732 12.9945L5.79186 12.4009C6.84337 12.9235 8.04621 13.0562 9.18633 12.7752C10.3265 12.4942 11.3299 11.8179 12.0182 10.8665C12.7064 9.91513 13.0348 8.75042 12.945 7.57962C12.8551 6.40883 12.3527 5.3079 11.5273 4.47272ZM10.7464 10.7055C10.1705 11.2797 9.42895 11.6588 8.62619 11.7893C7.82344 11.9198 6.99998 11.795 6.27186 11.4327L5.92277 11.26L4.38732 11.6236L4.39186 11.6045L4.71004 10.0591L4.53914 9.72182C4.1671 8.99115 4.03586 8.16149 4.16421 7.35167C4.29257 6.54186 4.67394 5.79344 5.25368 5.21363C5.98214 4.4854 6.97001 4.0763 8.00004 4.0763C9.03008 4.0763 10.0179 4.4854 10.7464 5.21363C10.7526 5.22075 10.7593 5.22743 10.7664 5.23363C11.4858 5.96374 11.8875 6.94866 11.8837 7.97366C11.88 8.99866 11.4712 9.98062 10.7464 10.7055Z"
                fill="white"
              />
              <path
                d="M10.61 9.57182C10.4218 9.86818 10.1246 10.2309 9.75093 10.3209C9.09638 10.4791 8.09184 10.3264 6.84184 9.16091L6.82638 9.14727C5.72729 8.12818 5.44184 7.28 5.51093 6.60727C5.54911 6.22545 5.86729 5.88 6.13548 5.65454C6.17787 5.61836 6.22815 5.59259 6.28229 5.57931C6.33643 5.56603 6.39292 5.5656 6.44725 5.57806C6.50158 5.59051 6.55225 5.61551 6.59519 5.65105C6.63813 5.68659 6.67217 5.73168 6.69457 5.78272L7.09911 6.69182C7.1254 6.75076 7.13514 6.81575 7.12729 6.87981C7.11945 6.94388 7.09431 7.00459 7.05457 7.05545L6.85002 7.32091C6.80613 7.37572 6.77965 7.44241 6.77398 7.5124C6.76831 7.58239 6.78371 7.65247 6.8182 7.71363C6.93275 7.91454 7.20729 8.21 7.51184 8.48363C7.85366 8.79272 8.23275 9.07545 8.47275 9.17182C8.53697 9.19805 8.60757 9.20445 8.67546 9.19019C8.74335 9.17594 8.80542 9.14167 8.85366 9.09182L9.09093 8.85272C9.13671 8.80758 9.19365 8.77538 9.25593 8.75941C9.31821 8.74344 9.38362 8.74427 9.44548 8.76182L10.4064 9.03454C10.4594 9.0508 10.508 9.07897 10.5484 9.11689C10.5889 9.1548 10.6201 9.20147 10.6398 9.25331C10.6594 9.30516 10.667 9.36081 10.6618 9.41601C10.6566 9.47121 10.6389 9.52451 10.61 9.57182Z"
                fill="white"
              />
            </svg>

            <svg
              className="w-5 h-5"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.00006 0C-1.91874 0.290531 -2.9303 14.2087 6.74362 16.0002H8.00006H9.2565C18.9326 14.207 17.9167 0.28952 8.00006 0Z"
                fill="#1877F2"
              />
              <path
                d="M9.25622 10.3754H11.1299L11.4865 8.04884H9.25622V6.53892C9.25622 5.90245 9.5678 5.28198 10.5667 5.28198H11.5808V3.30115C9.40915 2.9099 6.8001 3.02898 6.74334 6.27551V8.04884H4.70154V10.3754H6.74334V16.0001H7.99978H9.25622V10.3754Z"
                fill="#F1F1F1"
              />
            </svg>

            <svg
              className="w-5 h-5"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                fill="#039BE5"
              />
              <path
                d="M3.66072 7.82667L11.3741 4.85267C11.7321 4.72333 12.0447 4.94 11.9287 5.48133L11.9294 5.48067L10.6161 11.668C10.5187 12.1067 10.2581 12.2133 9.89339 12.0067L7.89339 10.5327L6.92872 11.462C6.82205 11.5687 6.73205 11.6587 6.52539 11.6587L6.66739 9.62333L10.3741 6.27467C10.5354 6.13267 10.3381 6.05267 10.1254 6.194L5.54472 9.078L3.57005 8.462C3.14139 8.326 3.13205 8.03333 3.66072 7.82667Z"
                fill="white"
              />
            </svg>

            <div className='ml-2 lg:hidden flex'>
              <Button />
            </div>

          </div>

          <div className='flex items-center gap-4 lg:hidden'>
            <div>
              <button onClick={() => setOpen(true)} className="p-2 z-20 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="24"
                  height="24"
                  strokeWidth="1.5"
                >
                  <path d="M4 8l16 0" />
                  <path d="M4 16l16 0" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {open && (
          <div className="fixed inset-0 bg-white flex flex-col items-center justify-center gap-10 z-40 w-full h-full animate-fade-slide">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 bg-[#FF3217] bg-opacity-50 text-white px-2 w-10 h-10 rounded-full text-lg shadow hover:bg-red-600 transition flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="1.5"
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke="#FF3217"
              >
                <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
              </svg>
            </button>

            <ul className="text-[16px] space-y-4 text-center w-[80%] md:w-1/2">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 cursor-pointer transition rounded-full ${
                      isActive
                        ? "bg-[#FF3217] text-[#fff] font-[500] tracking-wider"
                        : "bg-white"
                    }`
                  }
                >
                  {t("home")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 cursor-pointer transition rounded-full ${
                      isActive
                        ? "bg-[#FF3217] text-[#fff] font-[500] tracking-wider"
                        : "bg-white"
                    }`
                  }
                >
                  {t("about_us")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    `block py-2 cursor-pointer transition rounded-full ${
                      isActive
                        ? "bg-[#FF3217] text-[#fff] font-[500] tracking-wider"
                        : "bg-white"
                    }`
                  }
                >
                  {t("products")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `block py-2 cursor-pointer transition rounded-full ${
                      isActive
                        ? "bg-[#FF3217] text-[#fff] font-[500] tracking-wider"
                        : "bg-white"
                    }`
                  }
                >
                  {t("services")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/customization"
                  className={({ isActive }) =>
                    `block py-2 cursor-pointer transition rounded-full ${
                      isActive
                        ? "bg-[#FF3217] text-[#fff] font-[500] tracking-wider"
                        : "bg-white"
                    }`
                  }
                >
                  {t("customization")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 cursor-pointer transition rounded-full ${
                      isActive
                        ? "bg-[#FF3217] text-[#fff] font-[500] tracking-wider"
                        : "bg-white"
                    }`
                  }
                >
                  {t("contact_us")}
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </>
    );
}

export default Header;
