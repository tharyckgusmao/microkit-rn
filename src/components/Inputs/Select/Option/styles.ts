import { StyleSheet } from 'react-native';
import { colorsDefault } from '../../../../helper/colors';

export const styles = StyleSheet.create({
  option: {
    borderColor: colorsDefault['--color-base_platinum'],
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderStyle: 'solid',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  ctn: {
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    width: '100%',
  },
  title: {
    fontFamily: 'Ubuntu',
    fontSize: 12,
    color: colorsDefault['--color-base_eerieblack'],
    textAlign: 'left',
    width: '100%',
  },
  icon: {
    color: colorsDefault['--color-carolina_blue'],
    marginLeft: 10,
  },
  active: {
    borderColor: colorsDefault['--color-base_eerieblack'],
  },
  activeTitle: {
    color: colorsDefault['--color-base_eerieblack'],
  },
});
