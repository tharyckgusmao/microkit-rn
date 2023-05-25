import {
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Control, useController } from 'react-hook-form';
import React, {
  KeyboardTypeOptions,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableHighlight,
  View,
  ViewStyle,
} from 'react-native';

import type { FormValues } from 'example/src/pages/Input/Input';
import IMask from 'imask';
import Animated, {
  FadeInUp,
  FadeOutUp,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import BaseText from '../../BaseKit/BaseText/BaseText';
import Box from '../../BaseKit/Box/Box';
import Icon from '../../BaseKit/Icon/Icon';
import type { IconsId } from '../../BaseKit/Icon/generated/icons';
import { masks } from './helpers';
import { useStyle } from './styles';
import ErrorLabel from '../ErrorLabel/ErrorLabel';

Animated.addWhitelistedNativeProps({ text: true });
//@ts-ignore
export const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

type TInput = {
  placeholder: string;
  mask?: string;
  name: string;
  value?: string | null;
  defaultValue?: string;
  type?: KeyboardTypeOptions | 'select' | 'password';
  min?: number;
  max?: number;
  numberOfLines?: number;
  maxCharLimit?: number;
  autofocus?: boolean;
  preffix?: ReactNode | IconsId | null | string;
  disabled?: boolean;
  autoComplete?: string;
  stylectn?: ViewStyle;
  styleInput?: TextStyle;
  inputProps?: TextInputProps;
  control?: Control<FormValues, any>;
  pressEnterBlur?: boolean;
  colorsInputAnimate?: [any, any, any];
  handleSubmit?: () => void;
  onChange?: (e: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  handlePressEnter?: (value?: string | null) => void;
};

type TSecureSuffix = {
  onClick: (type: KeyboardTypeOptions | 'select' | 'password') => void;
  type: KeyboardTypeOptions | 'select' | 'password';
  innerType: KeyboardTypeOptions | 'select' | 'password';
  style?: TextStyle;
  styleIcon: TextStyle;
};

export const SecureSuffix: FC<TSecureSuffix> = ({
  onClick,
  styleIcon,
  innerType,
  style,
  type,
}) => {
  if (type !== 'password') {
    return null;
  }
  return (
    <TouchableHighlight
      underlayColor="transparent"
      activeOpacity={0.8}
      style={style}
      onPress={() => {
        onClick(innerType === 'password' ? 'default' : 'password');
      }}
    >
      <View pointerEvents="none">
        {innerType === 'password' ? (
          <Icon size={12} style={styleIcon} name="icon_showbold" />
        ) : (
          <Icon size={12} style={styleIcon} name="icon_hidebold" />
        )}
      </View>
    </TouchableHighlight>
  );
};

type TPreffix = {
  preffix?: string | ReactNode;
  hasValue: boolean;
  style?: ViewStyle;
  styleIcon: TextStyle;
};

export const Preffix: FC<TPreffix> = ({
  preffix,
  style,
  styleIcon,
  hasValue,
}) => {
  if (!preffix) {
    return null;
  }
  return (
    <Box style={style}>
      {typeof preffix === 'string' ? (
        <Icon
          size={12}
          style={styleIcon}
          name={
            hasValue
              ? (preffix.replace('linear', 'bold') as IconsId)
              : (preffix as IconsId)
          }
        />
      ) : (
        preffix
      )}
    </Box>
  );
};
Preffix.displayName = 'Input.Preffix';

type TCharCount = {
  maxCharLimit?: number;
  charCount: number;
  style?: TextStyle;
};

export const RenderCharCount: FC<TCharCount> = ({
  charCount,
  maxCharLimit,
  style,
}) => {
  let count = useMemo(() => {
    if (!maxCharLimit) {
      return null;
    }

    return <BaseText style={style}> {`${charCount}/${maxCharLimit}`}</BaseText>;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charCount, maxCharLimit]);
  if (maxCharLimit) {
    return null;
  }

  return count;
};
Preffix.displayName = 'Input.CharCount';

export const Input: FC<TInput> = ({
  placeholder,
  name,
  defaultValue,
  value,
  mask = null,
  type = 'default',

  numberOfLines = 1,
  maxCharLimit,
  autofocus = false,
  pressEnterBlur = false,
  preffix = null,
  disabled,
  styleInput,
  control,
  inputProps,
  colorsInputAnimate = [
    'rgba(243,88,67,1)',
    'rgba(235, 235, 235, 1)',
    'rgba(20, 20, 20, 1)',
  ],
  handlePressEnter,
  onChange,
  onBlur,
  onFocus,
}) => {
  const styles = useStyle();
  const [charCount, setCharCount] = useState<number>(0);

  const [innerType, setInnerType] = useState(type);
  const [focused, setFocused] = useState(false);
  const maskPattern = mask ? masks(mask) : null;

  const {
    field,
    fieldState: { error },
  } = control
    ? // eslint-disable-next-line react-hooks/rules-of-hooks
      useController({
        control,
        defaultValue,
        name,
      })
    : {
        field: {
          value: null,
          onChange: onChange,
          ref: undefined,
        },
        fieldState: { error: false },
      };

  useEffect(() => {
    if (field?.ref && autofocus) {
      // Hack focus bug
      //@ts-ignore
      if (field?.ref?.current) {
        setTimeout(() => {
          //@ts-ignore
          field?.ref?.current?.focus();
        }, 600);
      }
    }
  }, [autofocus, field.ref, mask]);

  const valueShared = useDerivedValue(() => {
    return withTiming(error ? -1 : field.value || focused ? 1 : 0);
  }, [field.value, error, focused]);

  const styleInputAnimated = useAnimatedStyle(() => {
    const color = interpolateColor(
      valueShared.value,
      [-1, 0, 1],
      colorsInputAnimate
    );
    return {
      borderColor: color,
    };
  }, [valueShared]);
  const getStyles = useMemo(() => {
    return StyleSheet.flatten({
      ...styles?.ctn,
      ...(!!preffix && styles?.preffixCtn),
      ...(focused && styles?.typing),
      ...(focused && !field.value && styles?.empty),
      ...((control ? field.value : value) && !error?.message && styles?.filled),
      ...(disabled && styles?.disabled),
      ...(error && styles?.error),
      ...styleInput,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [field.value, value, error?.message]);

  const getStylesIcons: TextStyle = useMemo(() => {
    return {
      ...styles?.icon,
      ...(focused && styles?.iconFilled),
      ...((control ? field.value : value) &&
        !error?.message &&
        styles?.iconFilled),
      ...(error && styles?.iconError),
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [field.value, value, error?.message]);
  const getStylesSecureSuffix: TextStyle = useMemo(() => {
    return {
      ...styles?.icon,
      ...(error && styles?.iconError),
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [field.value, error?.message]);

  const _onChangeText = useCallback((e: string) => {
    let value = e;
    if (maskPattern) {
      const maskResolve = IMask.createMask({
        mask: maskPattern,
      });
      value = maskResolve.resolve(value);
    }
    if (maxCharLimit) {
      setCharCount(value.length);
      if (value.length <= maxCharLimit) {
        if (onChange) {
          onChange(value);
        }
        if (field?.onChange) {
          field?.onChange(value);
        }
      }
    } else {
      if (onChange) {
        onChange(value);
      }
      if (field?.onChange) {
        field?.onChange(value);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <AnimatedTextInput
        style={[getStyles, styleInputAnimated]}
        {...(control ? { value: field.value } : {})}
        defaultValue={defaultValue}
        onChangeText={_onChangeText}
        onFocus={() => {
          setFocused(true);
          if (onFocus) {
            onFocus();
          }
        }}
        onBlur={() => {
          setFocused(false);

          if (onBlur) {
            onBlur();
          }
        }}
        ref={(el: any) => {
          if (control) {
            if (field.ref) {
              field?.ref(el);
            }
          }
        }}
        placeholder={placeholder}
        numberOfLines={numberOfLines ?? 1}
        underlineColorAndroid="transparent"
        secureTextEntry={innerType === 'password'}
        editable={!disabled}
        keyboardType={
          type === 'password' ? 'default' : (type as KeyboardTypeOptions)
        }
        placeholderTextColor={styles?.placeholderColor?.color}
        onSubmitEditing={(e) => {
          if (pressEnterBlur) {
            if (handlePressEnter) {
              const target = e?.nativeEvent;
              handlePressEnter(target.text);
            }
          }
        }}
        {...inputProps}
      />
      <RenderCharCount
        charCount={charCount}
        maxCharLimit={maxCharLimit}
        style={styles.charCount}
      />
      <Preffix
        preffix={preffix}
        hasValue={field.value || error?.message}
        style={styles?.preffix}
        styleIcon={getStylesIcons}
      />
      <SecureSuffix
        type={type}
        innerType={innerType}
        style={styles?.suffix}
        styleIcon={getStylesSecureSuffix}
        onClick={setInnerType}
      />

      <ErrorLabel
        styles={{ errorCtn: styles?.errorCtn, errorLabel: styles?.errorLabel }}
        message={error?.message}
      />
    </View>
  );
};

export default Input;
