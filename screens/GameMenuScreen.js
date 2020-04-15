import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';
import { ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';

const games = [
  {
    title: 'Trivia Murder Party'
  },
  {
    title: 'Role Models'
  },
  {
    title: 'Joke Boat'
  },
  {
    title: 'Dictionarium'
  },
  {
    title: 'Push The Button'
  },
  {
    title: 'Quiplash'
  },
  {
    title: "You Don't Know Jack"
  },
  {
    title: 'Split the Room'
  },
  {
    title: 'Mad Verse City'
  },
  {
    title: 'Zeeple Dome'
  },
  {
    title: 'Patently Stupid'
  },
  {
    title: 'Fibbage'
  }
];

const GameMenuScreen = ({ navigation }) => {
  return (
    <View>
      <ScrollView>
        {games.map((item, i) => {
          return (
            <Button
              key={i}
              title={item.title}
              onPress={() =>
                navigation.push('LobbyScreen', { title: item.title })
              }
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default GameMenuScreen;
