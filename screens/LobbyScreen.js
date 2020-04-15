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

const LobbyScreen = ({ route, navigation }) => {
  const { title } = route.params;

  async function getLobbies(id) {
    await fetch(`http://localhost:3000/lobbies`)
      .then((data) => data.json())
      .then((myJson) => console.log(myJson));
  }
  getLobbies();

  // const lobbies = getLobbies(title);
  const lobbies = ['eliot', 'brian', 'tyler', 'james'];

  return (
    <View>
      <Text>Lobby</Text>
      <Text>{title}</Text>
      <ScrollView>
        {lobbies
          ? lobbies.map((elem, i) => {
              return (
                <Button
                  key={i}
                  title={elem}
                  onPress={() => navigation.push('RoomScreen', { title: elem })}
                />
              );
            })
          : null}
      </ScrollView>
    </View>
  );
};

export default LobbyScreen;
