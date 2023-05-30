import React, { FC, useEffect } from 'react';
import Animated, {
  FadeIn,
  FadeOut,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import type { TThemeBase } from '../../../helper/theme';
import { makeStyle } from '../../../hooks/makeStyle';
type IDots = {
  show: boolean;
  mode?: 'jumping' | 'default';
};
export const useStyle = makeStyle((theme: TThemeBase) => {
  return theme?.components?.loaders.dot;
});

export const Dots: FC<IDots> = ({ show, mode = 'default' }) => {
  const progress = useSharedValue(0);

  const opacity1 = useDerivedValue(() =>
    interpolate(
      progress.value,
      [0, 0.25, 0.5, 0.75, 1],
      [0.5, 0.7, 1, 0.7, 0.5]
    )
  );
  const opacity2 = useDerivedValue(() =>
    interpolate(
      progress.value,
      [0, 0.25, 0.5, 0.75, 1],
      [0.7, 1, 0.7, 0.5, 0.7]
    )
  );
  const opacity3 = useDerivedValue(() =>
    interpolate(progress.value, [0, 0.25, 0.5, 0.75, 1], [1, 0.7, 0.5, 0.7, 1])
  );
  useEffect(() => {
    if (show) {
      progress.value = withRepeat(
        withTiming(1, {
          duration: 1200,
        }),
        -1,
        true
      );
    }
  }, [show]);

  const styleDot = useAnimatedStyle(() => {
    let translateY = 0;

    if (mode === 'jumping') {
      translateY = interpolate(opacity1.value, [0, 0.5, 1], [0, 5, -5]);
    }

    return {
      opacity: opacity1.value,
      transform: [{ translateY: translateY }],
    };
  });
  const styleDot2 = useAnimatedStyle(() => {
    let translateY = 0;

    if (mode === 'jumping') {
      translateY = interpolate(opacity1.value, [0, 0.5, 1], [0, -5, 5]);
    }
    return {
      opacity: opacity2.value,
      transform: [{ translateY: translateY }],
    };
  });
  const styleDot3 = useAnimatedStyle(() => {
    let translateY = 0;

    if (mode === 'jumping') {
      translateY = interpolate(opacity1.value, [0, 0.5, 1], [0, 5, -5]);
    }
    return {
      opacity: opacity3.value,
      transform: [{ translateY: translateY }],
    };
  });

  const styles = useStyle();

  if (!show) {
    return null;
  }

  return (
    <Animated.View entering={FadeIn} exiting={FadeOut} style={styles?.styleCtn}>
      <Animated.View style={[styles?.dot, styleDot]} />
      <Animated.View style={[styles?.dot, styleDot2]} />
      <Animated.View style={[styles?.dot, styleDot3]} />
    </Animated.View>
  );
};

export default Dots;
