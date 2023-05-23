import { useMemo } from 'react';
import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native';
import { TThemeStructure, useTheme } from '../contexts/themeContext';

//content from @Nexapp/react-native-theme
export interface Style {
  [key: string]: ViewStyle | TextStyle | ImageStyle;
}

export const makeStyle =
  <T extends Style>(
    apply: (theme: TThemeStructure | undefined) => T
  ): (() => T) =>
  (): T => {
    const { theme } = useTheme();

    return useMemo(() => {
      const styles = apply(theme);

      return StyleSheet.create(styles);
    }, [theme]);
  };
