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

import { MonoText } from '../components/StyledText';

const ChatRoomScreen = ({ route, navigation }) => {
  const { title } = route.params;
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default ChatRoomScreen;
