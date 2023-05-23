/* eslint-disable react-hooks/rules-of-hooks */
import {BaseText, Box} from '@/components/BaseKit';
import Icon, {IconsId} from '@/components/BaseKit/Icon/Icon';
import theme from '@/theme';
import {ReactNode, useCallback, useEffect, useMemo, useState} from 'react';
import {Control, FieldValues, useController} from 'react-hook-form';
import {
  KeyboardTypeOptions,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableHighlight,
  View,
  ViewStyle
} from 'react-native';
import Animated, {
  FadeInUp,
  FadeOutUp,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming
} from 'react-native-reanimated';

import IMask from 'imask';
import masks from './helpers';
import {styleError, styles} from './styles';

export const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);
type TInputBasic = {
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
  style?: ViewStyle;
  autofocus?: boolean;
  preffix?: ReactNode | null | string;
  disabled?: boolean;
  autoComplete?: string;
  stylectn?: ViewStyle;
  styleInput?: TextStyle;
  inputProps?: TextInputProps;
  control?: Control<FieldValues, any>;
  pressEnterBlur?: boolean;
  handleSubmit?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement> | string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  handlePressEnter?: (value?: string | null) => void;
};

export const InputBasic: IComponent<TInputBasic> = ({
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
  handlePressEnter,
  onChange,
  onBlur,
  onFocus
}) => {
  const [charCount, setCharCount] = useState<number>(0);

  const [innerType, setInnerType] = useState(type);
  const [focused, setFocused] = useState(false);
  const {
    field,
    fieldState: {isTouched, error}
  } = control
    ? useController({
        control,
        defaultValue,
        name
      })
    : {
        field: {
          value: null,
          onChange: onChange
        },
        fieldState: {isTouched: true, error: false}
      };

  useEffect(() => {
    if (field.ref && autofocus) {
      // Hack focus bug
      if (field.ref?.current) {
        setTimeout(() => {
          field.ref?.current?.focus();
        }, 600);
      }
    }
  }, [autofocus, field.ref, mask]);

  const maskPattern = mask ? masks(mask) : null;
  const valueShared = useDerivedValue(() => {
    return withTiming(error ? -1 : field.value || focused ? 1 : 0);
  }, [field.value, error, focused]);
  const styleInputAnimated = useAnimatedStyle(() => {
    const color = interpolateColor(
      valueShared.value,
      [-1, 0, 1],
      ['rgb(243,88,67)', 'rgba(235, 235, 235, 1)', 'rgba(20, 20, 20, 1)']
    );
    return {
      borderColor: color
    };
  }, [valueShared]);

  const getStyles = useMemo(() => {
    return StyleSheet.flatten({
      ...styles.input,
      ...(!!preffix && styles.preffixCtn),
      ...(focused && styles.typing),
      ...(focused && !field.value && styles.empty),
      ...((control ? field.value : value) && !error?.message && styles.filled),
      ...(disabled && styles.disabled),
      ...(error && styles.error),
      ...styleInput
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [field.value, value, error?.message]);

  const getStylesIcons: TextStyle = useMemo(() => {
    return {
      ...styles.icon,
      ...(focused && styles.iconFilled),
      ...((control ? field.value : value) &&
        !error?.message &&
        styles.iconFilled),
      ...(error && styles.iconError)
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [field.value, value, error?.message]);
  const getStylesIconPassword: TextStyle = useMemo(() => {
    return {
      ...styles.icon,
      ...(error && styles.iconError)
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [field.value, error?.message]);

  const _onChangeText = useCallback((e: string) => {
    let value = e;
    if (maskPattern) {
      const maskResolve = IMask.createMask({
        mask: maskPattern
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
  }, []);
  const renderCharCount = useMemo(() => {
    if (!maxCharLimit) {
      return null;
    }

    return (
      <BaseText style={styles.charCount}>
        {' '}
        {`${charCount}/${maxCharLimit}`}
      </BaseText>
    );
  }, [charCount, maxCharLimit]);

  return (
    <View>
      <AnimatedTextInput
        style={[getStyles, styleInputAnimated]}
        {...(control ? {value: field.value} : {})}
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
        ref={elm => {
          if (control) {
            field.ref(elm);
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
        placeholderTextColor={theme.colors['--color-silver_chalice']}
        onSubmitEditing={e => {
          if (pressEnterBlur) {
            if (handlePressEnter) {
              const target = e?.nativeEvent;
              handlePressEnter(target.text);
            }
          }
        }}
        {...inputProps}
      />
      {!!maxCharLimit && renderCharCount}

      {preffix ? (
        <Box style={styles.preffix}>
          {typeof preffix === 'string' ? (
            <Icon
              size={12}
              style={getStylesIcons}
              name={
                field.value || error?.message
                  ? (preffix.replace('linear', 'bold') as IconsId)
                  : (preffix as IconsId)
              }
            />
          ) : (
            preffix
          )}
        </Box>
      ) : null}
      {type === 'password' && (
        <TouchableHighlight
          underlayColor="transparent"
          activeOpacity={0.8}
          style={styles.passwordCtn}
          onPress={() => {
            setInnerType(innerType === 'password' ? 'default' : 'password');
          }}>
          <View pointerEvents="none">
            {innerType === 'password' ? (
              <Icon
                size={12}
                style={getStylesIconPassword}
                name="icon_showbold"
              />
            ) : (
              <Icon
                size={12}
                style={getStylesIconPassword}
                name="icon_hidebold"
              />
            )}
          </View>
        </TouchableHighlight>
      )}
      {error?.message && (
        <Animated.View
          entering={FadeInUp}
          exiting={FadeOutUp}
          style={styleError.errorCtn}>
          <BaseText
            style={styleError.errorLabel}
            title={error?.message}
            numberOfLines={1}
          />
        </Animated.View>
      )}
    </View>
  );
};

export default InputBasic;
