import { useFocusEffect } from '@react-navigation/native';
import React, {
  forwardRef,
  ForwardRefRenderFunction,
  memo,
  ReactNode,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  BackHandler,
  Keyboard,
  LayoutChangeEvent,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedKeyboard,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { makeStyle } from '../../../hooks/makeStyle';
import type { TThemeBase } from '../../../helper/theme';

type IBottomSheet = {
  height?: number;
  umount?: boolean;
  children?: ReactNode;
  stylesDraggable?: ViewStyle;
  style?: ViewStyle;
  onClose?: () => void;
};
export interface IBottomSheetHandle {
  open: () => void;
  close: () => void;
}
export const useStyle = makeStyle((theme: TThemeBase) => {
  return theme?.components?.modals.bottom;
});
const BottomSheet: ForwardRefRenderFunction<
  IBottomSheetHandle,
  IBottomSheet
> = (
  {
    height,
    children,
    umount = true,
    stylesDraggable,
    style,
    onClose,
  }: IBottomSheet,
  ref
) => {
  const [openInner, setOpen] = useState(false);
  const containerRef = useRef<Animated.View>(null);
  const heightMeasure = useSharedValue(height ?? 0);
  const y = useSharedValue(height ?? 0);
  const opacity = useDerivedValue(() =>
    interpolate(y.value, [30, heightMeasure.value * 0.8], [1, 0])
  );

  const styles = useStyle();

  const measureHeight = useCallback(
    ({ nativeEvent: {} }: LayoutChangeEvent) => {
      if (height) {
        return;
      }
      containerRef.current?.measure((_x, _y, _w, _h) => {
        heightMeasure.value = (_h ?? 0) - 30;
        y.value = (_h ?? 0) - 30;
      });
    },
    []
  );

  const closeEvent = () => {
    Keyboard.dismiss();

    setOpen(false);
    if (onClose) {
      onClose();
    }
  };

  const gestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { startY: number }
  >({
    onStart: (_, ctx) => {
      ctx.startY = y.value;
    },
    onActive: (event, ctx) => {
      const f = ctx.startY + event.translationY;
      y.value = f >= 0 ? f : 0;
    },
    onEnd: (event, ctx) => {
      const f = ctx.startY + event.translationY;
      if (f >= heightMeasure.value * 0.3) {
        y.value = withTiming(heightMeasure.value, {}, (finished) => {
          if (finished) {
            runOnJS(closeEvent)();
          }
        });
      } else {
        y.value = withSpring(30);
      }
    },
  });

  const open = () => {
    if (heightMeasure.value) {
      setOpen(true);
      y.value = withSpring(30, {
        damping: 10,
        mass: 0.5,
      });
    }
  };

  const close = useCallback(() => {
    y.value = withTiming(heightMeasure.value, {}, (finished) => {
      if (finished) {
        runOnJS(closeEvent)();
      }
    });
  }, []);
  useImperativeHandle(ref, () => {
    return {
      open: () => open(),
      close: () => close(),
    };
  });

  const opacityAnimated = useAnimatedStyle(() => {
    if (!heightMeasure.value) {
      return {
        opacity: 0,
        display: 'none',
      };
    }
    return {
      opacity: opacity.value,
    };
  });

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        if (openInner) {
          close();
        }
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [close, openInner])
  );

  const keyboard = useAnimatedKeyboard();
  const translateStyle = useAnimatedStyle(() => {
    if (!heightMeasure.value) {
      return {
        display: 'none',
      };
    }
    return {
      transform: [{ translateY: y.value - keyboard.height.value * 0.8 }],
    };
  });
  if (openInner === false && umount === true) {
    return null;
  }
  return (
    <View
      style={styles?.ctn}
      pointerEvents={openInner ? 'auto' : 'none'}
      onLayout={measureHeight}
    >
      <TouchableOpacity
        style={styles?.bg}
        onPress={() => {
          close();
        }}
      >
        <Animated.View style={[styles?.contentBackground, opacityAnimated]} />
      </TouchableOpacity>

      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View
          style={[
            styles?.container,
            height && { height },
            // animatedStyle,
            translateStyle,
          ]}
          ref={containerRef}
        >
          <View style={{ ...styles?.draggableContainer, ...stylesDraggable }}>
            <View style={styles?.draggableIcon} />
          </View>
          <View style={{ ...styles?.dataCtn, ...style }} collapsable={false}>
            {children}
          </View>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default memo(forwardRef(BottomSheet));
