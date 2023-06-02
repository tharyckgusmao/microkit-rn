import React, { View } from 'react-native';
import type { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import Box from '../../../../components/BaseKit/Box/Box';
import BaseText from '../../../../components/BaseKit/BaseText/BaseText';
import Icon from '../../../../components/BaseKit/Icon/Icon';
import type { TThemeBase } from '../../../../helper/theme';
import { makeStyle } from '../../../../hooks/makeStyle';

type IOption = {
  label?: string;
  onClick?: (item: any) => void;
  item?: any;
  activeValue?: any | null;
};
export const useStyle = makeStyle((theme: TThemeBase) => {
  return theme?.components?.inputs?.select?.option;
});
export const Option: FC<IOption> = ({ label, onClick, activeValue, item }) => {
  const styles = useStyle();
  return (
    <TouchableOpacity
      style={styles?.ctn}
      onPress={() => {
        if (item && onClick) {
          onClick(item);
        }
      }}
    >
      <Box style={{ ...styles?.option, ...(activeValue && styles.active) }}>
        <View style={{ flexDirection: 'row', flex: 1 }} pointerEvents="none">
          <BaseText
            style={{ ...styles.title, ...(activeValue && styles.activeTitle) }}
            numberOfLines={2}
            title={label}
          />
        </View>
        <Icon
          name="icon_checkcirclebold"
          style={{
            ...styles.icon,
            opacity: activeValue ? 1 : 0,
          }}
        />
      </Box>
    </TouchableOpacity>
  );
};

export default Option;
