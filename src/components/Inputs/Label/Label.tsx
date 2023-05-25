import type { FC } from 'react';
import React from 'react';
import BaseText from '../../BaseKit/BaseText/BaseText';
import { useStyle } from './styles';
import type { TextStyle } from 'react-native';

type ILabel = {
  title: string;
  style?: TextStyle;
};

export const Label: FC<ILabel> = ({ title, style }) => {
  const styles = useStyle(style);
  return <BaseText style={styles.title}>{title}</BaseText>;
};

export default Label;
