import { useState, useEffect } from 'react';

const useDebounce = (value: any, wait: number): any => {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounced(value);
    }, wait);

    return () => clearTimeout(handler);
    // eslint-disable-next-line
  }, [value]);
  return debounced;
};

export default useDebounce;
