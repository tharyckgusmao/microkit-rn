import React from 'react';
import { Text, TextStyle } from 'react-native';
import { styles } from './styles';
type IBaseText = {
  title?: string | React.ReactNode;
  children?: React.ReactNode;
  style?: TextStyle | Array<TextStyle>;
  onPress?: () => void;
  numberOfLines?: number;
};

const BaseText: React.FC<IBaseText> = ({
  title,
  children,
  style,
  onPress,
  numberOfLines,
}) => {
  const props = { numberOfLines, onPress };
  return (
    <Text
      style={{ ...styles.default, ...style }}
      {...props}
      // onPress={() => {
      //   if (onPress) {
      //     onPress();
      //   }
      // }}
    >
      {title || children}
    </Text>
  );
};

export default BaseText;
