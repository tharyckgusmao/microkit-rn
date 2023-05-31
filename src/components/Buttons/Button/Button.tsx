import React, { FC, useMemo } from 'react';
import {
  ActivityIndicator,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import BaseText from '../../BaseKit/BaseText/BaseText';
import Box from '../../BaseKit/Box/Box';
import { makeStyle } from '../../../hooks/makeStyle';
import type { TThemeBase } from '../../../helper/theme';

type IButton = {
  onPress?: () => void;
  type?: 'default' | 'outline' | 'filledBlack' | '' | null;
  disabled?: boolean;
  title?: string | React.ReactNode;
  preffix?: JSX.Element;
  suffix?: JSX.Element;
  style?: ViewStyle;
  stylesCtn?: ViewStyle;
  styleTitle?: TextStyle;
  stylesPreffix?: TextStyle;
  children?: React.ReactNode;
  loading?: boolean;
  loadingVariant?: 'center' | 'left' | 'right';
};

export const useStyle = makeStyle((theme: TThemeBase) => {
  return theme?.components?.buttons?.button;
});

const Button: FC<IButton> = ({
  onPress,
  style,
  title,
  children,
  type = null,
  disabled,
  preffix,
  suffix,
  loading = false,
  loadingVariant = 'right',
  styleTitle,
  stylesCtn,
  stylesPreffix,
}) => {
  const styles = useStyle();

  const onPressHandler = () => {
    if (onPress && !disabled && !loading) {
      onPress();
    }
  };

  const loadingSpinner = useMemo(() => {
    if (!loading) {
      return null;
    }
    return (
      <Box
        style={{ ...styles?.spinner, ...styles?.[`spinner${loadingVariant}`] }}
        flex={1}
        position="absolute"
        jCenter
        column
        aEnd
      >
        <ActivityIndicator size={'small'} color="#fff" />
      </Box>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <TouchableOpacity
      style={{ ...styles?.ctn, ...stylesCtn }}
      activeOpacity={0.9}
      onPress={onPressHandler}
      disabled={disabled || loading}
    >
      <View
        pointerEvents="none"
        style={{
          ...styles?.button,
          ...(type && styles?.[type]),
          ...(disabled && styles?.disabled),
          ...style,
        }}
      >
        {preffix && (
          <Box
            style={{ ...styles?.preffixCtn, ...stylesPreffix }}
            aCenter
            row
            jCenter
          >
            <BaseText style={styles?.preffix}>{preffix}</BaseText>
          </Box>
        )}
        {!!title && (
          <BaseText
            style={{
              ...styles?.title,
              ...(type && styles?.[`title${type}`]),
              ...styleTitle,
            }}
            title={title}
          />
        )}
        {!title && children}
        {loadingSpinner}
        {suffix && !loading && (
          <Box style={styles?.suffixCtn} aCenter row jCenter>
            <BaseText style={styles?.suffix}>{suffix}</BaseText>
          </Box>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
