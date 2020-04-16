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
  const { title, id } = route.params;

  console.log('[id, title]: ', [id, title]);
  let fetchedLobbies;

  async function getLobbies(id) {
    console.log('inside this function');
    await fetch(`http://localhost:3000/lobbies/${id}`)
      .then((data) => data.json())
      .then((myJson) => {
        console.log('fetched data');
        fetchedLobbies = myJson;
        console.log(myJson);
      });
  }

  React.useEffect(() => {
    getLobbies(id);
  });

  // getLobbies(id);

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
                  title={elem}
                  onPress={() =>
                    navigation.push('ChatRoomScreen', { title: elem })
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
