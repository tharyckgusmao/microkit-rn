import { StyleSheet } from 'react-native';

export const styleInputError = StyleSheet.create({
  errorCtn: {
    position: 'absolute',
    bottom: -18,
    right: 0,
    fontWeight: '600',
    width: '100%',
    zIndex: 1,
    textAlign: 'right',
  },
  errorLabel: {
    fontSize: 9,
    color: '#000',
    letterSpacing: 1,
    textAlign: 'right',
    textTransform: 'uppercase',
  },
});
export const style = StyleSheet.create({
  ctn: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    paddingTop: 14,
    paddingRight: 12,
    paddingBottom: 14,
    paddingLeft: 12,
    borderWidth: 1,
    borderStyle: 'solid',
    // height: 40,
    zIndex: 4,
    fontSize: 14,
    borderColor: '#d9d9d9',
    backgroundColor: '#fff',
    alignContent: 'center',
  },
  passwordCtn: {
    position: 'absolute',

    zIndex: 6,

    right: 8,
    top: 0,
    height: '100%',
    justifyContent: 'center',
  },
  passwordIcon: {
    fontSize: 12,
    color: '#bababa',
  },
  preffixCtn: {
    paddingLeft: 40,
  },
  preffix: {
    position: 'absolute',
    top: 0,
    left: 12,
    color: '#d9d9d9',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100%',
    alignItems: 'center',
    zIndex: 6,
  },
  suffix: {
    position: 'absolute',
    top: 0,
    right: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100%',
    alignItems: 'center',
    zIndex: 6,
  },
  suffixText: { color: 'transparent' },
  errorInput: { color: 'transparent' },
  error: { color: 'transparent' },
  empty: { color: 'transparent' },
  typing: { color: 'transparent' },

  filled: { color: 'transparent' },
  disabled: { color: 'transparent' },

  icon: { color: 'transparent' },
  iconFilled: { color: 'transparent' },
  iconError: {
    color: 'transparent',
  },
  placeholderCtn: {
    display: 'flex',
    height: 40,

    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  placeholder: {
    transform: [
      {
        translateY: -2,
      },
    ],
  },
  placeholderColor: { color: '#d9d9d9' },
  charCount: {
    bottom: 8,
    right: 8,

    position: 'absolute',
    zIndex: 10,
  },
  ...styleInputError,
});
