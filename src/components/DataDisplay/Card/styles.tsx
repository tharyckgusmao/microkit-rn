import { StyleSheet } from 'react-native';
import { colorsDefault } from '../../../helper/colors';

export const styles = StyleSheet.create({
  ctn: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderColor: colorsDefault['--color-base_cultured'],
    borderWidth: 1,
    borderRadius: 8,

    padding: 10,
    minHeight: 90,
  },
  left: {
    flexDirection: 'row',
    flex: 1,
    height: '100%',
    justifyContent: 'center',

    gap: 14,
  },
  right: {
    flexDirection: 'row-reverse',
    flex: 1,
    height: '100%',
    justifyContent: 'center',

    gap: 14,
  },
  bottom: {
    flexDirection: 'column-reverse',
    flex: 1,
    height: '100%',
    justifyContent: 'center',

    gap: 14,
  },
  image: {
    width: 50,
    height: '100%',
  },
  info: { flex: 1, gap: 4, flexDirection: 'column', justifyContent: 'center' },
  title: {
    fontFamily: 'Ubuntu',
    fontSize: 14,
    color: colorsDefault['--color-base_eerieblack'],
  },
  description: {
    fontFamily: 'Ubuntu',
    fontSize: 12,
    color: colorsDefault['--color-base_eerieblack'],
  },
  buttoncenter: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  buttonstart: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: '100%',
  },
  buttonend: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    height: '100%',
  },
  buttonCtn: {
    width: 26,
    height: 26,
    backgroundColor: colorsDefault['--color-base_eerieblack'],
    borderRadius: 100,
  },
  icon: {
    color: '#fff',
    fontSize: 10,
    transform: [
      {
        translateX: 2,
      },
    ],
  },
});
