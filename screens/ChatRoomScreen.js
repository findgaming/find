import React, { useState, useEffect } from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  Button
} from 'react-native';
import { ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import io from 'socket.io-client';

import { MonoText } from '../components/StyledText';

const socket = io('http://localhost:3000');

const ChatRoomScreen = ({ route, navigation }) => {
  const { title, username } = route.params;
  const [myMessage, setMyMessage] = useState('');
  const [messages, setMessages] = useState([]);
  let chatMessages;

  socket.on('chat message', (msg) => {
    setMessages(messages.concat(msg));
  });

  chatMessages = messages.map((chatMessage) => {
    return <Text style={styles.chatMessage}>{chatMessage}</Text>;
  });

  function submitChatMessage() {
    socket.emit('chat message', myMessage);
    console.log(myMessage);
    setMyMessage('');
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        autoCorrect={false}
        value={myMessage}
        onSubmitEditing={submitChatMessage}
        onChangeText={(value) => setMyMessage(value)}
      />
      {chatMessages}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    display: 'flex',
    alignItems: 'center',
    height: 40,
    borderWidth: 2,
    paddingLeft: '2%',
    paddingRight: '2%',
    top: 600,
    borderRadius: '20px'
  },
  chatMessage: {
    display: 'flex',
    flex: -1,
    alignItems: 'center',
    paddingLeft: '2%',
    paddingRight: '2%',
    // borderWidth: 2,
    top: 500,
    minHeight: 40,
    backgroundColor: '#3f77c4',
    borderRadius: '20px',
    minWidth: '2%',
    color: 'white'
  }
});

export default ChatRoomScreen;
