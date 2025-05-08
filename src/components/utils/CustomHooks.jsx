import { useState } from 'react';
import { useEffect } from 'react';

export function useDebounce(value, delay) {
  const [debVal, setDebVal] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebVal(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value]);

  return debVal;
}
