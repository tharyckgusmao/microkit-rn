import type { FC } from 'react';
import React from 'react';
import { Dimensions, View } from 'react-native';
import type { PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  runOnJS,
  SharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { ReText } from 'react-native-redash';
import type { TThemeBase } from '../../../helper/theme';
import { makeStyle } from '../../../hooks/makeStyle';

const { width } = Dimensions.get('window');

export const useStyle = makeStyle((theme: TThemeBase) => {
  return theme?.components?.inputs?.range;
});

type TRange = {
  sliderWidth: number;
  min?: number;
  max: number;
  step?: number;
  range?: boolean;
  rotateAnimation?: boolean;
  showChev?: boolean;
  showLabel?: boolean;
  sharedValue?: SharedValue<number>;
  onValueChange?: (value: { min: number; max: number }) => void;
  formatter: (value: string) => string | number;
};

export const Range: FC<TRange> = ({
  sliderWidth = width,
  min = 0,
  max = 100,
  step = 1,
  range = false,
  rotateAnimation = false,
  showChev = true,
  showLabel = true,
  sharedValue,
  onValueChange = () => {},
  formatter = (value) => {
    'worklet';
    return value;
  },
}) => {
  const position = useSharedValue(0);
  const direction = useSharedValue(0);
  const position2 = useSharedValue(sliderWidth);
  const opacity = useSharedValue(0);
  const opacity2 = useSharedValue(0);
  const zIndex = useSharedValue(0);
  const zIndex2 = useSharedValue(0);
  const styles = useStyle();

  const gestureHandler =
    useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
      onStart: (_, ctx) => {
        ctx.startX = position.value;
        opacity.value = withTiming(1, { duration: 200 });
      },

      onActive: (e, ctx) => {
        if (rotateAnimation) {
          direction.value = withTiming(position.value > ctx.startX ? 1 : -1, {
            duration: Math.max(200, (e.velocityY / 10) * 100),
          });
        }

        if (ctx.startX + e.translationX < 0) {
          position.value = 0;
        } else if (ctx.startX + e.translationX > position2.value) {
          position.value = position2.value;
          zIndex.value = 1;
          zIndex2.value = 0;
        } else {
          position.value = ctx.startX + e.translationX;
        }
      },
      onEnd: () => {
        if (rotateAnimation) {
          direction.value = withSpring(0);
        }

        opacity.value = withTiming(0, { duration: 200 });
        if (onValueChange) {
          runOnJS(onValueChange)({
            min:
              min +
              Math.floor(
                position.value / (sliderWidth / ((max - min) / step))
              ) *
                step,
            max:
              min +
              Math.floor(
                position2.value / (sliderWidth / ((max - min) / step))
              ) *
                step,
          });
        }
      },
    });

  const gestureHandler2 = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = position2.value;
      opacity2.value = withTiming(1, { duration: 200 });
    },
    onActive: (e, ctx) => {
      if (rotateAnimation) {
        direction.value = withTiming(position2.value > ctx.startX ? 1 : -1, {
          duration: Math.max(200, (e.velocityY / 10) * 100),
        });
      }

      if (ctx.startX + e.translationX > sliderWidth) {
        position2.value = sliderWidth;
      } else if (ctx.startX + e.translationX < position.value) {
        position2.value = position.value;
        zIndex.value = 0;
        zIndex2.value = 1;
      } else {
        position2.value = ctx.startX + e.translationX;
      }
    },
    onEnd: () => {
      if (rotateAnimation) {
        direction.value = withSpring(0);
      }
      opacity2.value = withTiming(0, { duration: 200 });
      if (onValueChange) {
        runOnJS(onValueChange)({
          min:
            min +
            Math.floor(position.value / (sliderWidth / ((max - min) / step))) *
              step,
          max:
            min +
            Math.floor(position2.value / (sliderWidth / ((max - min) / step))) *
              step,
        });
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: position.value }],
    zIndex: zIndex.value,
  }));

  const animatedStyle2 = useAnimatedStyle(() => ({
    transform: [{ translateX: position2.value }],
    zIndex: zIndex2.value,
  }));

  const opacityStyle = useAnimatedStyle(() => {
    let rotate = interpolate(direction.value, [-1, 0, 1], [5, 0, -5]);
    let translateX = interpolate(direction.value, [-1, 0, 1], [2, 0, -2]);
    let scale = interpolate(direction.value, [-1, 0, 1], [1.1, 1, 1.1]);
    return {
      opacity: opacity.value,
      transform: [
        {
          rotateZ: `${rotate}deg`,
        },
        {
          scale: scale,
        },
        {
          translateX,
        },
      ],
    };
  }, []);

  const opacityStyle2 = useAnimatedStyle(() => {
    let rotate = interpolate(direction.value, [-1, 0, 1], [5, 0, -5]);
    let translateX = interpolate(direction.value, [-1, 0, 1], [2, 0, -2]);

    let scale = interpolate(direction.value, [-1, 0, 1], [1.1, 1, 1.1]);
    return {
      opacity: opacity2.value,
      transform: [
        {
          rotateZ: `${rotate}deg`,
        },
        {
          scale: scale,
        },
        {
          translateX,
        },
      ],
    };
  }, []);
  const sliderStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: position.value }],
    width: Math.max(
      0,
      Math.min(position2.value - position.value, position2.value)
    ),
  }));

  const minLabelText = useDerivedValue(() => {
    return formatter(
      `${
        min +
        Math.floor(position.value / (sliderWidth / ((max - min) / step))) * step
      }`
    );
  });
  const maxLabelText = useDerivedValue(() => {
    let value =
      min +
      Math.floor(position2.value / (sliderWidth / ((max - min) / step))) * step;
    if (sharedValue) {
      sharedValue.value = value;
    }
    return formatter(`${value}`);
  });
  return (
    <View style={[styles?.sliderContainer, { width: sliderWidth }]}>
      <View style={[styles?.sliderBack, { width: sliderWidth }]} />
      <Animated.View style={[sliderStyle, styles?.sliderFront]} />
      {range && (
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={[animatedStyle, styles?.thumb]}>
            {showLabel &&
            <Animated.View style={[opacityStyle, styles?.label]}>
              <ReText text={minLabelText || '0'} style={styles?.labelText} />
              {showChev && <View style={styles?.chev} />}
            </Animated.View>
            }
          </Animated.View>
        </PanGestureHandler>
      )}
      <PanGestureHandler onGestureEvent={gestureHandler2}>
        <Animated.View style={[animatedStyle2, styles?.thumb]}>
          {showLabel &&
          <Animated.View style={[opacityStyle2, styles?.label]}>
            <ReText text={maxLabelText || '0'} style={styles?.labelText} />
            {showChev && <View style={styles?.chev} />}
          </Animated.View>
          }
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default Range;
