import type { APPTheme } from 'example/src/theme-example-auth';
import { theme } from 'example/src/theme-example-auth';
import React, { useState } from 'react';
import { Dimensions, Image } from 'react-native';
import {
  BaseText,
  BottomSheet,
  Box,
  Button,
  makeStyle,
  ThemeProvider,
} from 'react-native-microkit-rn';
import AuthForm from './components/AuthForm';
const { width } = Dimensions.get('window');

const useStyle = makeStyle((theme: APPTheme) => {
  return {
    container: {
      ...theme?.base?.layout?.container,
      backgroundColor: theme?.base?.colors['--color-royal-blue'],
    },
    bg: {
      width: width,
      height: '70%',
      resizeMode: 'cover',
      position: 'absolute',
      left: 0,
      top: -30,
      right: 0,
    },
    title: {
      color: theme.base?.colors['--color-we-peep'],
      textAlign: 'center',
      marginBottom: 60,
    },
    signup: {
      color: theme.base?.colors['--color-we-peep'],
      fontFamily: theme.base?.font[600],
    },
  };
});
//Credits concept https://dribbble.com/shots/20328817-Loyalty-App
const Auth = () => {
  const styles = useStyle();
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showLogIn, setShowLogIn] = useState(false);
  const handleOpenSignUp = (evt = true) => {
    setShowSignUpModal(evt);
  };
  const handleShowLogIn = (evt = true) => {
    setShowLogIn(evt);
  };
  return (
    <Box flex={1} style={styles.container}>
      <Image source={require('./assets/auth.png')} style={styles.bg}></Image>
      <Box aCenter jEnd flex={1} gap={30}>
        <Button title="Log in" onPress={handleShowLogIn} />
        <BaseText title="Don't Have an account?" style={styles.title}>
          <BaseText
            title=" Sign up"
            style={styles.signup}
            onPress={handleOpenSignUp}
          />
        </BaseText>
      </Box>
      <BottomSheet
        snapPoints={['80%']}
        show={showSignUpModal}
        headerSeparateColor={'#fff'}
        draggableColor={theme.base.colors['--color-base']}
        onCloseModal={() => {
          handleOpenSignUp(false);
        }}
      >
        <Box></Box>
      </BottomSheet>

      <BottomSheet
        snapPoints={['80%']}
        show={showLogIn}
        headerSeparateColor={'#fff'}
        draggableColor={theme.base.colors['--color-base']}
        onCloseModal={() => {
          handleShowLogIn(false);
        }}
      >
        <AuthForm
          handleOpenSignUp={() => {
            handleShowLogIn(false);
            handleOpenSignUp(true);
          }}
        ></AuthForm>
      </BottomSheet>
    </Box>
  );
};

export default () => (
  <ThemeProvider initialTheme={theme}>
    <Auth />
  </ThemeProvider>
);
