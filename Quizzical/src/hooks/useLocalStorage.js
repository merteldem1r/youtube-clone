import { useState } from 'react';

export const useLocalStorage = (key, INITIAL_VALUE) => {
   const [state, setState] = useState(() => {
      const storage = localStorage.getItem(key);
      return storage ? JSON.parse(storage) : INITIAL_VALUE;
   });

   const updateStorage = value => {
      localStorage.setItem(key, JSON.stringify(value))
      setState(value);
   }

   return [state, updateStorage];
}
