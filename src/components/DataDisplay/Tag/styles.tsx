import { StyleSheet } from 'react-native';
import { colorsDefault } from '../../../helper/colors';

export const styles = StyleSheet.create({
  ctn: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 10,
    backgroundColor: colorsDefault['--color-base_cultured'],
  },
  title: {
    color: colorsDefault['--color-base_eerieblack'],
    fontFamily: 'Ubuntu',
    fontSize: 12,
  },
});
