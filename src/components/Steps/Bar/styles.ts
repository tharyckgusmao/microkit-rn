import { StyleSheet } from 'react-native';
import { colorsDefault } from '../../../helper/colors';

export const styles = StyleSheet.create({
  bar: {
    backgroundColor: colorsDefault['--color-base_platinum'],
    height: 4,
    width: 8,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
  },

  stepActive: {
    height: 4,
    width: 14,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
    backgroundColor: colorsDefault['--color-base_eerieblack'],

    position: 'absolute',
    left: 0,
    top: 0,
  },
});
