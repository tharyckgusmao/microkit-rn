import { useNavigation } from '@react-navigation/native';
import type { APPTheme } from '../../App';
import React from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { Divider, Icon, makeStyle } from 'react-native-microkit-rn';

const routes = [
  {
    title: 'Icons',
    route: 'Icons',
  },
  {
    title: 'Input',
    route: 'Input',
  },
  {
    title: 'Buttons',
    route: 'Buttons',
  },
  {
    title: 'Data Display',
    route: 'DataDisplay',
  },
  {
    title: 'Loaders',
    route: 'Loaders',
  },
  {
    title: 'Transitions',
    route: 'Transitions',
  },
];

const useStyle = makeStyle((theme: APPTheme) => {
  return {
    container: { ...theme?.base?.layout?.container },
    routeItem: {
      padding: theme?.base?.spacing?.['04'],
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      fontFamily: theme?.base?.font?.['500'],
      color: '#000',
      fontSize: theme?.base?.size?.primary,
      textTransform: 'uppercase',
    },
  };
});

const Home = () => {
  const { navigate } = useNavigation();
  const styles = useStyle();

  return (
    <ScrollView style={styles.container}>
      {routes.map((e, k) => {
        return (
          <>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                navigate(e.route);
              }}
              style={styles.routeItem}
              key={k}
            >
              <Text style={styles.title}>{e.title}</Text>
              <Icon name="icon_arrowrightbold" />
            </TouchableOpacity>
            <Divider type="h" spaccingTop={10} spaccingBottom={10} />
          </>
        );
      })}
    </ScrollView>
  );
};

export default Home;
