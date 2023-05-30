import { StyleSheet } from 'react-native';
import { colorsDefault } from '../../../helper/colors';

export const styles = StyleSheet.create({
  ctn: {
    display: 'flex',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderStyle: 'solid',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    zIndex: 2,
    borderColor: colorsDefault['--color-base_platinum'],
    backgroundColor: colorsDefault['--color-base_platinum'],
  },
  icon: {
    fontSize: 12,
    color: colorsDefault['--color-base_eerieblack'],
  },
  title: {
    marginLeft: 4,
    fontFamily: 'Arial',
    fontSize: 12,
    color: colorsDefault['--color-base_eerieblack'],
  },
});
