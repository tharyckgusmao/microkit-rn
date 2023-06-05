import { StyleSheet } from 'react-native';
import { colorsDefault } from '../../../helper/colors';

export const styles = StyleSheet.create({
  ctn: {
    flexDirection: 'row',
  },
  avatar: {
    marginRight: 6,
  },
  image: {
    marginLeft: -5,
  },

  title: {
    fontFamily: 'Ubuntu',
    fontSize: 12,
    color: '#fff',
  },
  titleCtn: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: colorsDefault['--color-base_eerieblack'],
  },
});
