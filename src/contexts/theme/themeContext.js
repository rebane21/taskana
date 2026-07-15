import { createContext, useContext } from 'react';

export const THEME_LIGHT = 'light';
export const THEME_DARK = 'dark';

export const THEME_STORAGE_KEY = 'theme';

export const readStoredTheme = () => {
  const raw = localStorage.getItem(THEME_STORAGE_KEY);
  if (raw == null || raw === '') {
    return THEME_LIGHT;
  }
  if (raw === THEME_LIGHT || raw === THEME_DARK) {
    return raw;
  }
  return THEME_LIGHT;
};

export const ThemeContext = createContext(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme можно вызывать только внутри ThemeProvider.');
  }
  return context;
};
