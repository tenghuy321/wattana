import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import Button from "./Button";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <section className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-4 xl:gap-10 w-full max-w-7xl mt-[4rem] px-4">
      <div>
        <img src={logo} alt="" className="w-32 h-30" />
      </div>

      <div className="w-full bg-white rounded-full px-10 xl:px-12 py-4 xl:py-5 shadow-md">
        <ul className="flex items-center justify-between gap-4 xl:gap-10 text-[#1E1E1E]">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-2 py-[22px] xl:py-[27px] nav_link text-[16px] xl:text-[18px] ${
                  isActive ? "active" : ""
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
                `px-2 py-[22px] xl:py-[27px] nav_link text-[16px] xl:text-[18px] ${
                  isActive ? "active" : ""
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
                `px-2 py-[22px] xl:py-[27px] nav_link text-[16px] xl:text-[18px] ${
                  isActive ? "active" : ""
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
                `px-2 py-[22px] xl:py-[27px] nav_link text-[16px] xl:text-[18px] ${
                  isActive ? "active" : ""
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
                `px-2 py-[22px] xl:py-[27px] nav_link text-[16px] xl:text-[18px] ${
                  isActive ? "active" : ""
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
                `px-2 py-[22px] xl:py-[27px] nav_link text-[16px] xl:text-[18px] ${
                  isActive ? "active" : ""
                }`
              }
            >
              {t("contact_us")}
            </NavLink>
          </li>
        </ul>
      </div>

      <div>
        <Button />
      </div>
    </section>
  );
}

export default Navbar