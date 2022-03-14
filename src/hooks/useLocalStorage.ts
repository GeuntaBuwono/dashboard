import { useEffect, useState } from 'react';

interface UseGetStorageProps {
  key: 'users';
  defaultValue: string;
}

export const getStorageValue = ({ key, defaultValue }: UseGetStorageProps) => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(key);

    if (typeof saved !== undefined) {
      const initial = saved !== null ? JSON.parse(saved) : defaultValue;
      return initial;
    }
  }
};

const useLocalStorage = ({ key, defaultValue }: UseGetStorageProps) => {
  const [value, setValue] = useState(() => {
    return getStorageValue({
      key,
      defaultValue
    });
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
