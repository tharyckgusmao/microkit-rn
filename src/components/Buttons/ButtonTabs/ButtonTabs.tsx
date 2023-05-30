import type { FC } from 'react';
import React from 'react';
import { TouchableNativeFeedback } from 'react-native';
import BaseText from '../../../components/BaseKit/BaseText/BaseText';
import Box from '../../../components/BaseKit/Box/Box';
import Divider from '../../../components/BaseKit/Divider/Divider';
import Icon from '../../../components/BaseKit/Icon/Icon';
import type { IconsId } from '../../../components/BaseKit/Icon/generated/icons';
import { makeStyle } from '../../../hooks/makeStyle';
import type { TThemeBase } from '../../../helper/theme';
type IButtonTabs = {
  buttons: Array<{
    icon: IconsId;
    title: string;
    onAction: () => void;
  }>;
};

export const useStyle = makeStyle((theme: TThemeBase) => {
  return theme?.components?.buttons?.buttonTabs;
});

export const ButtonTabs: FC<IButtonTabs> = ({ buttons = [] }) => {
  const styles = useStyle();

  if (buttons.length <= 0) {
    return null;
  }

  return (
    <Box row style={styles?.buttontabsCtn}>
      {buttons.map((e, k) => {
        return (
          <>
            <TouchableNativeFeedback key={k} onPress={() => e.onAction()}>
              <Box row aCenter jCenter style={styles?.item}>
                <Icon name={e.icon} style={styles?.icon} />
                <BaseText style={styles?.title} title={e.title} />
              </Box>
            </TouchableNativeFeedback>
            {k != buttons.length - 1 && (
              <Divider type="v" style={{ height: 34 }} />
            )}
          </>
        );
      })}
    </Box>
  );
};

export default ButtonTabs;
