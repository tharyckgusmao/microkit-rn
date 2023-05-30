import { yupResolver } from '@hookform/resolvers/yup';
import { useState, type FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import React, { ScrollView, View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import {
  BaseText,
  Box,
  Button,
  CheckBox,
  Divider,
  FadeInView,
  FormInput,
  Input,
  InputOtp,
  Label,
  Radio,
  TransitionHeight,
  TransitionOpacity,
} from 'react-native-microkit-rn';

const Transitions: FC = () => {
  const [active, setActive] = useState(false);

  const opacity = useSharedValue(0);

  return (
    <ScrollView
      contentContainerStyle={{
        padding: 20,
        gap: 25,
      }}
    >
      <BaseText title="Transitions Example" />
      <Label title="Fade on Focus with delay 2000ms" />
      <FadeInView delay={2000}>
        <Button
          onPress={() => {}}
          title="Loading"
          loading={true}
          loadingVariant="left"
        />
      </FadeInView>

      <Divider type="h" />
      <Label title="Transition height" />
      <Button
        onPress={() => {
          setActive((e) => !e);
        }}
        title="Control Element"
      />
      <View style={{ height: 60, backgroundColor: 'blue' }}>
        <TransitionHeight
          height={60}
          show={active}
          styles={{
            backgroundColor: 'red',
          }}
        >
          <>
            <View style={{ backgroundColor: 'green' }}>
              <BaseText title="content" />
            </View>
          </>
        </TransitionHeight>
      </View>
      <Divider type="h" />
      <Label title="Transition Opacity" />
      <Button
        onPress={() => {
          opacity.value = !opacity.value ? 1 : 0;
        }}
        title="Control Element"
      />
      <View style={{ height: 60, backgroundColor: 'blue' }}>
        <TransitionOpacity show={1} active={opacity}>
          <>
            <View style={{ backgroundColor: 'green' }}>
              <BaseText title="content" />
            </View>
          </>
        </TransitionOpacity>
      </View>
    </ScrollView>
  );
};
export default Transitions;
