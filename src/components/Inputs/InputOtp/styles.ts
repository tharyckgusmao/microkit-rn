import { StyleSheet } from 'react-native';
import { colorsDefault } from '../../../helper/colors';
import { styleInputError } from '../Input/styles';

export const styles = StyleSheet.create({
  ctn: {},
  input: {
    opacity: 1,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderWidth: 1,
    borderStyle: 'solid',
    width: 52,
    height: 52,
    textAlign: 'center',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    marginLeft: 7,
    marginRight: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderColor: colorsDefault['--color-base_platinum'],
    shadowColor: '#00000030',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  placeholder: {
    fontFamily: 'Arial',
    fontSize: 14,
    color: colorsDefault['--color-base_platinum'],
  },
  fakeText: {
    fontFamily: 'Arial',
    fontSize: 14,
    color: colorsDefault['--color-base_eerieblack'],
  },
  typing: {
    fontFamily: 'Arial',
    color: colorsDefault['--color-base_eerieblack'],
    borderColor: colorsDefault['--color-base_eerieblack'],
  },
  filled: {
    fontFamily: 'Arial',
    borderColor: colorsDefault['--color-base_eerieblack'],
    color: colorsDefault['--color-base_eerieblack'],
  },
  ...styleInputError,
});
