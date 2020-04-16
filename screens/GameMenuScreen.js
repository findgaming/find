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
    id: '14',
    title: 'Quip Lash 2'
  },
  {
    id: '15',
    title: 'Trivia Murder Party'
  },
  {
    id: '16',
    title: 'Guesspionage'
  },
  {
    id: '17',
    title: "Fakin' It"
  },
  {
    id: '18',
    title: 'Tee K.O.'
  }
];

const GameMenuScreen = ({ route, navigation }) => {
  const { username } = route.params;

  return (
    <View>
      <ScrollView>
        {games.map((item, i) => {
          return (
            <ListItem
              key={i}
              title={item.title}
              onPress={() =>
                navigation.push('LobbyScreen', {
                  title: item.title,
                  id: item.id,
                  username
                })
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
