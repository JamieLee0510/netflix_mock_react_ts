import { useState, useEffect } from "react";
import { getDefaultLang, setDefaultLang } from "../utils/helper";
import i18n from "../utils/i18n/i18n";

const defaultLang = getDefaultLang();
const useI18n = () => {
  const [lang, setLang] = useState(defaultLang);

  useEffect(() => {
    setDefaultLang(lang);
    i18n.changeLanguage(lang);
  }, [lang]);
  return setLang;
};

export default useI18n;
