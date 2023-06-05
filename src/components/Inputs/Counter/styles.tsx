import { StyleSheet } from 'react-native';
import { colorsDefault } from '../../../helper/colors';

export const styles = StyleSheet.create({
  ctn: { gap: 20, alignItems: 'center' },
  leftButton: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
  },
  icon: { fontSize: 14 },
  title: {
    fontSize: 12,
    color: colorsDefault['--color-base_eerieblack'],
    fontFamily: 'Ubuntu',
  },
  rightButton: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
  },
});
