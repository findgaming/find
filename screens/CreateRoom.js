import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

// create room and set it to DATABASE
const CreateRoom = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.lobbyName}>Room Name</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Text style={styles.players}>Players</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="numeric"
      />
      <Text style={styles.startTime}>Start Time</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Please enter time in form of HH:mm:00"
      />

      <Text style={styles.initialKey}>Initial Key</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
      />

      <TouchableOpacity style={styles.create}>
        <Text style={styles.createText}>Create</Text>
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
