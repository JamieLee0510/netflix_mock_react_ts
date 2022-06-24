// src/i18n.js
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./langs/en";
import zhTW from "./langs/zh_tw";

const resources = {
  en: {
    translation: en,
  },
  zhTW: {
    translation: zhTW,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "en", //預設語言
  fallbackLng: "en", //如果當前切換的語言沒有對應的翻譯則使用這個語言，
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
