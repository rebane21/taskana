import { useEffect, useState } from 'react';

const THEME_LIGHT = 'light';
const THEME_DARK = 'dark';

export const useTheme = () => {
  const [theme, setTheme] = useState(THEME_LIGHT);
  const isDark = theme === THEME_DARK;

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((t) => (t === THEME_DARK ? THEME_LIGHT : THEME_DARK));
  };

  return { isDark, toggleTheme };
};
