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
  const { title } = route.params;
  const [myMessage, setMyMessage] = useState('');
  const [messages, setMessages] = useState([]);
  let chatMessages;

  // useEffect(() => {}, []);

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
        // style={{ height: 40, borderWidth: 2, top: 600 }}
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
    height: 40,
    borderWidth: 2,
    top: 600
  },
  chatMessage: {
    borderWidth: 2,
    top: 500,
    backgroundColor: 'blue',
    color: 'white'
  }
});

export default ChatRoomScreen;
