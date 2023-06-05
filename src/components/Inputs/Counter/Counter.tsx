import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Box from '../../../components/BaseKit/Box/Box';
import Icon from '../../../components/BaseKit/Icon/Icon';
import type { TThemeBase } from '../../../helper/theme';
import { makeStyle } from '../../../hooks/makeStyle';

type TCounter = {
  max: number;
  min: number;
  active: number;
  onChange: (factor: number) => void;
  colors?: [string, string, string];
};
export const useStyle = makeStyle((theme: TThemeBase) => {
  return theme?.components?.inputs?.counter;
});

const Counter: FC<TCounter> = ({
  max = 1,
  min = 0,
  active = 0,
  colors = ['#f46d6d', '#c7c7c7', '#17b74c'],
  onChange,
}) => {
  const styles = useStyle();

  const onChangeInner = (factor: number) => {
    if (factor <= -1) {
      if (active <= max && active > min) {
        onChange(factor);
      }
    } else if (factor == 1) {
      if (active >= min && active < max) {
        onChange(factor);
      }
    }
  };

  return (
    <Box row style={styles?.ctn}>
      <TouchableOpacity
        onPress={() => active > min && onChangeInner(-1)}
        style={styles?.leftButton}
      >
        <Icon
          name="icon_removebold"
          style={styles?.icon}
          color={active > min ? colors[0] : colors[1]}
        />
      </TouchableOpacity>

      <Text style={styles?.title}>{active}</Text>
      <TouchableOpacity
        onPress={() => active < max && onChangeInner(1)}
        style={styles?.rightButton}
      >
        <Icon
          name={'icon_addbold'}
          style={styles?.icon}
          color={active < max ? colors[2] : colors[1]}
        />
      </TouchableOpacity>
    </Box>
  );
};

export default Counter;
