import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

// create room and set it to DATABASE
const CreateRoom = ({ route }) => {
  const admin = 1;
  const { lobbyId } = route.params;
  const [roomName, setRoomName] = useState('');
  const [players, setPlayers] = useState(0);
  const [start, setStart] = useState('12:00:00');
  // console.log('coming from lobbyID:', lobbyId);
  // console.log('coming from roomName:', roomName);
  // console.log('coming from players:', players);
  // console.log('coming from start:', start);

  // object to send in POST request
  const newRoomBody = {
    lobby_id: lobbyId,
    start_time: start,
    name: roomName,
    admin
  };

  // function to wrap everything in object and send off to backend
  function submitNewRoom() {
    console.log(newRoomBody, 'success in new room');
    fetch(`http://localhost:3000/rooms`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(newRoomBody)
    })
      .then(data => data.json())
      .then(myJson => {
        console.log(myJson);
      })
      .catch(err => {
        console.log(`error: ${err}`);
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.lobbyName}>Room Name</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={value => setRoomName(value)}
      />
      <Text style={styles.players}>Players</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="numeric"
        onChangeText={value => setPlayers(value)}
      />
      <Text style={styles.startTime}>Start Time</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Please enter time in form of HH:mm:00"
        onChangeText={value => setStart(value)}
      />

      {/* move this initial KEY logic as entered KEY into chat rooms */}
      {/* 
      <Text style={styles.initialKey}>Initial Key</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
      /> */}

      <TouchableOpacity style={styles.create}>
        <Text
          onPress={() => {
            submitNewRoom();
          }}
          style={styles.createText}
        >
          Create
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fffff0'
  },
  lobbyName: {
    marginTop: 75,
    color: '#1e73be',
    fontSize: 30,
    fontFamily: 'Arial',
    fontWeight: '600'
  },
  players: {
    color: '#1e73be',
    fontSize: 30,
    fontFamily: 'Arial',
    fontWeight: '600'
  },
  startTime: {
    color: '#1e73be',
    fontSize: 30,
    fontFamily: 'Arial',
    fontWeight: '600'
  },
  initialKey: {
    color: '#1e73be',
    fontSize: 30,
    fontFamily: 'Arial',
    fontWeight: '600'
  },
  create: {
    marginLeft: 300,
    marginTop: 100,
    borderWidth: 0.15,
    backgroundColor: '#fffaf0'
  },
  createText: {
    color: '#1e73be',
    fontSize: 30,
    fontFamily: 'Arial',
    fontWeight: '600'
  },
  input: {
    height: 40,
    width: 350,
    borderColor: 'gray',
    borderWidth: 0.5,
    textAlign: 'center',
    opacity: 1,
    borderRadius: 5,
    fontSize: 17.5,
    marginBottom: 60,
    marginTop: 10
  }
});

export default CreateRoom;
