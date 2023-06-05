import type { FC } from 'react';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Avatar, type IAvatar } from '../Avatar/Avatar';
import { styles } from './styles';
import Box from '../../../components/BaseKit/Box/Box';
import BaseText from '../../../components/BaseKit/BaseText/BaseText';
import { makeStyle } from '../../../hooks/makeStyle';
import type { TThemeBase } from '../../../helper/theme';
import type { ViewStyle } from 'react-native';
type IAvatarGroup = {
  title?: number | string;
  items: IAvatar[] | [];
  stylesTitle?: ViewStyle;
  onClick?: () => void;
};
export const useStyle = makeStyle((theme: TThemeBase) => {
  return theme?.components?.display?.avatargroup;
});
export const AvatarGroup: FC<IAvatarGroup> = ({
  title = 0,
  items = [],
  stylesTitle,
  onClick,
}) => {
  return items.length > 0 ? (
    <>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles?.ctn}
        onPress={() => {
          if (onClick) {
            onClick();
          }
        }}
      >
        <Box style={styles.avatar} jCenter aCenter row>
          {items?.map((e, k) => {
            return (
              <Avatar
                key={k}
                {...e}
                style={{ ...styles?.image, ...e?.style }}
              />
            );
          })}
        </Box>

        {!!title && (
          <Box
            style={{ ...styles?.titleCtn, ...stylesTitle }}
            jCenter
            aCenter
            column
          >
            <BaseText style={styles?.title} title={title} />
          </Box>
        )}
      </TouchableOpacity>
    </>
  ) : null;
};

export default AvatarGroup;
