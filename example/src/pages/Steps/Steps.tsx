import { useState, type FC } from 'react';
import React, { ScrollView } from 'react-native';
import {
  BaseText,
  Button,
  Label,
  StepDots as Dots,
  Worm,
  Bar,
} from 'react-native-microkit-rn';
import { useSharedValue } from 'react-native-reanimated';

const Steps: FC = () => {
  const active = useSharedValue(0);

  return (
    <ScrollView
      contentContainerStyle={{
        padding: 20,
        gap: 25,
      }}
    >
      <BaseText title="Steps Example" />
      <Button
        title="Change active dot"
        onPress={() => {
          if (active.value + 1 < 4) {
            active.value = active.value + 1;
          } else {
            active.value = 0;
          }
        }}
      />
      <Label title="Worm Style" />

      <Worm active={active} length={4} />
      <Label title="Opacity Style" />
      <Dots active={active} length={4} duration={200} />
      <Label title="Bar Style" />
      <Bar active={active} length={4} duration={200} size={14} />
    </ScrollView>
  );
};
export default Steps;
