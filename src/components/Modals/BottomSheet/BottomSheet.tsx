import Box from '../../../components/BaseKit/Box/Box';
import BaseText from '../../../components/BaseKit/BaseText/BaseText';
import Divider from '../../../components/BaseKit/Divider/Divider';
import type {
  BottomSheetBackdropProps,
  BottomSheetHandleProps,
} from '@gorhom/bottom-sheet';
import {
  TouchableOpacity,
  type StyleProp,
  type ViewStyle,
  StyleSheet,
} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import React, { FC, memo, useMemo } from 'react';
import type { TThemeBase } from '../../../helper/theme';
import { makeStyle } from '../../../hooks/makeStyle';

import { useCallback, useEffect, useRef, useState } from 'react';
import { BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { colorsDefault } from '../../../helper/colors';
interface HandleProps extends BottomSheetHandleProps {
  title: string;
  style?: StyleProp<ViewStyle>;
  color: string;
  onClose: () => void;
}
interface BackDropProps extends BottomSheetBackdropProps {
  onClose: () => void;
}
export const CustomBackdrop = ({
  animatedIndex,
  style,
  onClose,
}: BackDropProps) => {
  const containerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        animatedIndex.value,
        [-1, 0, 1],
        [0, 1, 1],
        Extrapolate.CLAMP
      ),
    };
  });
  const containerStyle = useMemo(
    () => [
      style,
      {
        backgroundColor: '#00000020',
      },
      containerAnimatedStyle,
    ],
    [style, containerAnimatedStyle]
  );

  return (
    <>
      <Animated.View style={containerStyle} />
      <TouchableOpacity
        style={{ ...StyleSheet.absoluteFillObject }}
        onPress={() => {
          if (onClose) {
            onClose();
          }
        }}
      />
    </>
  );
};
export const useStyle = makeStyle((theme: TThemeBase) => {
  return theme?.components?.modals.header;
});
export const HeaderList: React.FC<HandleProps> = memo(
  ({ title, color = colorsDefault['--color-base_lightgray'] }) => {
    const styles = useStyle();

    return (
      <Box style={styles?.ctnHeader} aCenter jCenter>
        {!!title && <BaseText style={styles?.title} title={title} />}
        <Divider type="h" spaccingBottom={0} spaccingTop={12} color={color} />
      </Box>
    );
  }
);

type IBottomSheet = {
  show: boolean;
  headerTitle?: string;
  headerSeparateColor?: string;
  children: JSX.Element;
  snapPoints: Array<string | number>;
  onCloseModal: () => void;
};

export const BottomSheet: FC<IBottomSheet> = ({
  show,
  headerTitle,
  children,
  snapPoints = ['40%', '80%'],
  headerSeparateColor,
  onCloseModal,
}) => {
  const [open, setOpen] = useState(show);
  const bottomSheet = useRef<BottomSheetModal>(null);

  useEffect(() => {
    setOpen(show);
  }, [show]);

  useEffect(() => {
    if (open) {
      bottomSheet.current?.present();
    }
  }, [open]);

  const onClose = () => {
    onCloseModal();
    bottomSheet.current?.close();
    setOpen(false);
  };

  const handleSheetChange = useCallback((index: number) => {
    if (index <= -1) {
      onClose();
    }
  }, []);

  const renderCustomHandle = useCallback((props: any) => {
    return (
      <HeaderList title={headerTitle} color={headerSeparateColor} {...props} />
    );
  }, []);
  const renderCustomBackDrop = useCallback((props: any) => {
    return <CustomBackdrop {...props} onClose={onClose} />;
  }, []);
  if (!open) {
    return null;
  }
  return (
    <BottomSheetModal
      ref={bottomSheet}
      snapPoints={snapPoints}
      onChange={handleSheetChange}
      index={0}
      animateOnMount
      handleStyle={{
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
      }}
      handleComponent={renderCustomHandle}
      backdropComponent={renderCustomBackDrop}
    >
      <BottomSheetScrollView contentContainerStyle={{ flex: 1 }}>
        {children}
      </BottomSheetScrollView>
    </BottomSheetModal>
  );
};

export default BottomSheet;
