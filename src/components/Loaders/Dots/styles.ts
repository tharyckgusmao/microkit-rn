import { StyleSheet } from 'react-native';
import { colorsDefault } from '../../../helper/colors';

export const styles = StyleSheet.create({
  styleCtn: {
    position: 'relative',
    width: 10,
    height: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: colorsDefault['--color-base_eerieblack'],
    marginHorizontal: 4,
    opacity: 0,
  },
});
