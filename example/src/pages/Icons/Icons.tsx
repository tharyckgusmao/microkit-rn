import type { APPTheme } from 'example-old/src/App';
import type { FC } from 'react';
import React from 'react';
import { ScrollView } from 'react-native';
import {
  Box,
  Icon,
  IconItems,
  IconsType,
  makeStyle,
} from 'react-native-microkit-rn';

const useStyle = makeStyle((theme: APPTheme) => {
  return {
    container: {
      ...theme?.base?.layout,
      flexWrap: 'wrap',
      flexDirection: 'row',
      gap: 20,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 40,
    },
    icon: {
      width: 60,
      height: 60,
      padding: 10,
      borderWidth: 1,
      borderColor: theme?.base?.colors?.['--color-base_silver'],
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
    },
  };
});
const Icons: FC = () => {
  const styles = useStyle();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {Object.keys(IconItems).map((e, k) => {
        return (
          <Box style={styles.icon} key={k}>
            <Icon name={e as IconsType} size={26} />
          </Box>
        );
      })}
    </ScrollView>
  );
};

export default Icons;
