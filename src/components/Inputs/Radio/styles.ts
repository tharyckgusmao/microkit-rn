import { StyleSheet } from 'react-native';
import { colorsDefault } from '../../../helper/colors';

export const styles = StyleSheet.create({
  wrapper: {
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
    paddingLeft: 12,
    paddingRight: 12,
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
  },
  title: {
    fontFamily: 'Arial',
    fontSize: 12,
    color: colorsDefault['--color-base_eerieblack'],
    textAlign: 'left',
  },
  icon: {
    color: colorsDefault['--color-base_eerieblack'],
    position: 'absolute',
    right: 12,
    top: 12,
  },
  active: {
    borderColor: colorsDefault['--color-green_turquoise'],
    backgroundColor: colorsDefault['--color-green_turquoise'],
  },
  activeIcon: {
    color: '#fff',
  },
  activeTitle: {
    color: '#fff',
  },
});
