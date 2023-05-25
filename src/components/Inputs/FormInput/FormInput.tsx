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
type IFormInput = {
  label?: string;
  name: string;
  placeholder: string;
  type?: KeyboardTypeOptions | 'select' | 'password';
  mask?: string;
  preffix?: ReactNode | string;
  options?: { value: string | number; label: string }[];
  asyncFn?: Awaited<Promise<any>> | null;
  modal?: boolean;
  search?: boolean;
  disabled?: boolean;
  maxCharLimit?: number;
  minHeight?: number;
  spaccingBottom?: number;
  numberOfLines?: number;
  title?: string;
  styleInput?: TextStyle;
  inputProps?: TextInputProps;
  style?: ViewStyle;

  control?: Control<any>;
  pressEnterBlur?: boolean;
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
    </Box>
  );
};

export default FormInput;
