import React, { FC } from 'react';
import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated';
import BaseText from '../../BaseKit/BaseText/BaseText';
import type { ViewStyle } from 'react-native';
import type { TextStyle } from 'react-native';

type TErrorLabel = {
  message?: string;
  styles?: {
    errorCtn?: ViewStyle;
    errorLabel?: TextStyle;
  };
};

const ErrorLabel: FC<TErrorLabel> = ({ message, styles }) => {
  if (!message) {
    return null;
  }
  return (
    <Animated.View
      entering={FadeInUp}
      exiting={FadeOutUp}
      style={styles?.errorCtn}
    >
      <BaseText style={styles?.errorLabel} title={message} numberOfLines={1} />
    </Animated.View>
  );
};

export default ErrorLabel;

ErrorLabel.displayName = 'Input.ErrorLabel';
