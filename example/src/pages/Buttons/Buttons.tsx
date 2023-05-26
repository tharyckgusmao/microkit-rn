import { yupResolver } from '@hookform/resolvers/yup';
import type { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import React, { ScrollView } from 'react-native';
import {
  BackButton,
  BaseText,
  Box,
  Button,
  ButtonTabs,
  Divider,
  FormInput,
  Icon,
  Input,
  Label,
} from 'react-native-microkit-rn';
import * as yup from 'yup';
export type FormValues = {
  email: string;
  password: string;
};

const Buttons: FC = () => {
  const onClick = () => {
    console.log('click');
  };
  return (
    <ScrollView
      contentContainerStyle={{
        padding: 20,
        gap: 25,
      }}
    >
      <BaseText title="Buttons Example" />

      <Button onPress={onClick} title="submit" />
      <Button onPress={onClick} title="submit" type={'filledBlack'} />
      <Button onPress={onClick} title="submit" type={'outline'} />
      <Button
        onPress={onClick}
        title="submit"
        type={'outline'}
        style={{
          borderColor: 'red',
        }}
        styleTitle={{
          color: 'red',
        }}
      />
      <Button
        onPress={onClick}
        title="submit"
        type={'outline'}
        style={{
          borderColor: 'red',
        }}
        styleTitle={{
          color: 'red',
        }}
        disabled={true}
      />
      <BaseText title="Button Disabled" />

      <Button onPress={onClick} title="Disabled" disabled={true} />
      <BaseText title="Buttons Loadings" />

      <Button onPress={onClick} title="Loading" loading={true} />
      <Button
        onPress={onClick}
        title="Loading"
        loading={true}
        loadingVariant="center"
      />
      <Button
        onPress={onClick}
        title="Loading"
        loading={true}
        loadingVariant="left"
      />

      <BaseText title="Button Icons" />
      <Button
        onPress={onClick}
        title="Suffix"
        suffix={<Icon name={'icon_arrowrightbold'} />}
      />
      <Button
        onPress={onClick}
        title="Suffix"
        preffix={<Icon name={'icon_arrowleftbold'} />}
      />
      <BaseText title="Back Button" />
      <Box row style={{ gap: '10' }}>
        <BackButton title="Back..." onClick={onClick} />
        <BackButton onClick={onClick} />
      </Box>
      <BaseText title="Button Tabs" />
      <Box row style={{ gap: '10' }}>
        <ButtonTabs
          buttons={[
            { icon: 'icon_alert', title: 'alert', onAction: onClick },
            { icon: 'icon_alert', title: 'alert', onAction: onClick },
            { icon: 'icon_alert', title: 'alert', onAction: onClick },
          ]}
        />
      </Box>
    </ScrollView>
  );
};
export default Buttons;
