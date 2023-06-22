import type { FC } from 'react';
import React from 'react';
import type { ViewStyle } from 'react-native';
import type { TextStyle } from 'react-native';
import Box from '../../BaseKit/Box/Box';
import type { TThemeBase } from '../../../helper/theme';
import { makeStyle } from '../../../hooks/makeStyle';
import BaseText, { IBaseText } from '../../BaseKit/BaseText/BaseText';

export const useStyle = makeStyle((theme: TThemeBase) => {
  return theme?.components?.display?.tag;
});
type TTag = {
  title?: string;
  propsTitle?: IBaseText;
  color?: string;
  style?: ViewStyle;
  styleTitle?: TextStyle;
};

const Card: FC<TTag> = ({ title, propsTitle, style, styleTitle, color }) => {
  const styles = useStyle();
  return (
    <Box
      style={{
        ...styles?.ctn,
        ...style,
        ...(color ? { backgroundColor: color } : {}),
      }}
      aCenter
      jCenter
    >
      <BaseText
        style={{
          ...styles?.title,
          ...styleTitle,
        }}
        {...propsTitle}
      >
        {title}
      </BaseText>
    </Box>
  );
};

export default Card;
