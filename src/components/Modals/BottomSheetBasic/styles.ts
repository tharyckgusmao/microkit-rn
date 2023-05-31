import { Dimensions } from 'react-native';

const { StyleSheet } = require('react-native');
const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  ctn: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    alignItems: 'flex-end',
    zIndex: 2,
    flex: 1,
    justifyContent: 'flex-end',
  },

  container: {
    backgroundColor: '#fff',
    width: '100%',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,

    zIndex: 2,
  },
  bg: {
    position: 'absolute',
    top: 0,
    left: 0,
    flex: 1,
    width: '100%',
    height: height,
  },
  contentBackground: {
    backgroundColor: '#00000030',
    opacity: 0,
    flex: 1,
    height: height,

    width: '100%',
  },
  dataCtn: {
    paddingTop: 40,
    paddingBottom: 20,

    height: '100%',
  },

  draggableContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 24,
  },
  draggableIcon: {
    width: 30,
    height: 4,
    borderRadius: 12,
    backgroundColor: '#ccc',
  },
  hackGlutter: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 40,
    left: 0,
    backgroundColor: '#fff',
  },
});
