import React, { createContext, useContext, useState } from 'react';
import {
  defaultTheme,
  TThemeStructure,
  type TThemeBase,
} from '../helper/theme';

type ThemeContextType = {
  theme: TThemeBase;
  uuid?: string;
};

const ThemeContext = createContext<Partial<ThemeContextType>>({
  theme: defaultTheme,
});

type TThemeProvider = {
  children?: React.ReactNode;
  initialTheme?:
    | TThemeStructure<typeof defaultTheme.base, typeof defaultTheme.components>
    | any;
};

const ThemeProvider = ({ children, initialTheme }: TThemeProvider) => {
  const [theme] = useState(initialTheme);
  const [uuid] = useState(Math.random().toString(16).substring(4));
  return (
    <ThemeContext.Provider value={{ uuid, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('useTheme has to be used within <ThemeContext.Provider>');
  }

  return themeContext;
};

export { ThemeProvider, useTheme };
