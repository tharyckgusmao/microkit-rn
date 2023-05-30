import { Control, useController } from 'react-hook-form';
import React, { View, ViewStyle } from 'react-native';

import type { FormValues } from 'example/src/pages/Input/Input';
import type { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import BaseText from '../../../components/BaseKit/BaseText/BaseText';
import Box from '../../../components/BaseKit/Box/Box';
import Icon from '../../../components/BaseKit/Icon/Icon';
import { colorsDefault } from '../../../helper/colors';
import type { TThemeBase } from '../../../helper/theme';
import { makeStyle } from '../../../hooks/makeStyle';
import ErrorLabel from '../ErrorLabel/ErrorLabel';
type ICheckBox = {
  value?: string;
  title: string | JSX.Element;
  name: string;
  style?: ViewStyle;
  showError?: boolean;
  control?: Control<FormValues, any>;
  colors?: [string, string, string, string];
  onChange?: (status: boolean) => void;
};

export const useStyle = makeStyle((theme: TThemeBase) => {
  return theme?.components?.inputs?.checkbox;
});

export const CheckBox: FC<ICheckBox> = ({
  value,
  title,
  name,
  style,
  showError = false,
  control,
  colors = [
    colorsDefault['--color-fire_opal'],
    colorsDefault['--color-green_turquoise'],
    colorsDefault['--color-base_lightgray'],
    colorsDefault['--color-base_eerieblack'],
  ],
  onChange,
}) => {
  const styles = useStyle();
  const {
    field,
    fieldState: { isTouched, error },
  } = control
    ? useController({
        control,
        name,
      })
    : {
        field: {
          value: value,
          onChange: onChange,
        },
        fieldState: { isTouched: true, error: false },
      };
  return (
    <Box
      style={{ ...styles.checkBoxInput, ...style }}
      flex={1}
      aCenter
      jCenter
      column
    >
      <TouchableOpacity
        activeOpacity={0.9}
        hitSlop={{
          top: 10,
          left: 10,
          right: 10,
          bottom: 10,
        }}
        style={{
          zIndex: 2,
          flex: 1,
        }}
        onPress={() => {
          if (field?.onChange) {
            field?.onChange(!field.value);
          }
        }}
      >
        <Box row flex={1} aCenter jCenter>
          <View
            style={{
              ...styles.checkbox,
              borderColor: error
                ? colors[0]
                : field.value
                ? colors[1]
                : colors[2],
            }}
          >
            <Icon
              name="icon_checkbold"
              style={{
                color: error ? colors[0] : field.value ? colors[1] : colors[2],
              }}
            />
          </View>
          {title && (
            <BaseText
              style={{
                ...styles.title,
                color: error ? colors[1] : colors[3],
              }}
              title={title}
            />
          )}
        </Box>
      </TouchableOpacity>
      {showError && error?.message && (
        <ErrorLabel
          styles={{
            errorCtn: styles?.errorCtn,
            errorLabel: styles?.errorLabel,
          }}
          message={error?.message}
        />
      )}
    </Box>
  );
};

export default CheckBox;
