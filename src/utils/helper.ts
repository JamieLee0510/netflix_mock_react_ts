export const getDefaultLang = (): string => {
  return localStorage.getItem("lang") ?? "en";
};

export const setDefaultLang = (lang: string): void => {
  localStorage.setItem("lang", lang);
};

export const langChecker = () => {
  let lang = localStorage.getItem("lang") ?? "en";
  if (lang == "en") {
    return "en-US";
  }
  return "zh-TW";
};
