import FastImage, { Source } from 'react-native-fast-image';
import Box from '../../BaseKit/Box/Box';
import Divider from '../../BaseKit/Divider/Divider';
import Icon from '../../BaseKit/Icon/Icon';
import Button from '../../Buttons/Button/Button';
import type { FC } from 'react';
import { makeStyle } from '../../../hooks/makeStyle';
import type { TThemeBase } from '../../../helper/theme';
import type { ViewStyle } from 'react-native';
import React from 'react';
import BaseText from '../../BaseKit/BaseText/BaseText';
type IGenericCard = {
  title: string;
  image?: number | Source | undefined;
  button?: string | null;
  description?: string | JSX.Element;
  loading?: boolean;
  styleImage?: ViewStyle;
  onClick?: () => void;
};
export const useStyle = makeStyle((theme: TThemeBase) => {
  return theme?.components?.display?.generic;
});

export const GenericCard: FC<IGenericCard> = ({
  title,
  image,
  button,
  loading,
  description,
  styleImage,
  onClick,
}) => {
  const styles = useStyle();

  return (
    <Box column>
      <Box style={{ ...styles?.image, ...styleImage }}>
        <FastImage
          source={image}
          style={{
            width: '100%',
            height: '100%',
          }}
          resizeMode="cover"
        />
      </Box>
      <Box style={styles?.title_subtitle} jStart aStart column>
        <BaseText style={styles?.title} title={title} />
        <BaseText style={styles?.description} title={description} />
      </Box>
      {button && (
        <>
          <Divider type="h" spaccingBottom={20} spaccingTop={20} />

          <Button
            title={button}
            onPress={() => {
              onClick && onClick();
            }}
            loading={loading}
            suffix={<Icon name={'icon_arrowrightbold'} />}
          />
        </>
      )}
    </Box>
  );
};

export default GenericCard;
