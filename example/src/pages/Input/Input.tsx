import { yupResolver } from '@hookform/resolvers/yup';
import { useState, type FC, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import React, { ScrollView } from 'react-native';
import {
  BaseText,
  Box,
  Button,
  CheckBox,
  Divider,
  FormInput,
  Input,
  InputOtp,
  Label,
  Radio,
  Select,
  parserParamsCursor,
} from 'react-native-microkit-rn';
import * as yup from 'yup';
export type FormValues = {
  email: string;
  password: string;
  terms: string;
  otp: string;
  categories: any;
};
const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    password: yup.string().required(),
    otp: yup.string().required(),
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
  const [radio, setRadio] = useState(true);

  const getAnimes = async (params: any) => {
    const nextPageParams = parserParamsCursor(params);
    let data = await (
      await fetch('https://api.jikan.moe/v4/characters' + nextPageParams)
    )?.json();

    //example service api
    let cursor = {
      total: data?.pagination?.items?.count || 0,
      nextPage: data?.pagination?.has_next_page
        ? `/?page=${data?.pagination?.current_page + 1}`
        : null,
    };
    let elements = data?.data?.map((e: any) => {
      return {
        data: e,
        label: e.name,
        id: e.mal_id,
      };
    });
    return {
      result: {
        data: elements,
        cursor,
      },
    };
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
        <Divider type="h" />
        <Label title="Mask suport" />
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
        <Label title="Otp" />
        <InputOtp control={methodsForm.control} name="otp" size={5} />
        <InputOtp
          control={methodsForm.control}
          name="otp2"
          size={5}
          colorsInputAnimate={[
            'rgba(236, 130, 116,1)',
            'rgba(225, 225, 225,1)',
            'rgba(153, 36, 255,1)',
          ]}
        />

        <Divider type="h" />
        <Label title="Checkbox" />
        <CheckBox
          name="term"
          title={'Terms and Policies'}
          control={methodsForm.control}
        />
        <Label title="Radio" />
        <Radio
          onClick={() => {
            setRadio((e) => !e);
          }}
          active={radio}
          item={1}
          label={'Radio Button'}
          style={{
            width: '100%',
          }}
        />
        <Divider type="h" />
        <BaseText title="Select Example" />
        <Select
          placeholder="Test Select"
          suffix={'icon_arrowdownbold'}
          preffix={'icon_interestlinear'}
          options={[]}
          asyncFn={async () => {
            return {
              result: { data: [{ label: 'title', id: 2 }], cursor: null },
            };
          }}
          modal={true}
          search={false}
          multiple={false}
          control={methodsForm?.control}
          snapPoints={[300]}
          name="categories"
          title="Select one or more"
        />
        <BaseText title="Select Example Multiple" />
        <Select
          placeholder="Test Select Multiple"
          suffix={'icon_arrowdownbold'}
          preffix={'icon_interestlinear'}
          options={[]}
          asyncFn={async () => {
            return {
              result: {
                data: [
                  { label: 'title', id: 2 },
                  { label: 'title', id: 3 },
                ],
                cursor: null,
              },
            };
          }}
          modal={true}
          search={false}
          multiple={true}
          control={methodsForm?.control}
          snapPoints={[300]}
          name="multiple"
          title="Select one or more"
        />
        <BaseText title="Select support a search" />
        <Select
          placeholder="Test Select search"
          suffix={'icon_arrowdownbold'}
          preffix={'icon_interestlinear'}
          options={[]}
          asyncFn={async () => {
            return {
              result: {
                data: [
                  { label: 'title', id: 2 },
                  { label: 'title', id: 3 },
                ],
                cursor: null,
              },
            };
          }}
          modal={true}
          search={true}
          multiple={true}
          control={methodsForm?.control}
          snapPoints={[500]}
          name="search"
          title="Select one or more"
        />
        <BaseText title="Example using service api" />
        <Select
          placeholder="Test Select"
          suffix={'icon_arrowdownbold'}
          preffix={'icon_interestlinear'}
          options={[]}
          asyncFn={getAnimes}
          modal={true}
          search={true}
          multiple={true}
          control={methodsForm?.control}
          snapPoints={[500]}
          factorSearch="q"
          name="search"
          title="Select one or more"
          defaultParams={[['limit', '10']]}
        />
        <Divider type="h" />
        <BaseText title="Form Input Example" />
        <FormInput
          name="name"
          label="Label here"
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
