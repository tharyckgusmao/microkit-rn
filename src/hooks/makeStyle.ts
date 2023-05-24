import { useMemo } from 'react';
import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native';
import { useTheme } from '../contexts/themeContext';

export type Style<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const makeStyle =
  <T extends Style<T>>(apply: (theme: any) => T): (() => T) =>
  (): T => {
    const { theme } = useTheme();

    return useMemo(() => {
      const styles = apply(theme);

      return StyleSheet.create(styles);
    }, [theme]);
  };
