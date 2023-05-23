import type { FC } from 'react';
import React from 'react';
import { ColorValue, View, ViewStyle } from 'react-native';
import { makeStyle } from '../../../hooks/makeStyle';
type TDivider = {
  type?: 'h' | 'v';
  spaccingBottom?: number;
  spaccingTop?: number;
  style?: ViewStyle;
  size?: number;
  color?: ColorValue;
};

const useStyle = (props: any) =>
  makeStyle((theme) => {
    return {
      divider: {
        ...props,
        backgroundColor:
          props.backgroundColor || theme?.base.colors?.['--color-tangerine'],
      },
    };
  })();

const Divider: FC<TDivider> = ({
  type,
  color,
  spaccingBottom = 0,
  spaccingTop = 0,
  style,
  size = 1,
}) => {
  const styles = useStyle({
    backgroundColor: color,
    marginTop: type === 'h' ? spaccingTop : 0,
    marginBottom: type === 'h' ? spaccingBottom : 0,
    marginLeft: type !== 'h' ? spaccingBottom : 0,
    marginRight: type !== 'h' ? spaccingBottom : 0,
    width: type === 'h' ? '100%' : size,
    height: type === 'h' ? size : '100%',
    ...style,
  });
  return (
    <View
      style={{
        ...styles?.divider,
      }}
    />
  );
};

export default Divider;
