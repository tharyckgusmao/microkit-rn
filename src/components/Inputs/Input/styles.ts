import { StyleSheet } from 'react-native';
import type { TThemeBase } from '../../..//contexts/themeContext';
import { makeStyle } from '../../../hooks/makeStyle';

export const useStyle = makeStyle((theme: TThemeBase) => {
  return { ...theme?.components?.input, ...theme?.components?.input?.error };
});

export const style = StyleSheet.create({
  ctn: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 12,
    paddingTop: 0,
    paddingRight: 16,
    paddingBottom: 0,
    paddingLeft: 16,
    borderWidth: 1,
    borderStyle: 'solid',
    height: 40,
    zIndex: 4,
    fontSize: 14,
    borderColor: '#d9d9d9',
    backgroundColor: '#fff',
    alignContent: 'center',
  },
  passwordCtn: {
    position: 'absolute',

    paddingTop: 6,
    paddingRight: 6,
    paddingBottom: 6,
    paddingLeft: 6,
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
  suffixText: {},
  errorInput: {},
  error: {},
  empty: {},
  typing: {},

  filled: {},
  disabled: {},

  icon: {},
  iconFilled: {},
  iconError: {},
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
  charCount: {
    bottom: 8,
    right: 8,

    position: 'absolute',
    zIndex: 10,
  },
});

export const styleInputError = StyleSheet.create({
  errorCtn: {
    position: 'absolute',
    bottom: -20,
    right: 0,
    fontWeight: '600',
    width: '100%',
    // backgroundColor: theme.colors['--color-fire_opal'],
    paddingTop: 12,
    paddingRight: 6,
    paddingBottom: 5,
    paddingLeft: 6,
    zIndex: 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    textAlign: 'right',
  },
  errorLabel: {
    // fontFamily: theme.font.semibold,
    // fontSize: theme.size[9],
    color: '#fff',
    letterSpacing: 1,
    textAlign: 'right',
    textTransform: 'uppercase',
  },
});
