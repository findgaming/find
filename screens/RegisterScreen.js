import React, { useState } from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const objToSend = {
    username,
    password
  };
  function addUser() {
    fetch(`http://localhost:3000/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(objToSend)
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <View style={styles.container}>
      <Text>Some logo up here</Text>
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
      <TouchableOpacity style={styles.signup}>
        <Text
          style={styles.signupButton}
          onPress={() => navigation.push('GameMenuScreen') || addUser()}
        >
          Sign up
        </Text>
      </TouchableOpacity>
      <Text style={styles.contract}>
        By signing up, you agree to our Terms, Data Policy and Cookies Policy.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffff0',
    marginBottom: 70
  },
  username: {
    height: 40,
    width: 350,
    borderColor: 'gray',
    borderWidth: 0.5,
    textAlign: 'center',
    borderRadius: 5,
    fontSize: 17.5,
    marginBottom: 5
  },
  password: {
    height: 40,
    width: 350,
    borderColor: 'gray',
    borderWidth: 0.5,
    textAlign: 'center',
    borderRadius: 5,
    fontSize: 17.5
  },
  signupButton: {
    fontSize: 30,
    fontFamily: 'Arial',
    color: '#1e73be',
    fontWeight: '500',
    borderWidth: 0.25,
    width: 350,
    textAlign: 'center',
    marginBottom: 50,
    backgroundColor: '#fffaf0',
    marginTop: 20
  },
  contract: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Arial'
  }
});

export default RegisterScreen;
