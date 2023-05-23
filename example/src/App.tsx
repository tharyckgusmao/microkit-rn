import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as React from 'react';
import {
  IconFont,
  ThemeProvider,
  defaultTheme,
} from 'react-native-microkit-rn';
import Icons from './pages/Icons/Icons';
import Home from './pages/Home/Home';
const Stack = createNativeStackNavigator();

let theme = defaultTheme;
theme.base.layout = {
  container: {
    padding: theme?.base.spacing?.['07'],
  },
};
theme.base.font = {
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
};
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
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Icons"
            component={Icons}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
