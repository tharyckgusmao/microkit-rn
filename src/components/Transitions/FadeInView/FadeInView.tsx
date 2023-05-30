import { useFocusEffect } from '@react-navigation/native';
import React, { FC, ReactNode, memo } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withDelay,
} from 'react-native-reanimated';

const FadeInView: FC<{ children: ReactNode; delay?: number }> = ({
  children,
  delay = 0,
}) => {
  const fadeAnim = useSharedValue(0);

  useFocusEffect(() => {
    fadeAnim.value = withDelay(delay, withTiming(1, { duration: 250 }));
    return () => {
      fadeAnim.value = withTiming(0, { duration: 250 });
    };
  });

  const stylesOpacity = useAnimatedStyle(() => {
    return {
      opacity: fadeAnim.value,
    };
  }, []);

  return (
    <Animated.View
      style={[
        {
          flex: 1,
        },
        stylesOpacity,
      ]}
    >
      {children}
    </Animated.View>
  );
};

export default memo(FadeInView);
