/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, PropsWithChildren, useMemo } from 'react';
import type { PointerEvents } from 'react-native';
import type { ViewStyle } from 'react-native';
import { GestureResponderEvent, View } from 'react-native';

type TBox = {
  style?: ViewStyle;
  id?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  flex?: string | number;
  column?: boolean;
  row?: boolean;
  aCenter?: boolean;
  aStart?: boolean;
  aEnd?: boolean;
  jCenter?: boolean;
  jStart?: boolean;
  jEnd?: boolean;
  position?: string;
  boxSizing?: string;
  gap?: number;
  pointerEvents?: 'none' | 'all';
  onPress?: (event: GestureResponderEvent) => void;
  onPressIn?: (event: GestureResponderEvent) => void;
  onPressOut?: (event: GestureResponderEvent) => void;
};

const Box: FC<PropsWithChildren<TBox>> = (props) => {
  const { children, onPress, onPressIn, onPressOut } = props;
  //@ts-ignore
  const getProperties = useMemo(() => {
    let {
      children: tmpOnpressChildren,
      style,
      onPress: tmpOnpress,
      onPressIn: tmpOnpressIn,
      onPressOut: tmpOnpressOut,
      flexDirection,
      flex,
      alignItems,
      justifyContent,
      column,
      row,
      aCenter,
      aStart,
      aEnd,
      jCenter,
      jStart,
      jEnd,
      position = 'relative',
      boxSizing = 'border-box',
      gap = 0,
      ...attrs
    } = props; //flex

    let flexProperties =
      flexDirection || flex || column || row || alignItems || justifyContent;
    let stylesFlex = {};
    if (flexProperties) {
      let flexUnset = `${flex || 'unset'}`.replace('.', '');
      stylesFlex = {
        ...stylesFlex,
        ...(flex && {
          flex:
            flex === 'none' || flexUnset === 'unset' ? -1 : Number(flexUnset),
        }),
      };
      if (flexDirection === 'row' || row) {
        stylesFlex = {
          ...stylesFlex,
          flexDirection: 'row',
        };
      } else {
        stylesFlex = {
          ...stylesFlex,
          flexDirection: 'column',
        };
      }

      if (aCenter || aStart || aEnd) {
        stylesFlex = {
          ...stylesFlex,
          alignItems: `${
            (aCenter && 'center') ||
            (aStart && 'flex-start') ||
            (aEnd && 'flex-end')
          }`,
        };
      }
      if (jCenter || jStart || jEnd) {
        stylesFlex = {
          ...stylesFlex,
          justifyContent: `${
            (jCenter && 'center') ||
            (jStart && 'flex-start') ||
            (jEnd && 'flex-end')
          }`,
        };
      }
    }
    stylesFlex = {
      ...stylesFlex,
      position,
      boxSizing: boxSizing ? 'border-box' : 'content-box',
      gap,
    };

    const styleGenerator = {
      ...stylesFlex,
      ...style,
    };

    return { style: styleGenerator, attrs };
  }, [props]);

  return (
    <View
      style={getProperties.style}
      {...getProperties.attrs}
      onPress={(e: GestureResponderEvent) => onPress && onPress(e)}
      onPressIn={(e: GestureResponderEvent) => onPressIn && onPressIn(e)}
      onPressOut={(e: GestureResponderEvent) => onPressOut && onPressOut(e)}
    >
      {children}
    </View>
  );
};

export default Box;
