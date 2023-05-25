import type { FC } from 'react';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import React, { Button, ScrollView } from 'react-native';
import { Input } from 'react-native-microkit-rn';
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
        gap: 40,
      }}
    >
      <FormProvider {...methodsForm}>
        <Input
          placeholder="escreva aqui..."
          name="password"
          type="password"
          preffix={'icon_locklinear'}
          pressEnterBlur={true}
          control={methodsForm.control}
          colorsInputAnimate={[
            'rgba(236, 130, 116,1)',
            'rgb(2a25, 225, 225,1)',
            'rgba(0, 90, 143,1)',
          ]}
        />
        <Input
          placeholder="escreva aqui..."
          name="name"
          type="default"
          preffix={'icon_userlinear'}
          pressEnterBlur={true}
          control={methodsForm.control}
          colorsInputAnimate={[
            'rgba(236, 130, 116,1)',
            'rgb(2a25, 225, 225,1)',
            'rgba(0, 90, 143,1)',
          ]}
        />
      </FormProvider>
      <Button onPress={handleSubmit} title="submit" />
    </ScrollView>
  );
};
export default InputHome;
