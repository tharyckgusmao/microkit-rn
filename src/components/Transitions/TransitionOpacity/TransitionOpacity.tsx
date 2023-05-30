import React, { FC, memo, useState } from 'react';
import Animated, {
  FadeIn,
  FadeOut,
  runOnJS,
  SharedValue,
  useDerivedValue,
} from 'react-native-reanimated';
import { styles } from './styles';
import { makeStyle } from '../../../hooks/makeStyle';
import type { TThemeBase } from '../../../helper/theme';

type ITransitionOpacity = {
  show: number;
  delay?: number;
  active: SharedValue<number>;
  children: JSX.Element;
};
export const useStyle = makeStyle((theme: TThemeBase) => {
  return theme?.components?.transitions?.opacity;
});

export const TransitionOpacity: FC<ITransitionOpacity> = ({
  show,
  active,
  delay = 300,
  children,
}) => {
  const [hidden, setHidden] = useState(true);
  const showElement = (showEl: boolean) => {
    if (showEl) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  };
  useDerivedValue(() => {
    runOnJS(showElement)(show === active.value);
  }, [active]);

  if (hidden) {
    return null;
  }
  return (
    <Animated.View
      style={styles.ctn}
      // {...{animatedProps}}
      entering={FadeIn.duration(200).delay(delay)}
      exiting={FadeOut.duration(150)}
    >
      {children}
    </Animated.View>
  );
};

export default memo(TransitionOpacity);
