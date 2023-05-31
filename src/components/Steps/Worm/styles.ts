import { StyleSheet } from 'react-native';
import { colorsDefault } from '../../../helper/colors';

export const styles = StyleSheet.create({
  dot: {
    backgroundColor: colorsDefault['--color-base_platinum'],
    height: 8,
    width: 8,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
  },
  dotActive: {
    position: 'absolute',
    left: 0,
    top: 0,
  },

  dotStepActive: {
    height: 8,
    width: 8,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
    backgroundColor: colorsDefault['--color-base_eerieblack'],

    position: 'absolute',
    left: 0,
    top: 0,
  },
});
