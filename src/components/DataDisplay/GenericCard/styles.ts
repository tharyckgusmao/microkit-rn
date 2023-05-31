import { StyleSheet } from 'react-native';
import { colorsDefault } from '../../../helper/colors';

export const styles = StyleSheet.create({
  title_subtitle: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 14,
    color: colorsDefault['--color-base_eerieblack'],
    marginBottom: 6,
    textAlign: 'left',
  },
  description: {
    fontFamily: 'Roboto',
    fontSize: 12,
    color: colorsDefault['--color-base_eerieblack'],
    textAlign: 'left',
  },
  image: {
    justifyContent: 'flex-start',
    backgroundColor: colorsDefault['--color-base_lightgray'],
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    height: 150,
    width: '100%',
    overflow: 'hidden',
  },
});
