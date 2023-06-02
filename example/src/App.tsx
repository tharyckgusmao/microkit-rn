import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { PortalProvider } from '@gorhom/portal';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import merge from 'lodash.merge';
import * as React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  IconFont,
  TThemeStructure,
  ThemeProvider,
  defaultTheme,
} from 'react-native-microkit-rn';
import Buttons from './pages/Buttons/Buttons';
import DataDisplay from './pages/DataDisplay/DataDisplay';
import Home from './pages/Home/Home';
import Icons from './pages/Icons/Icons';
import Input from './pages/Input/Input';
import Loaders from './pages/Loaders/Loaders';
import Modals from './pages/Modals/Modals';
import Progress from './pages/Progress/Progress';
import Sliders from './pages/Sliders/Sliders';
import Steps from './pages/Steps/Steps';
import Transitions from './pages/transitions/transitions';
const Stack = createNativeStackNavigator();

let base = {
  ...defaultTheme.base,
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

export default function App() {
  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('../assets/fonts/ttf/Montserrat-Regular.ttf'),
    'Montserrat-Medium': require('../assets/fonts/ttf/Montserrat-Medium.ttf'),
    'Montserrat-SemiBold': require('../assets/fonts/ttf/Montserrat-SemiBold.ttf'),
    'Montserrat-Bold': require('../assets/fonts/ttf/Montserrat-Bold.ttf'),
    'Montserrat-MediumItalic': require('../assets/fonts/ttf/Montserrat-MediumItalic.ttf'),
    'Montserrat-SemiBoldItalic': require('../assets/fonts/ttf/Montserrat-SemiBoldItalic.ttf'),
    'icons': IconFont.font,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PortalProvider>
        <BottomSheetModalProvider>
          <ThemeProvider initialTheme={theme}>
            <NavigationContainer>
              <Stack.Navigator
                screenOptions={{
                  gestureEnabled: false,
                }}
                initialRouteName={'Home'}
              >
                <Stack.Screen
                  name="Home"
                  component={Home}
                  options={{ headerShown: true }}
                />
                <Stack.Screen
                  name="Icons"
                  component={Icons}
                  options={{ headerShown: true }}
                />
                <Stack.Screen
                  name="Input"
                  component={Input}
                  options={{ headerShown: true }}
                />
                <Stack.Screen
                  name="Buttons"
                  component={Buttons}
                  options={{ headerShown: true }}
                />
                <Stack.Screen
                  name="DataDisplay"
                  component={DataDisplay}
                  options={{ headerShown: true }}
                />
                <Stack.Screen
                  name="Loaders"
                  component={Loaders}
                  options={{ headerShown: true }}
                />
                <Stack.Screen
                  name="Transitions"
                  component={Transitions}
                  options={{ headerShown: true }}
                />
                <Stack.Screen
                  name="Steps"
                  component={Steps}
                  options={{ headerShown: true }}
                />
                <Stack.Screen
                  name="Progress"
                  component={Progress}
                  options={{ headerShown: true }}
                />
                <Stack.Screen
                  name="Modals"
                  component={Modals}
                  options={{ headerShown: true }}
                />
                <Stack.Screen
                  name="Sliders"
                  component={Sliders}
                  options={{ headerShown: true }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </ThemeProvider>
        </BottomSheetModalProvider>
      </PortalProvider>
    </GestureHandlerRootView>
  );
}
