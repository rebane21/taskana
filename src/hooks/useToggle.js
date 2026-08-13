import { useState } from 'react';

export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const open = () => setValue(true);
  const close = () => setValue(false);
  const toggle = () => setValue((prev) => !prev);

  return [value, open, close, toggle];
};
