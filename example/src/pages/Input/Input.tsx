import type { FC } from 'react';
import React, { ScrollView } from 'react-native';
import { Input } from 'react-native-microkit-rn';
const InputHome: FC = () => {
  return (
    <ScrollView>
      <Input
        placeholder="escreva aqui..."
        name="password"
        type="password"
        preffix={'icon_locklinear'}
        pressEnterBlur={true}
      />
    </ScrollView>
  );
};
export default InputHome;
