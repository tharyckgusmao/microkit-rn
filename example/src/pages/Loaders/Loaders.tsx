import type { FC } from 'react';
import { ScrollView } from 'react-native';
import { BaseText, Box, Dots, Label, Skeleton } from 'react-native-microkit-rn';
import React from 'react';
import { Dimensions } from 'react-native';
let { width, height } = Dimensions.get('screen');

const Loaders: FC = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        padding: 20,
        gap: 25,
      }}
    >
      <BaseText title="Loaders Examples" />
      <Label title="Dot loader" />
      <Box row style={{ gap: 10 }} jCenter>
        <Dots show={true} />
      </Box>
      <Box row style={{ gap: 10 }} jCenter>
        <Dots show={true} mode="jumping" />
      </Box>
      <Label title="Skeleton" />
      <Box
        row
        style={{
          marginBottom: height,
        }}
      >
        <Skeleton
          loading={true}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            flex: 1,
            zIndex: 2000,
            height: height,
            width: width - 40,
            backgroundColor: '#fff',
            paddingTop: 40,
          }}
          elements={[
            {
              styleCtn: {
                marginTop: 0,
                marginBottom: 20,
              },
              children: [
                {
                  width: 60,
                  height: 40,
                  borderRadius: 8,
                  marginRight: 50,
                  marginTop: 20,
                  marginLeft: width / 2 - (80 + 60 + 60 + 140) / 2,
                },
                {
                  width: 80,
                  height: 80,
                  borderRadius: 100,
                },
                {
                  width: 60,
                  height: 40,
                  borderRadius: 8,
                  marginLeft: 50,
                  marginTop: 20,
                },
              ],
            },
            {
              styleCtn: {
                marginTop: 0,
                marginBottom: 20,
              },
              children: [
                {
                  width: width - 76,
                  height: 60,
                  borderRadius: 8,
                  marginLeft: 18,
                },
              ],
            },
            {
              styleCtn: {
                marginTop: 0,
                marginBottom: 20,
              },
              children: [
                {
                  width: width - 76,
                  height: 40,
                  borderRadius: 8,
                  marginLeft: 18,
                },
              ],
            },
            {
              children: [
                {
                  width: width - 76,
                  height: 300,
                  borderRadius: 8,
                  marginLeft: 18,
                },
              ],
            },
          ]}
        />
      </Box>
    </ScrollView>
  );
};

export default Loaders;
