import type { FC } from 'react';
import React from 'react';
import type { TextStyle } from 'react-native';
import BaseText from '../../BaseKit/BaseText/BaseText';

import merge from 'lodash.merge';
import { makeStyle } from '../../../hooks/makeStyle';
import type { TThemeBase } from '../../../helper/theme';

type ILabel = {
  title: string;
  style?: TextStyle;
};

export const useStyle = (props?: TextStyle) =>
  makeStyle((theme: TThemeBase) => {
    return merge(theme?.components?.label, props);
  })();

export const Label: FC<ILabel> = ({ title, style }) => {
  const styles = useStyle(style);
  return <BaseText style={styles.title}>{title}</BaseText>;
};

export default Label;
