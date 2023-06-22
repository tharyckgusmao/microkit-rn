import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { PortalProvider } from '@gorhom/portal';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

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
import { theme } from './theme';
import { IconFont, ThemeProvider } from 'react-native-microkit-rn';
const Stack = createNativeStackNavigator();

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
