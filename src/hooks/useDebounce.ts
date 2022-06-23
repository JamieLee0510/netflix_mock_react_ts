import { useEffect, useState } from "react";

export const useDebounce = (value: any, delate: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delate);
    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return debouncedValue;
};
