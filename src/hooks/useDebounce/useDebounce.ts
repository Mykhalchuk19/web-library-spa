import { useState, useEffect } from 'react';

export const useDebounce = (value: any, wait: number): any => {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounced(value);
    }, wait);

    return () => clearTimeout(handler);
    // eslint-disable-next-line
  }, [value]);
  console.log(debounced);
  return debounced;
};
