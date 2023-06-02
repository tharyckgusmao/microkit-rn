import { type FC } from 'react';
import React, { Dimensions, Image, ScrollView, View } from 'react-native';
import {
  Bar,
  BaseText,
  Box,
  Dots,
  Label,
  Slider,
  StepDots,
  Worm,
} from 'react-native-microkit-rn';
import Animated, {
  SharedValue,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
const { width, height } = Dimensions.get('window');

const data = [
  {
    title: 2,
    image: 'https://picsum.photos/600/600',
  },
  {
    title: 3,
    image: 'https://picsum.photos/600/600',
  },
  {
    title: 3,
    image: 'https://picsum.photos/600/600',
  },
  {
    title: 3,
    image: 'https://picsum.photos/600/600',
  },
];
const ITEM_WIDTH = width * 0.7;
const ITEM_PADDING = 0;
const ITEM_EMPTY = (width - ITEM_WIDTH) / 2;

const ItemParallax = ({ data, scrollX = null, index = 0 }) => {
  const animatedStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 2) * ITEM_WIDTH,
      (index - 1) * ITEM_WIDTH,
      index * ITEM_WIDTH,
    ];
    let scale = interpolate(scrollX.value, inputRange, [0.8, 1, 0.8]);

    return {
      transform: [
        {
          scale: scale,
        },
      ],
    };
  }, []);
  const animatedXStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 1) * ITEM_WIDTH,
      index * ITEM_WIDTH,
      (index + 1) * ITEM_WIDTH,
    ];

    let x = interpolate(scrollX.value, inputRange, [
      -ITEM_WIDTH * 0.7,
      0,
      ITEM_WIDTH * 0.7,
    ]);
    return {
      transform: [
        {
          translateX: x,
        },
      ],
    };
  });

  return (
    <Animated.View
      style={[
        {
          width: ITEM_WIDTH,
          height: height * 0.3,
          borderRadius: 20,
          overflow: 'hidden',
          alignItems: 'center',
          backgroundColor: 'red',
          marginRight: ITEM_PADDING,
        },
        animatedStyle,
      ]}
    >
      <Animated.View
        style={[
          {
            width: width * 1.3,
            height: height * 0.3,
            position: 'absolute',
            left: 0,
            top: 0,
          },
          animatedXStyle,
        ]}
      >
        <Image
          source={{ uri: data.image }}
          style={{ width: '100%', height: '100%' }}
        />
      </Animated.View>
    </Animated.View>
  );
};
const Item = ({ data, scrollX = null, index = 0 }) => {
  return (
    <Animated.View
      style={[
        {
          width: width,
          height: height * 0.3,
          borderRadius: 0,
          overflow: 'hidden',
          alignItems: 'center',
        },
      ]}
    >
      <Animated.View
        style={[
          {
            width: width,
            height: height * 0.3,
            position: 'absolute',
            left: 0,
            top: 0,
          },
        ]}
      >
        <Image
          source={{ uri: data.image }}
          style={{ width: '100%', height: '100%' }}
        />
      </Animated.View>
    </Animated.View>
  );
};

const Sliders: FC = () => {
  const x = useSharedValue(0);
  const dots = useDerivedValue((): number => {
    return x.value / ITEM_WIDTH;
  }, [x]);

  const xFullwidth = useSharedValue(0);
  const fullWidth = useDerivedValue((): number => {
    return xFullwidth.value / width;
  }, [xFullwidth]);

  return (
    <ScrollView
      contentContainerStyle={{
        gap: 20,
        paddingBottom: 120,
      }}
    >
      <Box
        style={{
          margin: 20,
        }}
      >
        <BaseText title="Sliders Example" />
        <Label title="Exemple parallax" />
      </Box>
      <Slider
        data={[{ empty: true }, ...data, { empty: true }]}
        width={ITEM_WIDTH}
        emptySize={ITEM_EMPTY}
        snapTo={ITEM_WIDTH + ITEM_PADDING}
        keyExtractor="title"
        render={<ItemParallax data={[]} />}
        separatorWidth={0}
        shared={x}
      />
      <Worm active={dots} length={4} duration={200} />
      <Box
        style={{
          margin: 20,
        }}
      >
        <Label title="Exemple Full Width" />
      </Box>
      <Slider
        data={[...data]}
        width={width}
        snapTo={width}
        keyExtractor="title"
        render={<Item data={[]} />}
        separatorWidth={0}
        shared={xFullwidth}
      />
      <Bar active={fullWidth} length={4} duration={200} size={14} />
    </ScrollView>
  );
};
export default Sliders;
