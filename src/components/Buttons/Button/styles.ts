import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  ctn: {
    width: '100%',
    flex: 0,
  },
  button: {
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 12,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
    width: '100%',
    textAlign: 'center',
    letterSpacing: 1,
    textTransform: 'uppercase',
    position: 'relative',
    borderWidth: 0,
    borderStyle: 'solid',
    backgroundColor: '#00b16a',
    color: '#fff',
    borderColor: '#00b16a',
  },
  title: {
    fontSize: 12,
    fontFamily: 'Arial',
    color: '#fff',
  },
  titledefault: {
    color: '#fff',
  },
  titleoutline: {
    color: '#141414',
  },
  titlefilledBlack: {
    color: '#fff',
  },
  titledisabled: {
    color: '#fff',
  },
  outline: {
    backgroundColor: '#fff',
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderStyle: 'solid',
    borderColor: '#141414',
  },
  filledBlack: {
    color: '#fff',
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderStyle: 'solid',
    borderColor: '#141414',

    backgroundColor: '#141414',
  },
  disabled: {
    backgroundColor: '#c2c2c2',

    //colors
  },
  suffixCtn: {
    position: 'absolute',
    right: 10,
    top: 0,
    bottom: 0,

    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  suffix: {
    color: '#fff',
  },
  preffix: {
    color: '#fff',
  },
  preffixCtn: {
    position: 'absolute',
    left: 10,
    top: 0,
    bottom: 0,

    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinner: {
    position: 'absolute',
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    zIndex: 2,
    top: 0,
    left: 0,
    bottom: 0,
    backgroundColor: '#f0f0f024',
  },
  spinnerleft: {
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  spinnerright: {
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  spinnercenter: {
    alignItems: 'center',
  },
});
