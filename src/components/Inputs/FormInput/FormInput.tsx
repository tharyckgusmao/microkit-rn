import type { ChangeEvent, FC, ReactNode } from 'react';
import type { Control } from 'react-hook-form/dist/types';
import type {
  KeyboardTypeOptions,
  TextInputProps,
  TextStyle,
  ViewStyle,
} from 'react-native';
import Box from '../../BaseKit/Box/Box';
import Input from '../Input/Input';
import Label from '../Label/Label';
import React from 'react';
import Select from '../Select/Select/Select';
type IFormInput = {
  label?: string;
  name: string;
  placeholder: string;
  type?: KeyboardTypeOptions | 'select' | 'password';
  mask?: string;
  preffix?: ReactNode | string;
  suffix?: ReactNode | string;
  options?: { value: string | number; label: string }[];
  asyncFn?: Awaited<Promise<any>> | null;
  modal?: boolean;
  disabled?: boolean;
  maxCharLimit?: number;
  minHeight?: number;
  spaccingBottom?: number;
  numberOfLines?: number;
  title?: string;
  styleInput?: TextStyle;
  inputProps?: TextInputProps;
  style?: ViewStyle;
  snapPoints?: Array<number>;
  control?: Control<any>;
  pressEnterBlur?: boolean;
  search?: boolean;
  multiple?: boolean;
  onChange?: (e: any | string | ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  handlePressEnter?: () => void;
};

export const FormInput: FC<IFormInput> = ({
  label,
  name,
  placeholder,
  type = 'default',
  preffix,
  suffix,
  mask,
  options,
  asyncFn = null,
  disabled = false,
  pressEnterBlur,
  numberOfLines,
  maxCharLimit,
  styleInput,
  style,
  spaccingBottom = 30,
  control,
  inputProps,
  search,
  snapPoints,
  multiple,
  title,
  onFocus,
  onChange,
  handlePressEnter,
}) => {
  return (
    <Box
      column
      style={{
        marginBottom: spaccingBottom,
        gap: 6,
        ...style,
      }}
    >
      {!!label && <Label title={label} />}
      {!options && !asyncFn && (
        <Input
          placeholder={placeholder}
          name={name}
          type={type}
          preffix={preffix}
          mask={mask}
          disabled={disabled}
          onChange={(e) => onChange && onChange(e)}
          styleInput={styleInput}
          control={control}
          inputProps={inputProps}
          pressEnterBlur={pressEnterBlur}
          handlePressEnter={handlePressEnter}
          numberOfLines={numberOfLines}
          maxCharLimit={maxCharLimit}
          onFocus={onFocus}
        />
      )}
      {(options || asyncFn) && (
        <Select
          placeholder={placeholder}
          name={name}
          preffix={preffix}
          suffix={suffix}
          options={options}
          onChange={(e) => onChange && onChange(e)}
          modal={!!asyncFn}
          asyncFn={asyncFn}
          search={search}
          title={title}
          disabled={disabled}
          multiple={multiple}
          control={control}
          snapPoints={snapPoints}
        />
      )}
    </Box>
  );
};

export default FormInput;
