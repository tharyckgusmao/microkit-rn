import type { APPTheme } from 'example/src/theme-basic';
import React from 'react';
import { Dimensions } from 'react-native';
import {
  BaseText,
  Box,
  Button,
  makeStyle,
  Range,
} from 'react-native-microkit-rn';
import { useDerivedValue, useSharedValue } from 'react-native-reanimated';
import { ReText } from 'react-native-redash';

const { width } = Dimensions.get('window');

function toCurrency(value: string | number) {
  'worklet';

  return '$' + value;
}
const useStyle = makeStyle((theme: APPTheme) => {
  return {
    container: {
      ...theme?.base?.layout?.container,
      backgroundColor: theme.base?.colors['--example-bg-range'],
      padding: 0,
    },
    info: {
      padding: theme?.base?.spacing?.['06'] || 0,
    },
    title: {
      fontSize: 18,
      lineHeight: 26,
    },

    description: {
      fontSize: 18,
      lineHeight: 26,
      color: theme.base?.colors?.['--color-base_sonicsilver'],
    },
    number: {
      fontSize: 40,
    },
    bottom: {
      backgroundColor: '#fff',
      padding: theme?.base?.spacing?.['06'] || 0,
    },
    subtitle: {
      fontSize: 14,
    },
    subdescription: {
      fontSize: 10,
      textAlign: 'right',
    },
  };
});

//Credits https://dribbble.com/shots/19183570-FeeGoo-Investing-Platform-design-prototype-MVP
const RangeScreen = () => {
  const styles = useStyle();
  const value = useSharedValue(0);

  const currenValue = useDerivedValue(() => {
    return toCurrency(value.value);
  });

  return (
    <Box style={styles?.container} flex={1}>
      <Box column gap={40} flex={1} style={styles?.info}>
        <Box>
          <BaseText
            style={styles.title}
            title="What is your desired monthly contibution?"
          />
          <BaseText
            style={styles.description}
            title="How much would you like to commit on a monthly basis towards your goal?"
          />
        </Box>
        <ReText text={currenValue || '0'} style={styles?.number} />
      </Box>
      <Box style={styles?.bottom} gap={40}>
        <Box gap={20}>
          <BaseText style={styles.subtitle} title="Monthly contribution" />
          <Box gap={10}>
            <Range
              sliderWidth={width - 48}
              max={1000}
              sharedValue={value}
              step={1}
              formatter={toCurrency}
            />
            <BaseText style={styles.subdescription} title="$1000 Max" />
          </Box>
        </Box>
        <Button title="Continue" type={'outline'} />
      </Box>
    </Box>
  );
};

export default RangeScreen;
