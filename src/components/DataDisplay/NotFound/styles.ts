import { StyleSheet } from 'react-native';
import { colorsDefault } from '../../../helper/colors';

export const styles = StyleSheet.create({
  notfoundTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: colorsDefault['--color-base_eerieblack'],
    whiteSpace: 'pre-line',
  },
  notfoundCtn: {
    zIndex: 2,
    pointerEvents: 'none',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  },
});
