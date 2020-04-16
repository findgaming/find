import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const objToSend = {
    username,
    password
  };

  function loginUser() {
    fetch(`http://localhost:3000/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(objToSend)
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.username === username) {
          navigation.push('GameMenuScreen', { username });
        } else console.log('someting weird happened');
      })
      .catch((error) => {
        console.error(error);
        alert('Invalid Login!');
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find!</Text>
      <TextInput
        style={styles.username}
        placeholder="Username"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(value) => setUsername(value)}
      />
      <TextInput
        style={styles.password}
        placeholder="Password"
        autoCapitalize="none"
        secureTextEntry={true}
        autoCorrect={false}
        onChangeText={(value) => setPassword(value)}
      />
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.login}>
          <Text
            style={styles.loginButton}
            onPress={() => {
              loginUser();
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={styles.registerButton}
            onPress={() => navigation.push('RegisterScreen')}
          >
            Sign up for Find!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffff0'
  },
  title: {
    color: '#1e73be',
    fontSize: 45,
    fontFamily: 'Arial',
    fontWeight: '600',
    marginBottom: 20
  },
  username: {
    height: 40,
    width: 350,
    borderColor: 'gray',
    borderWidth: 0.5,
    textAlign: 'center',
    opacity: 1,
    borderRadius: 5,
    fontSize: 17.5
  },
  password: {
    height: 40,
    width: 350,
    borderColor: 'gray',
    borderWidth: 0.5,
    textAlign: 'center',
    opacity: 1,
    borderRadius: 5,
    fontSize: 17.5
  },
  buttons: {
    margin: 20,
    alignItems: 'center'
  },

  loginButton: {
    fontSize: 30,
    fontFamily: 'Arial',
    color: '#1e73be',
    fontWeight: '500',
    borderWidth: 0.25,
    width: 350,
    textAlign: 'center',
    marginBottom: 150,
    backgroundColor: '#fffaf0'
  },
  registerButton: {
    fontSize: 15,
    fontFamily: 'Arial',
    color: '#1e73be',
    fontWeight: '500'
  }
});

export default HomeScreen;
