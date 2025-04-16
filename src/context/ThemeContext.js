// External modules
import React, { createContext, useState, useEffect, useContext } from 'react';

// Internal modules
import { lightThemeValues, darkThemeValues } from '../styles/theme';

export const ThemeContext = createContext({
  theme: lightThemeValues,
  toggleTheme: () => {},
  isDark: true,
});

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const [currentTheme, setCurrentTheme] = useState(lightThemeValues);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const isDarkMode = savedTheme !== 'light';
    setIsDark(isDarkMode);
  }, []);

  useEffect(() => {
    const themeToApply = isDark ? darkThemeValues : lightThemeValues;
    setCurrentTheme(themeToApply);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
