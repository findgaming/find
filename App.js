import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import GameMenuScreen from './screens/GameMenuScreen';
import LobbyScreen from './screens/LobbyScreen';

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: 'Find!' }}
      />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="GameMenuScreen" component={GameMenuScreen} />
      <Stack.Screen name="LobbyScreen" component={LobbyScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
