import { theme } from '../../App';
import { type FC } from 'react';
import React, { Dimensions, ScrollView } from 'react-native';
import {
  BaseText,
  Button,
  Divider,
  Label,
  LineProgress,
  LineProgressSkia,
} from 'react-native-microkit-rn';
import { useSharedValue } from 'react-native-reanimated';
const { width } = Dimensions.get('window');
const Progress: FC = () => {
  const active = useSharedValue(0);
  let font = require('../../../assets/fonts/ttf/Montserrat-SemiBold.ttf');

  return (
    <ScrollView
      contentContainerStyle={{
        padding: 20,
        gap: 25,
      }}
    >
      <BaseText title="Progress Example" />
      <Button
        title="Change active line"
        onPress={() => {
          if (active.value + 1 < 4) {
            active.value = active.value + 1;
          } else {
            active.value = 0;
          }
        }}
      />

      <LineProgress
        active={active}
        max={4}
        titles={['one', 'two', 'tree', 'four']}
        width={width - 40}
      />
      <Divider type="h" />
      <Label title="Progress on Skia" />
      <LineProgressSkia
        borderRadius={20}
        fontPath={font}
        fontSize={14}
        height={20}
        colors={[
          theme.base.colors['--color-base_platinum'],
          theme.base.colors['--color-base_eerieblack'],
        ]}
        active={active}
        max={4}
        titles={['one', 'two', 'tree', 'four']}
        width={width - 40}
      />
      <LineProgressSkia
        borderRadius={20}
        fontPath={font}
        fontSize={14}
        lineHeight={4}
        colors={[theme.base.colors['--color-base_platinum'], '#9c0dfb']}
        active={active}
        max={4}
        titles={['one', 'two', 'tree', 'four']}
        width={width - 40}
      />
    </ScrollView>
  );
};
export default Progress;
