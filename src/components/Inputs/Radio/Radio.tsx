import type { FC } from 'react';
import React, { TouchableOpacity, View, ViewStyle } from 'react-native';
import BaseText from '../../../components/BaseKit/BaseText/BaseText';
import Box from '../../../components/BaseKit/Box/Box';
import Divider from '../../../components/BaseKit/Divider/Divider';
import Icon from '../../../components/BaseKit/Icon/Icon';
import type { TThemeBase } from '../../../helper/theme';
import { makeStyle } from '../../../hooks/makeStyle';

type IRadio = {
  label?: string;
  onClick?: (item: any) => void;
  item?: any;
  active?: any | null;
  style?: ViewStyle;
};
export const useStyle = makeStyle((theme: TThemeBase) => {
  return theme?.components?.inputs?.radio;
});
export const Radio: FC<IRadio> = ({ label, onClick, active, item, style }) => {
  const styles = useStyle();

  return (
    <TouchableOpacity
      style={styles?.ctn}
      activeOpacity={0.9}
      onPress={() => {
        if (item && onClick) {
          onClick(item);
        }
      }}
    >
      <Box
        style={{
          ...styles?.wrapper,
          ...style,
          ...(active && styles?.active),
        }}
      >
        <View style={{ flexDirection: 'row' }} pointerEvents="none">
          <BaseText
            style={{
              ...styles?.title,
              ...(active && styles?.activeTitle),
            }}
            title={label}
          />
        </View>
        <Divider spaccingBottom={10} spaccingTop={10} />
        <Icon
          name={!active ? 'icon_addbold' : 'icon_closebold'}
          style={{
            ...styles?.icon,
            ...(active && styles?.activeIcon),
          }}
        />
      </Box>
    </TouchableOpacity>
  );
};

export default Radio;
