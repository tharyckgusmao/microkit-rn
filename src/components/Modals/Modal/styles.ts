import { Dimensions, StyleSheet } from 'react-native';
import { colorsDefault } from '../../../helper/colors';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  ctn: {
    width: width,
    zIndex: 12,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
  },
  offset: {
    height: height,
    width: width,

    backgroundColor: '#4040406b',
    zIndex: 8,
    position: 'absolute',
    left: 0,
    top: 0,
    flex: 1,
  },
  modalContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
  },
  modalCtn: {
    paddingTop: 48,
    paddingRight: 20,
    paddingBottom: 48,
    paddingLeft: 20,
    width: 'auto',
    minWidth: width * 0.9,
    boxSizing: 'border-box',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: '#fff',
    marginTop: 'auto',
    marginRight: 'auto',
    marginBottom: 'auto',
    marginLeft: 'auto',
    display: 'flex',
    overflow: 'hidden',

    paddingHorizontal: 18,
    paddingVertical: 18,
    zIndex: 12,
  },
  closeButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 10,
    cursor: 'pointer',
  },
  closeButtonIcon: {
    fontSize: 14,

    color: colorsDefault['--color-base_eerieblack'],
  },
});
