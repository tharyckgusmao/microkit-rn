import type { FC, ReactNode } from 'react';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import BaseText, { IBaseText } from '../../../components/BaseKit/BaseText/BaseText';
import Box from '../../../components/BaseKit/Box/Box';
import FastImage from 'react-native-fast-image';
import Icon from '../../../components/BaseKit/Icon/Icon';
import { makeStyle } from '../../../hooks/makeStyle';
import type { TThemeBase } from '../../../helper/theme';

import type { Source } from 'react-native-fast-image';
import type { ImageStyle } from 'react-native';
import type { ViewStyle } from 'react-native';
import type { TextStyle } from 'react-native';
import type { TextProps } from 'react-native';

export const useStyle = makeStyle((theme: TThemeBase) => {
  return theme?.components?.display?.card;
});
type TCard = {
  title?: string | ReactNode;
  description?: string | ReactNode;
  src?: number | Source | undefined;
  mode?: 'left' | 'bottom' | 'right';
  showButton?: boolean;
  disabled?: boolean;
  resizeMode?: 'contain' | 'cover';
  styleImage?: ImageStyle;
  style?: ViewStyle;
  stylesWrapper?: ViewStyle;
  styleTitle?: TextStyle;
  styleDescription?: TextStyle;
  propsTitle?: IBaseText;
  propsDescription?: IBaseText;
  button?: ReactNode | null;
  titleInText?: boolean;
  buttonMode?: 'center' | 'left' | 'end';
  infoMode?: 'normal' | 'invert';
  onClick?: () => void;
};

const Card: FC<TCard> = ({
  title,
  description,
  src,
  mode = 'left',
  showButton = true,
  disabled = true,
  resizeMode = 'contain',
  stylesWrapper,
  styleImage,
  styleTitle,
  propsTitle,
  styleDescription,
  propsDescription,
  style,
  button,
  buttonMode = 'center',
  infoMode = 'normal',
  titleInText = true,
  onClick,
}) => {
  const styles = useStyle();
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={{ ...styles?.ctn, ...style }}
      disabled={disabled}
      onClick={onClick}
    >
      <Box style={{ ...styles?.[`${mode}`], ...stylesWrapper }} flex={1}>
        <FastImage
          source={src}
          resizeMode={resizeMode}
          style={{
            ...styles?.image,
            ...styleImage,
          }}
        />
        <Box column style={styles?.[`info${infoMode}`]}>
          {title ? (
            titleInText ? (
              <BaseText
                title={title}
                {...propsTitle}
                style={{ ...styles?.title, ...styleTitle }}
              />
            ) : (
              title
            )
          ) : null}
          {description ? (
            typeof description === 'string' ? (
              <BaseText
                title={description}
                {...propsDescription}
                style={{ ...styles?.description, ...styleDescription }}
              />
            ) : (
              description
            )
          ) : null}
        </Box>
      </Box>

      {
        showButton
          ? button || (
            <Box row style={styles?.[`button${buttonMode}`]}>
              <Box row style={styles?.buttonCtn} jCenter aCenter>
                <Icon name="icon_arrowrightbold" style={styles?.icon} />
              </Box>
            </Box>
          )
          : null
      }
    </TouchableOpacity >
  );
};

export default Card;
