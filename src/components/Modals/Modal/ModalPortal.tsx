import { Portal } from '@gorhom/portal';
import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';

import Animated, {
  FadeIn,
  FadeInDown,
  FadeOut,
  FadeOutDown,
  useAnimatedKeyboard,
  useAnimatedStyle,
} from 'react-native-reanimated';
import type { TThemeBase } from '../../../helper/theme';
import { makeStyle } from '../../../hooks/makeStyle';
import Box from '../../BaseKit/Box/Box';
import Icon from '../../BaseKit/Icon/Icon';

type IProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  children: React.ReactNode;
  style?: ViewStyle;
  styleInner?: ViewStyle;
  inline?: boolean;

  tag?: string;

  bottom?: boolean;
  closeButton?: boolean;
  styleBg?: ViewStyle;

  styleCtn?: ViewStyle;
};
export const useStyle = makeStyle((theme: TThemeBase) => {
  return theme?.components?.modals.base;
});
const Modal: React.FC<IProps> = ({
  isOpen,
  children,
  style,
  styleInner,
  inline,
  bottom,
  styleBg,
  styleCtn,

  closeButton,
  onRequestClose,
}): JSX.Element | null => {
  const styles = useStyle();

  const [open, setOpen] = useState(isOpen);

  const requestClose = () => {
    onRequestClose && onRequestClose();
  };

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const keyboardAnimated = useAnimatedKeyboard();
  const animatedStyled = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: -keyboardAnimated.height.value / 4,
        },
      ],
    };
  });
  if (!open) {
    return null;
  }

  return (
    <Portal>
      <Animated.View
        entering={FadeIn.duration(300)}
        exiting={FadeOut.duration(300)}
        style={[
          styles?.offset,

          {
            ...styleBg,
          },
        ]}
        pointerEvents="none"
      />

      <Animated.View
        entering={bottom ? FadeInDown.duration(300) : FadeIn.duration(300)}
        exiting={bottom ? FadeOutDown.duration(300) : FadeOut.duration(300)}
        style={[styles?.ctn, animatedStyled, styleCtn]}
      >
        <TouchableOpacity
          onPress={requestClose}
          activeOpacity={0.9}
          style={{ ...StyleSheet.absoluteFillObject, zIndex: 4 }}
        />
        <View
          pointerEvents="auto"
          style={[
            styles?.modalCtn,
            {
              ...style,
            },
          ]}
        >
          {closeButton && (
            <TouchableOpacity
              style={styles?.closeButton}
              onPress={requestClose}
              activeOpacity={0.9}
            >
              <Icon name="icon_closebold" style={styles?.closeButtonIcon} />
            </TouchableOpacity>
          )}
          <Box
            column
            style={{ ...styleInner, ...(inline && styles?.modalContent) }}
          >
            {children}
          </Box>
        </View>
      </Animated.View>
    </Portal>
  );
};

export default Modal;
