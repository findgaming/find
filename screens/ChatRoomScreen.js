import CountDown from 'react-native-countdown-component';
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

const PlayLink = () => (
  <center>
    <a
      style={{
        textDecoration: 'none',
        backgroundColor: '#3498DB',
        paddingTop: '10px',
        paddingRight: '8px',
        paddingLeft: '8px',
        paddingBottom: '10px',
        borderBottomWidth: '5px',
        borderBottomColor: '#2980B9',
        borderRadius: '8px',
        boxShadow: '5px 7px 3px 0px rgba(0,0,0,0.75)',
        color: '#fff',
        fontWeight: '900',
        marginTop: '10px',
        marginBottom: '10px',
        position: 'relative'
      }}
      href="https://jackbox.tv/"
    >
      PLAY NOW
    </a>
  </center>
);

const ChatRoomScreen = ({ route, navigation }) => {
  const { title, username } = route.params;
  const [myMessage, setMyMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [play, setPlay] = useState(false);
  let chatMessages;

  socket.on('chat message', (msg) => {
    setMessages(messages.concat(msg));
  });

  chatMessages = messages.map((chatMessage) => {
    const messageStyle =
      chatMessage.username === username
        ? styles.userMessage
        : styles.otherMessage;

    return (
      <Text style={messageStyle}>
        {chatMessage.username}: {chatMessage.message}
      </Text>
    );
  });

  function submitChatMessage() {
    const messageObj = {
      username: username,
      message: myMessage
    };
    socket.emit('chat message', messageObj);
    console.log(myMessage);
    setMyMessage('');
  }

  return (
    <View>
      <CountDown
        until={1}
        onFinish={() => {
          setPlay(true);
        }}
        onPress={() => alert('hello')}
        size={30}
      />
      {play ? <PlayLink></PlayLink> : null}
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Send a message"
          autoCorrect={false}
          value={myMessage}
          onSubmitEditing={submitChatMessage}
          onChangeText={(value) => setMyMessage(value)}
        />
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.send}
            onPress={() => {
              submitChatMessage;
            }}
          >
            Send
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center'
  },
  input: {
    display: 'flex',
    alignItems: 'center',
    height: 40,
    borderWidth: 2,
    paddingLeft: '2%',
    paddingRight: '2%',
    width: '90%',
    top: 600,
    borderRadius: '20px'
  },
  userMessage: {
    display: 'flex',
    flex: -1,
    alignItems: 'center',
    paddingLeft: '2%',
    paddingRight: '2%',
    top: 500,
    minHeight: 40,
    backgroundColor: '#3f77c4',
    borderRadius: '20px',
    minWidth: '2%',
    color: 'white'
  },
  otherMessage: {
    display: 'flex',
    flex: -1,
    alignItems: 'center',
    paddingLeft: '2%',
    paddingRight: '2%',
    top: 500,
    minHeight: 40,
    backgroundColor: 'lightGrey',
    borderRadius: '20px',
    minWidth: '2%',
    color: 'white'
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    textAlign: 'center',
    backgroundColor: 'green',
    width: '10%',
    height: 40,
    borderRadius: '20px'
  },
  send: {
    color: 'white'
  }
});

export default ChatRoomScreen;
