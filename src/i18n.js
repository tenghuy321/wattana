import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    detection: {
      order: ["localStorage", "navigator"], // First check localStorage, then fallback to navigator
      lookupLocalStorage: "i18nextLng", // Key name in localStorage
      caches: ["localStorage"], // Save language to localStorage
    },
    lng: localStorage.getItem("i18nextLng")?.split("-")[0] || "en",
  });

export default i18n;
