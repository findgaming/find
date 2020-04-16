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
  Button,
  Clipboard
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
        paddingTop: 10,
        fontFamily: 'Arial',
        fontStyle: 'bold',
        paddingRight: 8,
        paddingLeft: 8,
        paddingBottom: 10,
        borderBottomWidth: 5,
        borderBottomColor: '#2980B9',
        borderRadius: 8,
        boxShadow: '5px 7px 3px 0px rgba(0,0,0,0.75)',
        color: '#fff',
        fontWeight: 900,
        marginTop: 50,
        marginBottom: 10,
        width: 100
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

  socket.on('chat message', msg => {
    setMessages(messages.concat(msg));
  });

  chatMessages = messages.map(chatMessage => {
    return (
      <Text style={styles.chatMessage}>
        {username}: {chatMessage}
      </Text>
    );
  });

  function submitChatMessage() {
    socket.emit('chat message', myMessage);
    console.log(myMessage);
    setMyMessage('');
  }

  console.log('this is play', play);
  return (
    <View>
      <CountDown
        style={{ marginBottom: 10 }}
        until={1}
        onFinish={() => {
          setPlay(true);
        }}
        onPress={() => alert('hello')}
        size={30}
      />
      {play ? (
        <center>
          <View>
            <PlayLink></PlayLink>
          </View>
          <center style={{ textAlign: 'center' }}>
            <TouchableOpacity onPress={() => Clipboard.setString('SCFB')}>
              <View
                style={{
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Text
                  style={{
                    color: '#008000',
                    fontSize: 14,
                    backgroundColor: '#00FF7F',
                    fontFamily: 'Arial',
                    fontWeight: 900,
                    fontStyle: 'bold',
                    textAlign: 'center',
                    paddingTop: 10,
                    paddingRight: 8,
                    paddingLeft: 8,
                    paddingBottom: 10,
                    borderBottomWidth: 5,
                    borderBottomColor: '#008000',
                    boxShadow: '5px 7px 3px 0px rgba(0,0,0,0.75)',
                    marginTop: 10,
                    marginBottom: 10,
                    width: 120,
                    borderRadius: 8
                  }}
                >
                  SCFB
                </Text>
              </View>
            </TouchableOpacity>
          </center>
        </center>
      ) : null}
      <TextInput
        style={styles.input}
        placeholder="Send a message"
        autoCorrect={false}
        value={myMessage}
        onSubmitEditing={submitChatMessage}
        onChangeText={value => setMyMessage(value)}
      />
      <TouchableOpacity>
        <Text
          onPress={() => {
            submitChatMessage;
          }}
        >
          Send
        </Text>
      </TouchableOpacity>
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
    borderRadius: 20
  },
  chatMessage: {
    display: 'flex',
    flex: -1,
    alignItems: 'center',
    paddingLeft: '2%',
    paddingRight: '2%',
    top: 500,
    minHeight: 40,
    backgroundColor: '#3f77c4',
    borderRadius: 20,
    minWidth: '2%',
    color: 'white'
  }
});

export default ChatRoomScreen;
