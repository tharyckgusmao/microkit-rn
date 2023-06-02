import React, { FC, ReactElement } from 'react';
import { Dimensions, FlatList } from 'react-native';
import Animated, {
  SharedValue,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import type { TThemeBase } from '../../../helper/theme';
import { makeStyle } from '../../../hooks/makeStyle';
import { View } from 'react-native';
import { Platform } from 'react-native';
const { width: w } = Dimensions.get('window');

type TSlider = {
  data: Array<any>;
  keyExtractor?: string;
  width?: number;
  emptySize?: number;
  separatorWidth?: number;
  snapTo?: number;
  render?: ReactElement;
  shared: SharedValue<number>;
};
export const useStyle = makeStyle((theme: TThemeBase) => {
  return theme?.components?.loaders.dot;
});
const FlatListAnimated = Animated.createAnimatedComponent(FlatList);

export const Slider: FC<TSlider> = ({
  data,
  keyExtractor = 'id',
  width = w,
  render,
  emptySize = 0,
  separatorWidth = 0,
  snapTo = w,
  shared,
}) => {
  const x = shared;

  const scrollHandler = useAnimatedScrollHandler((event) => {
    x.value = event.contentOffset.x;
  });

  return (
    <FlatListAnimated
      data={data}
      keyExtractor={(item: any) => item[keyExtractor]}
      horizontal
      bounces={false}
      showsHorizontalScrollIndicator={false}
      renderToHardwareTextureAndroid
      scrollEventThrottle={16}
      snapToAlignment="start"
      decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
      snapToInterval={snapTo}
      pagingEnabled
      onScroll={scrollHandler}
      ItemSeparatorComponent={() => <View style={{ width: separatorWidth }} />}
      getItemLayout={(_, index) => ({
        length: width + separatorWidth,
        offset: width + separatorWidth * index,
        index,
      })}
      renderItem={({ item, index }: { item: any; index: any }) => {
        if (item?.empty) {
          return <View style={{ width: emptySize }} />;
        }
        return React.cloneElement(
          render as React.ReactElement<
            any,
            string | React.JSXElementConstructor<any>
          >,
          {
            ...render?.props,
            data: item,
            scrollX: x,
            index,
          }
        );
      }}
    />
  );
};

export default Slider;
