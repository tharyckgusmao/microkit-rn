import {
  Canvas,
  DataSourceParam,
  RoundedRect,
  Text,
  useFont,
  useSharedValueEffect,
  useValue,
  rrect,
  rect,
  Group,
} from '@shopify/react-native-skia';
import { FC, memo } from 'react';
import React from 'react-native';
import {
  SharedValue,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { colorsDefault } from '../../../helper/colors';

type ILineProgress = {
  titles?: Array<string> | null;
  max: number;
  width: number;
  active: SharedValue<number>;
  fontPath: DataSourceParam | null;
  colors?: [string, string];
  fontSize?: number;
  height?: number;
  borderRadius?: number;
  lineHeight?: number;
};

export const LineProgress: FC<ILineProgress> = ({
  titles = [],
  max,
  active,
  width,
  fontPath,
  colors = [
    colorsDefault['--color-base_platinum'],
    colorsDefault['--color-base_eerieblack'],
  ],
  fontSize = 14,
  height = 24,
  lineHeight = 2,
  borderRadius = 20,
}) => {
  const x = useValue(0);
  const title = useValue('');
  const progress = useSharedValue(0);
  useDerivedValue(() => {
    progress.value = withSpring(
      Math.min((active.value + 1) * (width / max) - width, 0),
      {
        damping: 200,
        stiffness: 200,
      }
    );
  }, [active]);

  useSharedValueEffect(() => {
    title.current = `${active.value + 1}/${max}: ${
      titles?.[active.value] ?? ''
    }`;
  }, active);
  useSharedValueEffect(() => {
    x.current = progress.value;
  }, progress);

  const font = useFont(fontPath, fontSize);
  if (!font) {
    return null;
  }
  const roundedRect = rrect(
    rect(0, 0, width, lineHeight),
    borderRadius,
    borderRadius
  );
  return (
    <Canvas style={{ width: width, height: fontSize + height }}>
      <Text text={title} y={fontSize} x={0} font={font} color={colors[1]} />
      <RoundedRect
        x={0}
        y={fontSize + 6}
        width={width}
        height={lineHeight}
        r={borderRadius}
        color={colors[0]}
      />
      <Group
        clip={roundedRect}
        transform={[
          {
            translateY: fontSize + 6,
          },
        ]}
      >
        <RoundedRect
          width={width}
          height={lineHeight}
          r={borderRadius}
          color={colors[1]}
          x={x}
          y={0}
        />
      </Group>
    </Canvas>
  );
};

export default memo(LineProgress);
