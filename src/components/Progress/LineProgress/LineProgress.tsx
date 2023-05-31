import { FC, memo } from 'react';
import React, { ColorValue, ViewStyle } from 'react-native';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated';
import { ReText } from 'react-native-redash';
import Box from '../../../components/BaseKit/Box/Box';
import type { TThemeBase } from '../../../helper/theme';
import { makeStyle } from '../../../hooks/makeStyle';
import { colorsDefault } from '../../../helper/colors';

type ILineProgress = {
  titles?: Array<string> | null;
  color?: ColorValue | null;
  max: number;
  active: SharedValue<number>;
  style?: ViewStyle;
  width?: number;
};
export const useStyle = makeStyle((theme: TThemeBase) => {
  return theme?.components?.progress.line;
});

export const LineProgress: FC<ILineProgress> = ({
  titles = [],
  color = colorsDefault['--color-base_eerieblack'],
  max,
  active,
  style,
  width = 0,
}) => {
  const styles = useStyle();

  const xDerived = useDerivedValue(() => {
    return withSpring(Math.min((active.value + 1) * (width / max) - width, 0), {
      damping: 200,
      stiffness: 200,
    });
  }, [active]);
  const getTitle = useDerivedValue(() => {
    const title = titles?.[active.value] ?? '';
    return `${active.value + 1}/${max}: ${title}`;
  }, [active]);

  const xStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: xDerived.value }],
    };
  });
  return (
    <Box column flex={0} style={styles?.lineprogressCtn}>
      {titles && titles?.length > 0 && (
        <ReText text={getTitle} style={styles?.title} />
      )}
      <Box style={{ ...style, ...styles?.lineCtn }}>
        <Animated.View
          style={[
            styles?.line,
            { backgroundColor: color as ColorValue },
            xStyle,
          ]}
        />
      </Box>
    </Box>
  );
};

export default memo(LineProgress);
