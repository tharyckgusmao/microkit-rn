import Box from '../../BaseKit/Box/Box';
import BaseText from '../../BaseKit/BaseText/BaseText';
import Icon from '../../BaseKit/Icon/Icon';
import { TouchableOpacity, ViewStyle } from 'react-native';
import React, { FC } from 'react';
import { makeStyle } from '../../../hooks/makeStyle';
import type { TThemeBase } from '../../../helper/theme';
type IBackButton = {
  onClick: () => void;
  title?: string;
  style?: ViewStyle;
};
export const useStyle = makeStyle((theme: TThemeBase) => {
  return theme?.components?.buttons?.backButton;
});

export const BackButton: FC<IBackButton> = ({ onClick, style, title }) => {
  const styles = useStyle();

  return (
    <TouchableOpacity
      onPress={onClick}
      activeOpacity={0.9}
      style={{ ...styles?.ctn, ...style }}
      hitSlop={{
        left: 10,
        top: 10,
        right: 10,
        bottom: 10,
      }}
    >
      <Box row aCenter jCenter pointerEvents={'none'}>
        <Icon style={styles?.icon} name="icon_arrowleftbold" />

        {title && <BaseText style={styles?.title} title={title} />}
      </Box>
    </TouchableOpacity>
  );
};

export default BackButton;
