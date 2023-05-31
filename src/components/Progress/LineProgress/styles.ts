import { StyleSheet } from 'react-native';
import { colorsDefault } from '../../../helper/colors';

export const styles = StyleSheet.create({
  lineprogressCtn: {
    width: '100%',
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 13,
    color: colorsDefault['--color-base_eerieblack'],
    padding: 0,
    marginBottom: 4,
  },
  lineCtn: {
    width: '100%',
    height: 4,
    overflow: 'hidden',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    borderBottomRightRadius: 14,
    borderBottomLeftRadius: 14,
    backgroundColor: colorsDefault['--color-base_platinum'],
  },
  line: {
    width: '100%',
    position: 'absolute',
    left: '0%',
    top: 0,
    height: 4,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    borderBottomRightRadius: 14,
    borderBottomLeftRadius: 14,
    backgroundColor: colorsDefault['--color-base_eerieblack'],
  },
});
