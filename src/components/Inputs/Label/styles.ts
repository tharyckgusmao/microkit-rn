import type { TextStyle } from 'react-native';
import { StyleSheet } from 'react-native';
import type { TThemeBase } from '../../../contexts/themeContext';
import { makeStyle } from '../../../hooks/makeStyle';
import merge from 'lodash.merge';
export const useStyle = (props?: TextStyle) =>
  makeStyle((theme: TThemeBase) => {
    return merge(theme?.components?.label, props);
  })();

export const styles = StyleSheet.create({
  title: {
    marginBottom: 6,
  },
});
