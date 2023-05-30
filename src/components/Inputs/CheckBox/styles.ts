import { StyleSheet } from 'react-native';
import { colorsDefault } from '../../../helper/colors';
import { styleInputError } from '../Input/styles';

export const styles = StyleSheet.create({
  checkBoxInput: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderStyle: 'solid',
    width: 22,
    height: 22,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderColor: colorsDefault['--color-base_lightgray'],
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Arial',
    fontSize: 11,
    color: colorsDefault['--color-base_eerieblack'],
    zIndex: 2,
    flex: 1,
    marginLeft: 10,
  },
  message: {},
  ...styleInputError,
});
