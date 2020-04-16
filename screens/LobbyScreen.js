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

const styles = StyleSheet.create({
  createRoom: {
    alignSelf: 'flex-end',
    flexWrap: 'nowrap',
    backgroundColor: '#3498DB',
    borderBottomColor: '#2980B9',
    borderBottomWidth: '5px',
    textAlign: 'center',
    borderRadius: '15px',
    paddingHorizontal: '20px',
    zIndex: '99',
    color: '#fff'
  }
});

const LobbyScreen = ({ route, navigation }) => {
  const { title, id, username } = route.params;

  const [fetchedLobbies, setFetchedLobbies] = useState([]);

  useEffect(() => {
    console.log('inside useEffect');
    getLobbies(id);
  }, []);

  async function getLobbies(id) {
    console.log('inside this function');
    await fetch(`http://localhost:3000/lobbies/${id}`)
      .then((data) => data.json())
      .then((myJson) => {
        setFetchedLobbies(myJson);
      });
  }

  const lobbies = [
    "Eliot's lobby",
    "Brian's lobby",
    "Tyler's lobby",
    "James' lobby"
  ];
  console.log('fetched LOBBIES', fetchedLobbies);
  return (
    <View>
      <TouchableOpacity>
        <Text
          style={styles.createRoom}
          lobbyId={id}
          onPress={() =>
            navigation.push('CreateRoom', {
              title,
              lobbyId: id,
              username
            })
          }
        >
          Create Room
        </Text>
      </TouchableOpacity>
      <ScrollView>
        {fetchedLobbies !== undefined
          ? fetchedLobbies.map((elem, i) => {
              return (
                <ListItem
                  key={i}
                  title={elem.name}
                  onPress={() =>
                    navigation.push('ChatRoomScreen', {
                      title: elem.name,
                      username
                    })
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
