import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as React from 'react';
import {
  IconFont,
  Style,
  TThemeStructure,
  ThemeProvider,
  defaultTheme,
} from 'react-native-microkit-rn';
import Home from './pages/Home/Home';
import Icons from './pages/Icons/Icons';
import Input from './pages/Input/Input';
import merge from 'lodash.merge';
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
};
let inputStyles = {
  input: {
    ctn: {
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
      borderBottomLeftRadius: 8,
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
      color: base.colors['--color-base_eerieblack'],
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
};
let components = merge(defaultTheme.components, inputStyles);

let theme = { base, components };

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
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
