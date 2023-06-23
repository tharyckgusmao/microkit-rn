import merge from 'lodash.merge';
import { TThemeStructure, defaultTheme } from 'react-native-microkit-rn';

let customColors = {
  colors: {
    ...defaultTheme.base.colors,
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
    select: {
      option: {
        option: {
          borderColor: base.colors['--color-base_platinum'],
        },
        title: {
          fontFamily: base.font[600],
          fontSize: base.size.regular,
          color: base.colors['--color-base_eerieblack'],
        },
        icon: {
          color: base.colors['--color-green_turquoise'],
          marginLeft: 10,
        },
        active: {
          borderColor: base.colors['--color-green_turquoise'],
        },
        activeTitle: {
          color: base.colors['--color-green_turquoise'],
        },
      },
    },
    input: {
      ctn: {
        fontFamily: base.font.regular,

        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
        height: 44,
        paddingRight: 14,
        paddingLeft: 14,
      },
      suffixText: {
        color: base.colors['--color-base_silver'],
      },
      errorInput: {
        color: base.colors['--color-fire_opal'],
      },
      error: {
        borderColor: base.colors['--color-fire_opal'],
        color: base.colors['--color-fire_opal'],
      },
      empty: {
        fontFamily: base.font.medium,
      },
      typing: {
        fontFamily: base.font.semibold,
        color: base.colors['--color-base_eerieblack'],
        borderColor: base.colors['--color-base_eerieblack'],
      },
      filled: {
        fontFamily: base.font.semibold,
        borderColor: base.colors['--color-base_eerieblack'],
        color: base.colors['--color-base_eerieblack'],
      },
      disabled: {
        backgroundColor: base.colors['--color-base_platinum'],
      },
      icon: {
        color: base.colors['--color-base_silver'],
      },
      iconFilled: {
        color: base.colors['--color-base_sonicsilver'],
      },
      iconError: {
        color: base.colors['--color-fire_opal'],
      },
      placeholder: {
        fontFamily: base.font.regular,
        fontSize: 13,
        color: base.colors['--color-base_silver'],
        transform: [
          {
            translateY: -2,
          },
        ],
      },
      placeholderColor: {
        color: base.colors['--color-base_silver'],
      },
      charCount: {
        bottom: 8,
        right: 8,
        fontFamily: base.font.regular,

        fontSize: 10,
        position: 'absolute',
        color: base.colors['--color-base_lightgray'],
        zIndex: 10,
      },

      errorLabel: {
        fontFamily: base.font[600],
        color: base.colors['--color-fire_opal'],
      },
    },
    checkbox: {
      title: {
        fontFamily: base.font[600],
        fontSize: 11,
        color: base.colors['--color-base_eerieblack'],
      },
      errorLabel: {
        fontFamily: base.font[600],
        color: base.colors['--color-fire_opal'],
      },
    },
    radio: {
      title: {
        fontFamily: base.font[600],
        fontSize: 12,
        color: base.colors['--color-base_eerieblack'],
        textAlign: 'left',
      },
    },
    otp: {
      placeholder: {
        fontFamily: base.font[600],
        fontSize: base.size.primary,
        color: base.colors['--color-base_platinum'],
      },
      fakeText: {
        fontFamily: base.font[600],
        fontSize: base.size.primary,
        color: base.colors['--color-base_eerieblack'],
      },
      typing: {
        fontFamily: base.font[600],
        color: base.colors['--color-base_eerieblack'],
        borderColor: base.colors['--color-base_eerieblack'],
      },
      filled: {
        fontFamily: base.font[600],
        borderColor: base.colors['--color-base_eerieblack'],
        color: base.colors['--color-base_eerieblack'],
      },
      errorLabel: {
        fontFamily: base.font[600],
        color: base.colors['--color-fire_opal'],
      },
    },
    counter: {
      title: {
        fontSize: 14,
        fontFamily: base.font[600],
      },
    },
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
      },
      title: {
        fontSize: base.size.primary,
        fontFamily: base.font[800],
        color: '#fff',
      },
      titleoutline: {
        color: base.colors['--color-base_eerieblack'],
      },
      outline: {
        borderColor: base.colors['--color-base_eerieblack'],
      },
      filledBlack: {
        borderColor: base.colors['--color-base_eerieblack'],

        backgroundColor: base.colors['--color-base_eerieblack'],
      },
      disabled: {
        backgroundColor: base.colors['--color-base_silver'],
      },
    },
    backButton: {
      ctn: {
        borderColor: base.colors['--color-base_platinum'],
        backgroundColor: base.colors['--color-base_platinum'],
      },
      icon: {
        fontSize: base.size.primary,
        color: base.colors['--color-base_eerieblack'],
      },
      title: {
        fontSize: base.size.primary,
        fontFamily: base.font[600],
        color: base.colors['--color-base_eerieblack'],
      },
    },
    buttonTabs: {
      ctn: {
        borderColor: base.colors['--color-base_platinum'],
        backgroundColor: base.colors['--color-base_platinum'],
      },
      icon: {
        fontSize: base.size.primary,
        color: base.colors['--color-base_eerieblack'],
      },
      title: {
        fontFamily: base.font[600],
        fontSize: base.size.primary,
        color: base.colors['--color-base_eerieblack'],
      },
    },
  },
  loaders: {
    dot: {
      dot: {
        backgroundColor: base.colors['--color-green_turquoise'],
      },
    },
  },
  progress: {
    line: {
      title: {
        fontFamily: base.font[600],
        fontSize: base.size.primary,
        color: base.colors['--color-base_eerieblack'],
      },
    },
  },
  display: {
    generic: {
      title: {
        fontFamily: base.font[600],
        fontSize: base.size.primary,
        color: base.colors['--color-base_eerieblack'],
        marginBottom: 6,
        textAlign: 'left',
      },
      description: {
        fontFamily: base.font[500],
        fontSize: 12,
        color: base.colors['--color-base_eerieblack'],
        textAlign: 'left',
      },
    },
    avatargroup: {
      title: {
        fontFamily: base.font[700],
      },
    },
    card: {
      title: {
        fontFamily: base.font[700],
      },
      description: {
        fontFamily: base.font[500],
      },
    },
    tag: {
      title: {
        fontFamily: base.font[600],
      },
    },
  },
  modals: {
    confirm: {
      title: {
        fontFamily: base.font[600],
        fontSize: base.size.primary,
        color: base.colors['--color-base_eerieblack'],
      },
      ok: {
        fontFamily: base.font[600],

        fontSize: base.size.primary,

        color: base.colors['--color-fire_opal'],
      },
      not: {
        fontFamily: base.font[600],
        fontSize: base.size.primary,

        color: base.colors['--color-base_sonicsilver'],
      },
    },
    header: {
      title: {
        fontFamily: base.font[600],
        fontSize: base.size.regular,
        color: base.colors['--color-base_eerieblack'],
      },
    },
    base: {
      closeButtonIcon: {
        color: base.colors['--color-base_lightgray'],
      },
    },
  },
};
let components = merge(defaultTheme.components, styles);

export let theme = { base, components };

export type APPTheme = TThemeStructure<typeof base, typeof components>;
