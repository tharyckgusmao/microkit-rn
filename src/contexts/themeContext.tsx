import React, { createContext, useContext, useState } from 'react';
import type { TextStyle, ViewStyle } from 'react-native';

let colorsDefault = {
  '--color-white': '#ffffff',
  '--color-black': '#000000',
  '--color-culture2': '#fdfdfd',
  '--color-sonic_silver': '#6e6f72',
  '--color-gray_web': '#85868a',
  '--color-silver_chalice': '#b4b4b6',
  '--color-light_gray': '#cccccc',
  '--color-platinum': '#ebebed',
  '--color-cultured': '#f9f9f9',
  '--color-royal_purple': '#6d54a3',
  '--color-pearly_purple': '#bf5ea4',
  '--color-vivid_sky_blue': '#40ccf2',
  '--color-non_photo_blue': '#8de0f7',
  '--color-medium_slate_blue': '#8775fe',
  '--color-cornflower_blue': '#778cef',
  '--color-lavender_blue': '#cac2ff',
  '--color-rhythm': '#6a7499',
  '--color-salmon': '#fd746a',
  '--color-turquoise': '#67d7c7',
  '--color-yellow_orange': '#ffa944',
  '--color-tangerine': '#f58300',
  '--color-violet_blue_crayola': '#6c77d8',
  '--color-blue_gray': '#5a9acf',
  '--color-carolina_blue': '#23a0e9',
  '--color-violet_blue_craiola': '#6c77d8',
  '--color-green': '#00b16a',
  '--color-green_turquoise': '#00b16a',
  '--color-fire_opal': '#f35843',
  '--color-main_ceruleanblue': '#0951e0',
  '--color-main_periwinklecrayola': '#d8e6fd',
  '--color-base_eerieblack': '#141414',
  '--color-base_sonicsilver': '#7a7a7a',
  '--color-base_silver': '#c2c2c2',
  '--color-base_lightgray': '#d6d6d6',
  '--color-base_platinum': '#ebebeb',
  '--color-base_cultured': '#f5f5f5',
  '--color-base_white': '#ffffff',
  '--color-utility_turquoise': '#67d7c7',
  '--color-utility_fireopal': '#f35843',
  '--color-utility_heatwave': '#ff7a01',
  '--color-utility_lightorange': '#ffd5ad',
  '--color-utility_mediumslateblue': '#7f7eff',
  '--color-utility_lavenderweb': '#e1e1ff',
  '--color-utility_orangeyellowcrayola': '#ffd966',
  '--color-utility_tuftsblue': '#3c90e6',
  '--color-utility_babyblueeyes': '#93c2f1',
  '--color-utility_mistyrose': '#fde3e3',
};

let sizesDefault = {
  primary: 15,
};

type TPropertiesComponents = 'input' | 'view';
type TPropertiesBase = 'font' | 'colors' | 'size';
type TProperties = TPropertiesComponents | TPropertiesBase;

export type TColors = {
  [key: string]: string;
};

export type TThemeStructure = {
  components: {
    input?: TextStyle;
    view?: ViewStyle;
  };
  base: {
    font?: {
      'regular': string;
      'medium': string;
      'semibold': string;
      'bold': string;
      'medium_italic': string;
      'semibold_italic': string;
      '400': string;
      '500': string;
      '600': string;
      '700': string;
      '800': string;
    };
    colors?: TColors;
    size?: { [key: string | number]: number };
  };
};

type ThemeContextType = {
  theme: TThemeStructure;
  setChangeTheme: (theme: TThemeStructure) => void;
  uuid?: string;
};
const defaultTheme = {
  base: {
    colors: colorsDefault,
    size: sizesDefault,
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
