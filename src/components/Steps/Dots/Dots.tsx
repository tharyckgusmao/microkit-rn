import React, { useEffect, type FC, useMemo } from 'react';
import { View, type ViewStyle } from 'react-native';
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Box from '../../../components/BaseKit/Box/Box';
import type { TThemeBase } from '../../../helper/theme';
import { range } from '../../../helper/utils';
import { makeStyle } from '../../../hooks/makeStyle';

type IDots = {
  length: number;
  active: SharedValue<number>;
  style?: ViewStyle;
  duration?: number;
  padding?: number;
  size?: number;
};

export const useStyle = makeStyle((theme: TThemeBase) => {
  return theme?.components?.steps?.dots;
});

export const Dots: FC<IDots> = ({
  length = 1,
  active,
  style,
  duration = 500,
  padding = 10,
  size = 8,
}) => {
  const styles = useStyle();

  const currentInner = useSharedValue(-1);
  const interpolateValues = useSharedValue({
    entry: new Array(length).fill(0),
    outputX: new Array(length).fill(0),
    opacity: new Array(length).fill(1),
  });
  const progress = useDerivedValue(() => {
    return withTiming(
      active.value,
      {
        duration: duration,
      },
      (finished) => {
        if (finished) {
          currentInner.value = active.value;
        }
      }
    );
  }, [active]);
  useEffect(() => {
    let entry = [-1, ...range(0, length - 1, 0.5)];
    let opacityOutput = entry.map((e) => {
      if (e > -1) {
        if (e % 1 !== 0) {
          return 0;
        } else {
          return 1;
        }
      } else {
        return 0;
      }
    });
    interpolateValues.value = {
      entry: entry,
      outputX: entry.map((e) => {
        if (e > -1) {
          if (e % 1 !== 0) {
            return e > 0 ? (e - 1) * size + padding * e - 1 : 0;
          } else {
            return e * size + padding * e;
          }
        } else {
          return 0;
        }
      }),
      opacity: opacityOutput,
    };
  }, []);

  const stylesAnimated = useAnimatedStyle(() => {
    let interpolateEntry = interpolateValues.value.entry;
    let interpolateOutputX = interpolateValues.value.outputX;
    let interpolateOutputOpacity = interpolateValues.value.opacity;

    const opacity = interpolate(
      progress.value,
      interpolateEntry,
      interpolateOutputOpacity,
      Extrapolate.CLAMP
    );
    const interpolateX = interpolate(
      progress.value,
      interpolateEntry,
      interpolateOutputX,
      Extrapolate.CLAMP
    );

    return {
      opacity: opacity,
      transform: [
        {
          translateX: interpolateX,
        },
        {
          scale: opacity,
        },
      ],
    };
  }, [progress, currentInner]);

  const DotItems = useMemo(() => {
    return new Array(length).fill(0).map((e, k) => {
      return (
        <View
          key={k}
          style={{
            ...styles?.dot,
            ...{
              marginLeft: k === 0 ? 0 : padding,
            },
          }}
        />
      );
    });
  }, [length]);

  return (
    <Box row style={{ ...style }} aCenter jCenter>
      <Box row>
        {DotItems}
        <Animated.View style={[styles?.dotStepActive, stylesAnimated]} />
      </Box>
    </Box>
  );
};

export default Dots;
