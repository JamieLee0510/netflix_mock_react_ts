export const getDefaultLang = (): string => {
  return localStorage.getItem("lang") ?? "en";
};

export const setDefaultLang = (lang: string): void => {
  localStorage.setItem("lang", lang);
};
