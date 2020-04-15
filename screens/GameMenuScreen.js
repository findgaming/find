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
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';

const GameMenuScreen = () => {
  return (
    <View>
      <ScrollView>
        <Button title="Trivia Murder Party" />
        <Button title="Role Models" />
        <Button title="Joke Boat" />
        <Button title="Dictionarium" />
        <Button title="Push The Button" />
        <Button title="Quiplash" />
        <Button title="You Don't Know Jack" />
        <Button title="Split the Room" />
        <Button title="Mad Verse City" />
        <Button title="Zeeple Dome" />
        <Button title="Patently Stupid" />
        <Button title="Fibbage" />
      </ScrollView>
    </View>
  );
};

export default GameMenuScreen;
