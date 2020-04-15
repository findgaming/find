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

const ChatRoomScreen = ({ route, navigation }) => {
  const { title } = route.params;
  const [myMessage, setMyMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState({});

  useEffect(() => {
    setSocket(io('http://127.0.0.1:3000'));
    socket.on('string param should match what backend emits');
    socket.on('chat message', (msg) => {
      setMessages(messages.push(msg));
    });
  }, []);

  const chatMessages = messages.map((chatMessage) => (
    <Text style={{ borderWidth: 2, top: 500 }}>{chatMessage}</Text>
  ));

  function submitChatMessage() {
    // socket.emit('chat message', myMessage);
    console.log(myMessage);
    setMyMessage('');
  }

  return (
    <View>
      {chatMessages}
      <TextInput
        style={{ height: 40, borderWidth: 2, top: 600 }}
        autoCorrect={false}
        value={myMessage}
        onSubmitEditing={submitChatMessage}
        onChangeText={(value) => setMyMessage(value)}
      />
    </View>
  );
};

export default ChatRoomScreen;
