import { StyleSheet } from 'react-native';
import { colorsDefault } from '../../../helper/colors';

export const styles = StyleSheet.create({
  sliderContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  sliderBack: {
    height: 4,
    backgroundColor: colorsDefault['--color-base_platinum'],
    borderRadius: 20,
  },
  sliderFront: {
    height: 4,
    backgroundColor: colorsDefault['--color-base_eerieblack'],
    borderRadius: 20,
    position: 'absolute',
  },
  chev: {
    position: 'absolute',
    bottom: -4,
    width: 0,
    height: 0,
    borderLeftWidth: 5,
    borderLeftColor: 'transparent',
    borderRightWidth: 5,
    borderRightColor: 'transparent',
    borderTopWidth: 5,
    borderTopColor: colorsDefault['--color-base_eerieblack'],
    borderRadius: 5,
  },
  thumb: {
    left: -5,
    width: 10,
    height: 10,
    position: 'absolute',
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
  },
  label: {
    position: 'absolute',
    top: -40,
    bottom: 20,
    backgroundColor: 'black',
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  labelText: {
    color: 'white',
    padding: 5,
    fontWeight: 'bold',
    fontSize: 16,
    width: '100%',
  },
});
