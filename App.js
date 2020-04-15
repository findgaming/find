import React, { Component } from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    createHomeStack = () => (
      <Stack.Navigator>
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    );
    return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='HomeScreen' component={HomeScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
    )
  }
}
