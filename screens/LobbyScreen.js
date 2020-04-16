import * as WebBrowser from 'expo-web-browser';
import React, { useState, useEffect } from 'react';
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
  const { title, id } = route.params;
  const [fetchedLobbies, setFetchedLobbies] = useState([]);

  console.log('[id, title]: ', [id, title]);

  useEffect(() => {
    console.log('inside useEffect');
    getLobbies(id);
  }, []);

  async function getLobbies(id) {
    console.log('inside this function');
    await fetch(`http://localhost:3000/lobbies/${id}`)
      .then((data) => data.json())
      .then((myJson) => {
        console.log('fetched data');
        setFetchedLobbies(myJson);
        console.log(myJson);
      });
  }

  const lobbies = [
    "Eliot's lobby",
    "Brian's lobby",
    "Tyler's lobby",
    "James' lobby"
  ];

  return (
    <View>
      <ScrollView>
        {fetchedLobbies !== undefined
          ? fetchedLobbies.map((elem, i) => {
              return (
                <ListItem
                  key={i}
                  title={elem.name}
                  onPress={() =>
                    navigation.push('ChatRoomScreen', { title: elem.name })
                  }
                  chevron
                />
              );
            })
          : null}
      </ScrollView>
    </View>
  );
};

export default LobbyScreen;
