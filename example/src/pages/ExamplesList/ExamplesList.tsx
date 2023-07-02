import { useNavigation } from '@react-navigation/native';
import type { APPTheme } from '../../App';
import React from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { Divider, Icon, makeStyle } from 'react-native-microkit-rn';

const routes = [
  {
    title: 'Range',
    route: 'Range',
  },
  {
    title: 'Auth',
    route: 'Auth',
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

const ExamplesList = () => {
  const { navigate } = useNavigation();
  const styles = useStyle();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 60 }}
    >
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

export default ExamplesList;
