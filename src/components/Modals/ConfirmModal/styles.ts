import { StyleSheet } from 'react-native';
import { colorsDefault } from '../../../helper/colors';

export const styles = StyleSheet.create({
  modalConfirmCtn: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 14,
    color: colorsDefault['--color-base_eerieblack'],
    marginBottom: 20,
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  ok: {
    fontFamily: 'Roboto',
    fontSize: 14,
    paddingTop: 20,
    paddingRight: 0,
    paddingBottom: 20,
    paddingLeft: 0,
    textAlign: 'center',
    color: colorsDefault['--color-fire_opal'],
    width: '100%',
    cursor: 'pointer',
  },
  not: {
    fontFamily: 'Roboto',
    fontSize: 14,
    textAlign: 'center',
    paddingTop: 20,
    paddingRight: 0,
    paddingBottom: 20,
    paddingLeft: 0,
    color: colorsDefault['--color-base_sonicsilver'],
    width: '100%',
    cursor: 'pointer',
  },
});
