import { ViewStyle } from 'react-native';
import { styles } from './styles';
import type { FC } from 'react';
import Box from '../../../components/BaseKit/Box/Box';
import BaseText from '../../../components/BaseKit/BaseText/BaseText';

type INotFound = { title: string; style?: ViewStyle };

export const NotFound: FC<INotFound> = ({ title, style }) => {
  return (
    <Box
      flex={1}
      style={{ ...styles.notfoundCtn, ...style }}
      aCenter
      jCenter
      position="absolute"
      pointerEvents="none"
    >
      <BaseText style={styles.notfoundTitle} title={title} />
    </Box>
  );
};

export default NotFound;
