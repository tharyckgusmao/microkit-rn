import React, { createContext, useContext, useState } from 'react';
import type { TextStyle, ViewStyle } from 'react-native';
import type { Style } from '../hooks/makeStyle';

let colorsDefault = {
  '--color-white': '#ffffff',
  '--color-black': '#000000',
  '--color-cultured': '#f9f9f9',
  '--color-turquoise': '#67d7c7',
  '--color-yellow_orange': '#ffa944',
  '--color-tangerine': '#f58300',
  '--color-carolina_blue': '#23a0e9',
  '--color-green': '#00b16a',
  '--color-green_turquoise': '#00b16a',
  '--color-fire_opal': '#f35843',
  '--color-base_eerieblack': '#141414',
  '--color-base_sonicsilver': '#7a7a7a',
  '--color-base_silver': '#c2c2c2',
  '--color-base_lightgray': '#d6d6d6',
  '--color-base_platinum': '#ebebeb',
  '--color-base_cultured': '#f5f5f5',
  '--color-base_white': '#ffffff',
};

let sizesDefault = {
  primary: 15,
};

let spacingDefault = {
  '01': 2,
  '02': 4,
  '03': 8,
  '04': 12,
  '05': 16,
  '06': 24,
  '07': 32,
};

export type TColors = {
  [key: string]: string;
};

export type TThemeStructure = {
  components: {
    [key: string]: Style | undefined;
  };
  base: {
    font?: {
      'regular'?: string;
      'medium'?: string;
      'semibold'?: string;
      'bold'?: string;
      'medium_italic'?: string;
      'semibold_italic'?: string;
      '400'?: string;
      '500'?: string;
      '600'?: string;
      '700'?: string;
      '800'?: string;
    };
    spacing?: {
      [key: string]: number;
    };
    colors?: TColors;
    size?: { [key: string | number]: number };
    layout?: {
      [key: string]: Style | undefined;
    };
  };
};

type ThemeContextType = {
  theme: TThemeStructure;
  setChangeTheme: (theme: TThemeStructure) => void;
  uuid?: string;
};
export const defaultTheme = {
  base: {
    colors: colorsDefault,
    size: sizesDefault,
    spacing: spacingDefault,
    font: {},
    layout: {},
  },
  components: {},
};

const ThemeContext = createContext<Partial<ThemeContextType>>({
  theme: defaultTheme,
});

type TThemeProvider = {
  children?: React.ReactNode;
  initialTheme?: TThemeStructure;
};

const ThemeProvider = ({ children, initialTheme }: TThemeProvider) => {
  const [theme, setTheme] = useState(initialTheme || defaultTheme);
  const [uuid, setUuid] = useState('1');
  const setChangeTheme = (custom: TThemeStructure) => {
    setTheme({
      ...theme,
      ...custom,
    });
    setUuid(Math.random().toString(16).substring(4));
  };

  return (
    <ThemeContext.Provider value={{ setChangeTheme, uuid, theme }}>
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
