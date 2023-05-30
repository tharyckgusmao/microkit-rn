import { StyleSheet } from 'react-native';
import { colorsDefault } from '../../../helper/colors';

export const styles = StyleSheet.create({
  buttontabsCtn: {
    backgroundColor: colorsDefault['--color-base_white'],
    display: 'flex',
    flexDirection: 'row',
    borderColor: colorsDefault['--color-base_platinum'],
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderStyle: 'solid',

    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    color: colorsDefault['--color-base_eerieblack'],
    cursor: 'pointer',

    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 10,
    paddingBottom: 10,
  },
  title: {
    fontFamily: 'Arial',
    fontSize: 12,
    color: colorsDefault['--color-base_eerieblack'],
  },
  icon: {
    fontSize: 10,
    color: colorsDefault['--color-base_eerieblack'],
    marginRight: 8,
  },
});
