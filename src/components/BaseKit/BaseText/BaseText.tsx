import React from 'react';
import { Text, TextStyle } from 'react-native';
import { makeStyle } from '../../../hooks/makeStyle';
type IBaseText = {
  title?: string | React.ReactNode;
  children?: React.ReactNode;
  style?: TextStyle | Array<TextStyle>;
  onPress?: () => void;
  numberOfLines?: number;
};
const useStyle = makeStyle((theme) => {
  return {
    default: {
      fontSize: theme?.base.size?.medium,
      fontFamily: theme?.base.font?.[500],
    },
  };
});

const BaseText: React.FC<IBaseText> = ({
  title,
  children,
  style,
  onPress,
  numberOfLines,
}) => {
  const styles = useStyle();
  const props = { numberOfLines, onPress };
  return (
    <Text style={{ ...styles.default, ...style }} {...props}>
      {title || children}
    </Text>
  );
};

export default BaseText;
