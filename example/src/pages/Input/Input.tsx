import type { FC } from 'react';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import React, { Button, ScrollView } from 'react-native';
import {
  BaseText,
  Divider,
  FormInput,
  Input,
  Label,
} from 'react-native-microkit-rn';
import { yupResolver } from '@hookform/resolvers/yup';
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
const InputHome: FC = () => {
  const methodsForm = useForm<FormValues>({
    defaultValues: {},
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });
  const submit = async (data: FormValues) => {
    console.log(data);
  };
  const handleSubmit = () => {
    methodsForm.handleSubmit(submit)();
  };
  return (
    <ScrollView
      contentContainerStyle={{
        padding: 20,
        gap: 25,
      }}
    >
      <BaseText title="Label Example" />
      <Label title="Label" />
      <Divider type="h" />
      <BaseText title="Inputs Example" />
      <FormProvider {...methodsForm}>
        <Input
          placeholder="write here..."
          name="password"
          type="password"
          pressEnterBlur={true}
          control={methodsForm.control}
        />
        <Input
          placeholder="write here..."
          name="name"
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
          placeholder="(__) _________"
          name="phone"
          mask="phone"
          type="phone-pad"
          preffix={'icon_phonelinear'}
          pressEnterBlur={true}
          control={methodsForm.control}
          colorsInputAnimate={[
            'rgba(236, 130, 116,1)',
            'rgba(225, 225, 225,1)',
            '#898989',
          ]}
        />
        <Input
          control={methodsForm.control}
          name="year"
          placeholder="____"
          type="number-pad"
          mask="year"
          preffix={'icon_calendarlinear'}
          pressEnterBlur={true}
        />
        <Divider type="h" />
        <BaseText title="Form Input Example" />
        <FormInput
          name="name"
          label="FullName"
          placeholder="write here..."
          type="default"
          preffix={'icon_userlinear'}
          control={methodsForm.control}
          styleInput={{
            textTransform: 'capitalize',
          }}
        />
      </FormProvider>
      <Button onPress={handleSubmit} title="submit" />
    </ScrollView>
  );
};
export default InputHome;
