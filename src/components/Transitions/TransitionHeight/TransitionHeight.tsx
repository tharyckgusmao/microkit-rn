import { FC, memo, useEffect } from 'react';
import { ViewStyle } from 'react-native';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

type ITransitionHeight = {
  show: boolean;
  height?: number;
  children: JSX.Element;
  styles?: ViewStyle;
};

export const TransitionHeight: FC<ITransitionHeight> = ({
  show,
  height = 0,
  styles,
  children,
}) => {
  const progressPress = useSharedValue(0);
  useEffect(() => {
    if (show) {
      progressPress.value = withSpring(height);
    } else {
      progressPress.value = withTiming(0, { duration: 200 });
    }
  }, [show]);

  const heightAnimated = useAnimatedStyle(() => {
    return {
      height: progressPress.value,
    };
  });

  return (
    <Animated.View style={[heightAnimated, { overflow: 'hidden' }, styles]}>
      {children}
    </Animated.View>
  );
};

export default memo(TransitionHeight);
