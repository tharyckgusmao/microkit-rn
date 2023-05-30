import React, { FC, memo, useEffect, useMemo } from 'react';
import { Dimensions, StyleSheet, View, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  FadeIn,
  FadeOut,
  SharedValue,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

const LinearGradientAnimated = Animated.createAnimatedComponent(LinearGradient);

const widthScreen = Dimensions.get('screen').width;
type element = {
  width: number;
  height: number;
  borderRadius: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
  styleCtn?: ViewStyle;
};
type TSkeleton = {
  elements?:
    | Array<element>
    | Array<{
        children: Array<element>;
        styleCtn?: ViewStyle;
      }>;
  style?: ViewStyle;
  loading: boolean;
  delay?: number;
  colors?: [string, string, string, string];
};

const ElementRender = ({
  style,
  width = widthScreen,
  progress,
  colors,
}: {
  style?: ViewStyle;
  width: number;
  progress: SharedValue<number>;
  colors: [string, string, string, string];
}) => {
  const translateX = useAnimatedStyle(() => {
    const xInterpolate = interpolate(
      progress.value,
      [0, 1],
      [-width * 2, width * 2]
    );

    return {
      transform: [
        {
          translateX: xInterpolate,
        },
      ],
    };
  });

  return (
    <View
      style={{
        backgroundColor: '#dedfde',
        borderColor: '#dedfde',

        overflow: 'hidden',
        flexDirection: 'column',
        ...style,
      }}
    >
      <LinearGradientAnimated
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={colors}
        style={[{ ...StyleSheet.absoluteFillObject }, translateX]}
      />
    </View>
  );
};

const Skeleton: FC<TSkeleton> = ({
  elements = [],
  style,
  loading,
  delay = 0,
  colors = ['#dedfde', '#ededed', '#ededed', '#dedfde'],
}) => {
  const progress = useSharedValue(0);
  useEffect(() => {
    if (loading) {
      progress.value = withSequence(
        withTiming(0, { duration: 0 }),
        withRepeat(withTiming(1, { duration: 1800 }), -1, false)
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  const items = useMemo(() => {
    return elements.map((e, k) => {
      const itemReturn = !e?.children ? (
        <ElementRender
          key={k}
          style={e}
          width={e.width}
          progress={progress}
          colors={colors}
        />
      ) : (
        <View
          style={{
            flexDirection: 'row',
            ...e.styleCtn,
          }}
        >
          {e?.children?.map((e, kk) => {
            return (
              <ElementRender
                key={`${k}_${kk}`}
                style={e}
                width={e.width}
                progress={progress}
                colors={colors}
              />
            );
          })}
        </View>
      );

      return itemReturn;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elements]);

  if (!loading) {
    return null;
  }
  return (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOut.delay(delay)}
      style={[{ flexDirection: 'column', ...style }]}
      pointerEvents={loading ? 'auto' : 'none'}
    >
      {items}
    </Animated.View>
  );
};
const compareEquals = (prop: any, next: any) => prop.loading === next.loading;

export default memo(Skeleton, compareEquals);
