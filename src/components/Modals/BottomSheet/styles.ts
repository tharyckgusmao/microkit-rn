import { StyleSheet } from 'react-native';
import { colorsDefault } from '../../../helper/colors';

export const styles = StyleSheet.create({
  ctnHeader: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    textTransform: 'uppercase',
    paddingTop: 12,
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 10,
    color: colorsDefault['--color-base_eerieblack'],
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  draggableIcon: {
    width: 30,
    height: 4,
    borderRadius: 12,
    backgroundColor: '#ccc',
  },
});
