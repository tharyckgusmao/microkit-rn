import merge from 'lodash.merge';
import React, { FC, useEffect, useRef, useState } from 'react';
import { Control, FieldValues, useController } from 'react-hook-form';
import { TextInput, TouchableOpacity } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import BaseText from '../../../components/BaseKit/BaseText/BaseText';
import Box from '../../../components/BaseKit/Box/Box';
import { colorsDefault } from '../../../helper/colors';
import type { TThemeBase } from '../../../helper/theme';
import { makeStyle } from '../../../hooks/makeStyle';
import ErrorLabel from '../ErrorLabel/ErrorLabel';
import { styleInputError } from '../Input/styles';
import type { FormValues } from 'example/src/pages/Input/Input';
type IInputOtp = {
  size?: number;
  name?: string;
  control: Control<FormValues, any>;
  colorsInputAnimate?: [any, any, any];
  onFocus?: () => void;
  onBlur?: () => void;
};

const FakeCursor: React.FC<{
  color?: string;
}> = ({ color = colorsDefault['--color-base_platinum'] }) => {
  const value = useSharedValue(0);

  useEffect(() => {
    value.value = withRepeat(withTiming(1), -1, true);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return { opacity: value.value };
  });

  return (
    <Animated.View
      style={[
        {
          width: 2,
          height: 22,
          backgroundColor: color,
        },
        animatedStyle,
      ]}
    />
  );
};

const Code = ({
  value,
  index,
  onFocus,
  isInputFocused,
  error,
  colorsInputAnimate = [
    'rgba(243,88,67,1)',
    'rgba(235, 235, 235, 1)',
    'rgba(20, 20, 20, 1)',
  ],
}: {
  value: string | null;
  index: number;
  onFocus: () => void;
  isInputFocused: boolean;
  error?: string;
  colorsInputAnimate?: [any, any, any];
}) => {
  const styles = useStyle();

  const valueShared = useDerivedValue(() => {
    return withTiming(
      error ? -1 : value?.[index] || value?.length >= index ? 1 : 0
    );
  }, [value, error, isInputFocused]);
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

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onFocus}>
      <Animated.View
        key={index}
        style={[
          {
            ...styles.input,
            ...(value?.[index] !== '' &&
              value?.[index] != null &&
              styles.typing),
          },
          styleInputAnimated,
        ]}
      >
        {value?.length > index && (
          <BaseText
            style={{
              ...styles.fakeText,
              color: error
                ? colorsDefault['--color-fire_opal']
                : colorsDefault['--color-base_eerieblack'],
            }}
          >
            {value?.[index]}
          </BaseText>
        )}
        {value?.length === index && isInputFocused && <FakeCursor />}
        {(value == null || value?.length < index) && (
          <BaseText style={styles.placeholder}>0</BaseText>
        )}
      </Animated.View>
    </TouchableOpacity>
  );
};
export const useStyle = makeStyle((theme: TThemeBase) => {
  return merge(styleInputError, theme?.components?.inputs?.otp);
});

export const InputOtp: FC<IInputOtp> = ({
  size = 5,
  name = 'token',
  control,
  colorsInputAnimate,
  onFocus,
  onBlur,
}) => {
  const styles = useStyle();

  const [value, setValue] = useState<string | null>(null);

  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    name,
  });
  const [isInputFocused, setInputFocused] = useState(false);
  const inputRef = useRef<TextInput>(null);
  const wrongShared = useSharedValue(0);
  const filterTextJustNumber = (text: string) => {
    let textNonNumber: string | null = text.replace(/\D/g, '');
    setValue(textNonNumber);
    if (textNonNumber === '') {
      textNonNumber = null;
    }
    field.onChange(textNonNumber);
  };

  // const clear = (focus?: boolean) => {
  //   field.onChange(null);
  //   setValue(null);
  //   if (focus) {
  //     inputRef.current?.focus();
  //   }
  //   clearErrors();
  // };
  useEffect(() => {
    if (error) {
      wrongShared.value = withSequence(
        withTiming(-10, { duration: 50 }),
        withRepeat(withTiming(10, { duration: 80 }), 3, true),
        withTiming(0, { duration: 50 })
      );
    }
  }, [error]);

  const wrongStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: wrongShared.value,
        },
      ],
    };
  });

  return (
    <Box flex={1} row style={styles.ctn} aCenter jCenter>
      <Animated.View style={[{ flexDirection: 'row' }, wrongStyle]}>
        {new Array(size).fill(0).map((e, k) => {
          return (
            <Code
              index={k}
              key={k}
              value={value}
              error={error?.message}
              isInputFocused={isInputFocused}
              onFocus={() => inputRef.current?.focus()}
              colorsInputAnimate={colorsInputAnimate}
            />
          );
        })}
      </Animated.View>
      <TextInput
        ref={inputRef}
        value={value ?? ''}
        onFocus={() => {
          if (onFocus) {
            onFocus();
          }
          setInputFocused(true);
        }}
        onBlur={() => {
          if (onBlur) {
            onBlur();
          }
          setInputFocused(false);
        }}
        onChangeText={(text) => filterTextJustNumber(text)}
        maxLength={size}
        style={{
          width: 0,
          height: 0,
        }}
        autoFocus={false}
        keyboardType="number-pad"
      />
      {error?.message && (
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

export default InputOtp;
