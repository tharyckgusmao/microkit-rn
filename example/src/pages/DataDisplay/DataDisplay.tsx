import type { FC } from 'react';
import { ScrollView } from 'react-native';
import { Avatar, BaseText, Box } from 'react-native-microkit-rn';
import React from 'react';
const DataDisplay: FC = () => {
  let font = require('../../../assets/fonts/ttf/Montserrat-SemiBold.ttf');
  return (
    <ScrollView
      contentContainerStyle={{
        padding: 20,
        gap: 25,
      }}
    >
      <BaseText title="Avatar Examples" />
      <BaseText title="Mode letter" />
      <Box row style={{ gap: 10 }}>
        <Avatar
          width={80}
          height={80}
          fontPath={font}
          fontSize={40}
          borderRadius={100}
          colors={['#d9d9d9', '#e38220']}
          mode="letter"
          letter="T"
        />
        <Avatar
          width={80}
          height={80}
          fontPath={font}
          fontSize={40}
          borderRadius={100}
          colors={['#9637ef', '#ffffff']}
          mode="letter"
          letter="G"
        />
        <Avatar
          width={40}
          height={40}
          fontPath={font}
          fontSize={20}
          borderRadius={8}
          colors={['#000000', '#ffffff']}
          mode="letter"
          letter="M"
        />
        <Avatar
          width={40}
          height={40}
          fontPath={font}
          fontSize={22}
          borderRadius={2}
          colors={['#5ea0fd', '#ffffff']}
          mode="letter"
          letter="T"
        />
      </Box>
      <BaseText title="Mode Gradient" />
      <Box row style={{ gap: 10 }}>
        <Avatar
          width={80}
          height={80}
          fontPath={font}
          fontSize={40}
          borderRadius={100}
          colors={['#ffa953', '#e38220', '#20e36e']}
          mode="gradient"
        />
        <Avatar
          width={80}
          height={80}
          fontPath={font}
          fontSize={40}
          borderRadius={100}
          colors={['#9637ef', '#df5d5d', '#bc20e3']}
          mode="gradient"
        />
        <Avatar
          width={40}
          height={40}
          fontPath={font}
          fontSize={20}
          borderRadius={8}
          colors={['#000000', '#6be0bb', '#79fffb']}
          mode="gradient"
        />
        <Avatar
          width={40}
          height={40}
          fontPath={font}
          fontSize={22}
          borderRadius={2}
          colors={['#8fbeff', '#61c8e5', '#6b17d2']}
          mode="gradient"
        />
      </Box>
    </ScrollView>
  );
};

export default DataDisplay;
