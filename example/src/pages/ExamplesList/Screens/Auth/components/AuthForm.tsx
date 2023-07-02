import { yupResolver } from '@hookform/resolvers/yup';
import type { APPTheme } from 'example/src/theme-example-auth';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Image } from 'react-native';
import {
  BaseText,
  Box,
  Button,
  Divider,
  Icon,
  Input,
  makeStyle,
} from 'react-native-microkit-rn';
import * as yup from 'yup';

export type FormValues = {
  email: string;
  password: string;
};
const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

const useStyle = makeStyle((theme: APPTheme) => {
  return {
    container: {
      ...theme?.base?.layout?.container,
    },
    title: {
      color: theme.base?.colors['--color-base_sonicsilver'],
      textAlign: 'center',
      marginBottom: 60,
    },
    signup: {
      color: theme.base?.colors['--color-we-peep'],
      fontFamily: theme.base?.font[600],
    },
    divider: {
      color: theme.base?.colors['--color-we-peep'],
      fontFamily: theme.base?.font[400],
      fontSize: theme.base?.size.regular,
      height: 18,
    },
    image: {
      width: 160,
      height: 160,
      resizeMode: 'contain',
    },
    welcome: {
      color: theme.base?.colors['--color-we-peep'],
      fontFamily: theme.base?.font[600],
      fontSize: 30,
    },
  };
});

export default function AuthForm({
  handleOpenSignUp,
}: {
  handleOpenSignUp: () => void;
}) {
  const methodsForm = useForm<FormValues>({
    defaultValues: {},
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const styles = useStyle();

  return (
    <Box flex={1} style={styles.container}>
      <FormProvider {...methodsForm}>
        <Box gap={30}>
          <Box column jCenter aCenter>
            <Image
              source={require('../assets/welcome.png')}
              style={styles.image}
            ></Image>
            <BaseText title="Welcome back!" style={styles.welcome} />
          </Box>
          <Input
            placeholder="Email"
            name="email"
            type="default"
            preffix={'icon_userlinear'}
            pressEnterBlur={true}
            control={methodsForm.control}
            colorsInputAnimate={[
              'rgba(236, 130, 116,1)',
              'rgba(225, 225, 225,1)',
              '#898989',
            ]}
          />
          <Input
            placeholder="Password"
            name="password"
            type="password"
            pressEnterBlur={true}
            control={methodsForm.control}
          />
          <Box row gap={4} aCenter jCenter>
            <Divider type="h" style={{ width: '48%' }}></Divider>
            <BaseText title="or" style={styles.divider} />
            <Divider type="h" style={{ width: '48%' }}></Divider>
          </Box>
          <Box row gap={20} aCenter jCenter>
            <Button
              onPress={() => {}}
              type={'outline'}
              title={<Icon name={'icon_whatsapplinear'} size={20} />}
              stylesCtn={{
                width: 50,
              }}
            />
            <Button
              onPress={() => {}}
              type={'outline'}
              title={<Icon name={'icon_whatsapplinear'} size={20} />}
              stylesCtn={{
                width: 50,
              }}
            />
            <Button
              onPress={() => {}}
              type={'outline'}
              title={<Icon name={'icon_whatsapplinear'} size={20} />}
              stylesCtn={{
                width: 50,
              }}
            />
          </Box>
          <BaseText>
            <BaseText
              title="Don't Have an account?"
              style={styles.title}
              onPress={handleOpenSignUp}
            />
            <BaseText
              title=" Sign up"
              style={styles.signup}
              onPress={handleOpenSignUp}
            />
          </BaseText>
        </Box>
      </FormProvider>
    </Box>
  );
}
