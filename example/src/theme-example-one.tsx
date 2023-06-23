import merge from 'lodash.merge';
import { TThemeStructure, defaultTheme } from 'react-native-microkit-rn';

let customColors = {
  colors: {
    ...defaultTheme.base.colors,
    '--example-bg-range': '#dad6d0',
  },
};

let base = {
  ...defaultTheme.base,
  ...customColors,
  layout: {
    container: {
      padding: defaultTheme?.base.spacing?.['07'] || 0,
    },
  },
  font: {
    'regular': 'Montserrat-Regular',
    'medium': 'Montserrat-Medium',
    'semibold': 'Montserrat-SemiBold',
    'bold': 'Montserrat-Bold',
    'medium_italic': 'Montserrat-MediumItalic',
    'semibold_italic': 'Montserrat-SemiBoldItalic',
    '400': 'Montserrat-Regular',
    '500': 'Montserrat-Medium',
    '600': 'Montserrat-SemiBold',
    '700': 'Montserrat-Bold',
    '800': 'Montserrat-Bold',
  },
  size: {
    small: 10,
    regular: 12,
    primary: 14,
    medium: 16,
  },
};
let styles = {
  inputs: {
    range: {
      sliderBack: { height: 2 },
      sliderFront: { height: 2 },
      thumb: {
        left: -10,
        width: 20,
        height: 20
      }
    }
  },
  label: {
    title: {
      fontFamily: base.font.regular,
      fontSize: base.size.regular,
      color: base.colors['--color-base_eerieblack'],
    },
  },
  buttons: {
    button: {
      button: {
        backgroundColor: base.colors['--color-green_turquoise'],
        color: base.colors['--color-base_white'],
        borderColor: base.colors['--color-green_turquoise'],
        borderRadius: 10,
      },
      title: {
        fontSize: base.size.primary,
        fontFamily: base.font[500],
        color: '#fff',
      },
      titleoutline: {
        color: base.colors['--color-base_eerieblack'],
      },
      outline: {
        borderColor: base.colors['--color-base_eerieblack'],
        borderWidth: 1,
      },
    },
  },
};
let components = merge(defaultTheme.components, styles);

export let theme = { base, components };

export type APPTheme = TThemeStructure<typeof base, typeof components>;
