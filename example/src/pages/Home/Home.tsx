import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DEFAULTSTYLES} from '../../utils/utils/styles';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FONT_FAMILY_BOLD, SIZES} from '../../utils/utils/constants';

type Props = {};

const routes = [
  {
    title: '🎠  Carousel Parallax',
    route: 'CarouselParallax',
  },
  {
    title: '🎯  Roulette',
    route: 'Roullete',
  },
  {
    title: '🎫   Events',
    route: 'EventsCalendar',
  },
  {
    title: '🐍  Rope Snap',
    route: 'RopeSnap',
  },
  {
    title: '💠  Mesh',
    route: 'Mesh',
  },
  {
    title: '🪨 Nature LP',
    route: 'Naturelp',
  },
  {
    title: '🏺 Rotate 360',
    route: 'Rotate360',
  },
  {
    title: '📔 Book Gallery',
    route: 'BookGallery',
  },
  {
    title: '🧠 Memory Game',
    route: 'MemoryGame',
  },
  {
    title: '📊 Skia + Visx',
    route: 'Visx',
  },
  {
    title: '🌊 Wave',
    route: 'Wave',
  },
  {
    title: '🎆 Shaders',
    route: 'Shaders',
  },
  {
    title: '⌒ Sin and Cos',
    route: 'SinCos',
  },
];
const Home = (props: Props) => {
  const {navigate} = useNavigation();
  return (
    <ScrollView style={DEFAULTSTYLES.containerPadding}>
      {routes.map(e => {
        return (
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              navigate(e.route);
            }}
            style={styles.routeItem}>
            <Text style={styles.title}>{e.title}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  routeItem: {
    padding: SIZES.size_10,
    borderBottomColor: '#d9d9d9',
    borderBottomWidth: 1,
  },
  title: {
    fontFamily: FONT_FAMILY_BOLD,
    color: '#000',
    fontSize: SIZES.size_14,
    textTransform: 'uppercase',
  },
});
