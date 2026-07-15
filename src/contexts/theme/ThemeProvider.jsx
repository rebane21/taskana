import { useState, useEffect } from 'react';
import { ThemeContext, readStoredTheme, THEME_DARK, THEME_LIGHT, THEME_STORAGE_KEY } from '@/contexts/theme/themeContext';

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(readStoredTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((t) => (t === THEME_DARK ? THEME_LIGHT : THEME_DARK));
  };

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
};

export default ThemeProvider;
