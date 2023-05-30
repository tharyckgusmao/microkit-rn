import {
  Blur,
  BlurMask,
  Canvas,
  ColorMatrix,
  DataSourceParam,
  DisplacementMap,
  Group,
  Paint,
  Path,
  RoundedRect,
  Text,
  Turbulence,
  rect,
  rrect,
  useCanvasRef,
  useFont,
} from '@shopify/react-native-skia';
import type { FC } from 'react';
import { Platform } from 'react-native';
import { default as RNFS } from 'react-native-fs';
import React, { useCallback, useMemo } from 'react';
const path = RNFS.TemporaryDirectoryPath;

type IAvatar = {
  onGenerate?: (url: string) => void;
  letter?: string;
  width: number;
  height: number;
  mode: 'letter' | 'gradient';
  colors: [string, string] | [string, string, string];
  fontPath: DataSourceParam | null;
  borderRadius: number;
  fontSize: number;
};

export const Avatar: FC<IAvatar> = ({
  onGenerate,
  letter,
  width,
  height,
  mode = 'letter',
  borderRadius = 6,
  fontSize = 50,
  fontPath = '',
  colors = ['#d9d9d9', '#000'],
}) => {
  const ref = useCanvasRef();

  const font = useFont(fontPath, fontSize);
  const genAvatar = async () => {
    if (ref.current) {
      if (onGenerate) {
        const image = ref.current?.makeImageSnapshot();

        if (image) {
          const bytes = image.encodeToBase64();
          const platformPath = Platform.OS === 'ios' ? `${path}` : `${path}/`;

          const pathBase64 = `${platformPath}avatar.png`;

          await RNFS.writeFile(pathBase64, bytes, 'base64');

          onGenerate(`file://${pathBase64}`);
        }
      }
    }
  };
  const roundedRect = rrect(
    rect(0, 0, width, height),
    borderRadius,
    borderRadius
  );
  const getRandom = useCallback((min = 0, max) => {
    return Math.random() * (max - min) + min;
  }, []);

  const random = useMemo(() => {
    let x1 = getRandom(-width, width / 3);
    let y1 = getRandom(-height, height / 3);
    let x2 = getRandom(-width, width / 2);
    let y2 = getRandom(-height, height / 2);
    let x3 = getRandom(-width, width / 2);
    let y3 = getRandom(-height, height / 2);

    return {
      x1,
      x2,
      y1,
      y2,
      x3,
      y3,
    };
  }, []);

  if (!font) {
    return null;
  }

  return (
    <Canvas
      ref={ref}
      onLayout={() => {
        genAvatar();
      }}
      style={{
        width,
        height,
      }}
      pointerEvents="none"
    >
      <RoundedRect
        x={0}
        y={0}
        width={width}
        height={height}
        r={borderRadius}
        color={colors[0]}
      />
      {mode === 'letter' && (
        <Text
          text={letter || '-'}
          y={height / 2 + font.getSize() / 3}
          x={(width - font.getTextWidth(letter || '-')) / 2}
          font={font}
          color={colors[1]}
        />
      )}
      {mode === 'gradient' && (
        <Group clip={roundedRect}>
          <Group
            layer={
              <Paint>
                <Blur blur={10} />
              </Paint>
            }
          >
            <RoundedRect
              x={0}
              y={0}
              width={width}
              height={height}
              r={borderRadius}
              transform={[
                {
                  translateX: random.x1,
                },
                {
                  translateY: random.y1,
                },
              ]}
              color={colors?.[1]}
            />
            <RoundedRect
              x={0}
              y={0}
              width={width * 1.5}
              height={height * 1.5}
              r={borderRadius * 1.5}
              transform={[
                {
                  translateX: random.x3,
                },
                {
                  translateY: random.y3,
                },
              ]}
              color={colors?.[2] || colors?.[0]}
            />
          </Group>
          <BlurMask blur={20} style={'inner'} />
        </Group>
      )}
    </Canvas>
  );
};

export default Avatar;
