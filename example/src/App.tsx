import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import {
  Box,
  Divider,
  makeStyle,
  multiply,
  ThemeProvider,
} from 'react-native-microkit-rn';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);

  return (
    <ThemeProvider>
      <View style={styles.container}>
        <Text>Result: {result}</Text>
        <Box column style={{ width: 300 }}>
          <Text>Result: {result}</Text>
          <Divider type="h" size={6} spaccingBottom={10} spaccingTop={10} />
        </Box>
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
