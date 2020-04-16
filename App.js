import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import CreateRoom from './screens/CreateRoom';
import GameMenuScreen from './screens/GameMenuScreen';
import LobbyScreen from './screens/LobbyScreen';
import ChatRoomScreen from './screens/ChatRoomScreen';

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ title: 'Register' }}
      />
      <Stack.Screen
        name="CreateRoom"
        component={CreateRoom}
        options={{ title: 'Create Room' }}
      />
      <Stack.Screen name="GameMenuScreen" component={GameMenuScreen} />
      <Stack.Screen
        name="LobbyScreen"
        options={({ route }) => ({ title: route.params.title })}
        component={LobbyScreen}
      />
      <Stack.Screen
        name="ChatRoomScreen"
        options={({ route }) => ({ title: route.params.title })}
        component={ChatRoomScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
