import { StyleSheet } from 'react-native';
import { makeStyle } from '../../../hooks/makeStyle';
import type { TThemeBase } from 'src/contexts/themeContext';

export const useStyle = makeStyle((theme: TThemeBase) => ({
  input: {
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
    fontSize: 13,
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
  suffixText: {
    // color: theme.colors['--color-base_silver']
  },
  errorInput: {
    // color: theme.colors['--color-fire_opal']
  },
  error: {
    // borderColor: theme.colors['--color-fire_opal'],
    // color: theme.colors['--color-fire_opal']
  },
  empty: {
    // fontFamily: theme.font.medium
  },
  typing: {
    // fontFamily: theme.font.semibold,
    // color: theme.colors['--color-base_eerieblack'],
    // borderColor: theme.colors['--color-base_eerieblack']
    //  filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1)) !important;
  },

  filled: {
    // fontFamily: theme.font.semibold,
    // borderColor: theme.colors['--color-base_eerieblack'],
    // color: theme.colors['--color-base_eerieblack']
  },
  disabled: {
    // backgroundColor: theme.colors['--color-platinum']
  },

  icon: {
    // color: theme.colors['--color-base_silver']
  },
  iconFilled: {
    // color: theme.colors['--color-base_eerieblack']
  },
  iconError: {
    // color: theme.colors['--color-fire_opal']
  },
  placeholderCtn: {
    display: 'flex',
    height: 40,

    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  placeholder: {
    // fontFamily: theme.font.regular,
    // fontSize: theme.size[13],
    // color: theme.colors['--color-silver_chalice'],
    transform: [
      {
        translateY: -2,
      },
    ],
  },
  charCount: {
    bottom: 8,
    right: 8,
    // fontFamily: theme.font.regular,
    // fontSize: theme.size[10],
    position: 'absolute',
    // color: theme.colors['--color-light_gray'],
    zIndex: 10,
  },
}));

export const styleError = StyleSheet.create({
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
