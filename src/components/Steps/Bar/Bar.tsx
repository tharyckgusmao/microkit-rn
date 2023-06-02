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
import type { TThemeBase } from '../../../helper/theme';
import { range } from '../../../helper/utils';
import { makeStyle } from '../../../hooks/makeStyle';
import Box from '../../../components/BaseKit/Box/Box';

type IBar = {
  length: number;
  active: SharedValue<number>;
  style?: ViewStyle;
  duration?: number;
  size?: number;
};

export const useStyle = makeStyle((theme: TThemeBase) => {
  return theme?.components?.steps?.bar;
});

export const Bar: FC<IBar> = ({
  length = 1,
  active,
  style,
  duration = 500,
  size = 14,
}) => {
  const styles = useStyle();

  const currentInner = useSharedValue(-1);
  const interpolateValues = useSharedValue({
    entry: new Array(length).fill(0),
    outputX: new Array(length).fill(0),
  });
  const progress = useDerivedValue(() => {
    return withTiming(
      active.value,
      {
        easing: Easing.elastic(0.5),
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
    let entry = [-1, ...range(0, length - 1, 1)];
    interpolateValues.value = {
      entry: entry,
      outputX: entry.map((e) => {
        if (e > -1) {
          return e * size;
        } else {
          return 0;
        }
      }),
    };
  }, []);

  const stylesAnimated = useAnimatedStyle(() => {
    let interpolateEntry = interpolateValues.value.entry;
    let interpolateOutputX = interpolateValues.value.outputX;

    const interpolateX = interpolate(
      progress.value,
      interpolateEntry,
      interpolateOutputX,
      Extrapolate.CLAMP
    );

    return {
      transform: [
        {
          translateX: interpolateX,
        },
      ],
    };
  }, [progress, currentInner]);

  const BarItems = useMemo(() => {
    return (
      <View
        style={{
          ...styles?.bar,
          ...{
            width: size * length,
          },
        }}
      />
    );
  }, [length]);

  return (
    <Box row style={{ ...style }} aCenter jCenter>
      <Box row>
        {BarItems}
        <Animated.View
          style={[
            styles?.stepActive,
            stylesAnimated,
            {
              width: size,
            },
          ]}
        />
      </Box>
    </Box>
  );
};

export default Bar;
