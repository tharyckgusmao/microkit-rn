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
const useStyle = (props: any) =>
  makeStyle((theme) => {
    return {
      default: {
        fontSize: theme?.base.size?.primary,
        fontFamily: theme?.base.font?.[500],
        ...props,
      },
    };
  })();

const BaseText: React.FC<IBaseText> = ({
  title,
  children,
  style,
  onPress,
  numberOfLines,
}) => {
  const styles = useStyle(style);
  const props = { numberOfLines, onPress };
  return (
    <Text style={styles.default} {...props}>
      {title || children}
    </Text>
  );
};

export default BaseText;
