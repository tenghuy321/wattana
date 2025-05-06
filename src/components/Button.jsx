import khFlag from "../assets/images/flag/kh-flag.png";
import enFlag from "../assets/images/flag/usa-flag.png";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function Button() {
   const { i18n } = useTranslation();
   const [lang, setLang] = useState("");

   useEffect(() => {
     const localeEn = localStorage.getItem("i18nextLng");
     setLang(localeEn || "en"); // Default to "en" if no value is found
   }, []);

   const triggerKhClick = () => {
     if (i18n.changeLanguage) {
       i18n.changeLanguage("kh");
       setLang("kh");
     } else {
       console.error("changeLanguage method is not available on i18n.");
     }
   };

   const triggerEnClick = () => {
     if (i18n.changeLanguage) {
       i18n.changeLanguage("en");
       setLang("en");
     } else {
       console.error("changeLanguage method is not available on i18n.");
     }
   };

  return (
    <div>
      <button
        className={lang != "en" ? "hidden" : "block"}
        onClick={triggerKhClick}
      >
        <img
          src={enFlag}
          alt="usa-flag"
          width="2000"
          height="2000"
          className="w-[50px] h-full"
        />
      </button>
      <button
        className={lang != "en" ? "block" : "hidden"}
        onClick={triggerEnClick}
      >
        <img
          src={khFlag}
          alt="kh-flag"
          width="2000"
          height="2000"
          className="w-[50px] h-full"
        />
      </button>
    </div>
  );
}
