import React from 'react';
import { TextStyle } from 'react-native';
import { createIconSet } from 'react-native-vector-icons';
import customFontGlyph from './generated/icons.json';
import type { IconsId } from './generated/icons';

type IIcon = {
  name: IconsId;
  size?: number;
  style?: TextStyle;
  onPress?: () => void;
  color?: string;
};

const Icons = createIconSet(customFontGlyph, 'icons', 'icons.ttf');
export const IconFont = { font: require('./generated/icons.ttf') };
export const IconItems = customFontGlyph;
const Icon: React.FC<IIcon> = ({ style, size = 12, name, color, onPress }) => {
  return (
    <Icons
      pointerEvents="none"
      name={name}
      size={size}
      onPress={() => {
        if (onPress) {
          onPress();
        }
      }}
      style={{
        ...style,
        ...(color ? { color: color } : {}),
      }}
    />
  );
};
export default Icon;
