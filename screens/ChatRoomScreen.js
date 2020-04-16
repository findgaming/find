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

// const styles = StyleSheet.create({
//   playButton: {
//     alignSelf: 'center',
//     flexWrap: 'nowrap',
//     backgroundColor: '#3498DB',
//     borderBottomColor: '#2980B9',
//     borderBottomWidth: '5px',
//     textAlign: 'center',
//     borderRadius: '15px',
//     paddingHorizontal: '20px',
//     zIndex: '99',
//     color: '#fff'
//   }
// });

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

  // const releaseGameLink = () => {
  //   // alert('WORKED');
  //   // alert('WORKED2');
  //   let returnLink = 'booogie';
  //   console.log('return element');
  //   return returnLink;
  // };

  // returnLink ? console.log('this is returnlink', returnLink) : null;
  console.log('this is play', play);
  return (
    <View>
      <CountDown
        until={1}
        onFinish={() => {
          // releaseGameLink();
          setPlay(true);
        }}
        onPress={() => alert('hello')}
        size={30}
      />
      {play ? <PlayLink></PlayLink> : null}
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
    borderRadius: '20px'
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
    borderRadius: '20px',
    minWidth: '2%',
    color: 'white'
  }
});

export default ChatRoomScreen;
