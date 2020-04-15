import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find!</Text>
      <TextInput
        style={styles.username}
        placeholder="username"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.password}
        placeholder="password"
        autoCapitalize="none"
      />
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.login}>
          <Text style={styles.loginButton}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={styles.registerButton}
            onPress={() => navigation.push('RegisterScreen')}
          >
            Register
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
    alignItems: 'center'
  },
  title: {
    color: '#1e73be',
    fontSize: 45,
    fontFamily: 'Arial',
    fontWeight: '600'
  },
  username: {
    height: 40,
    width: 120,
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center',
    opacity: 1,
    borderRadius: 10,
    margin: 20
  },
  password: {
    height: 40,
    width: 120,
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center',
    opacity: 1,
    borderRadius: 10,
    margin: -10
  },
  buttons: {
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  login: {
    margin: 20
  },
  loginButton: {
    fontSize: 30,
    fontFamily: 'Arial',
    color: '#1e73be',
    textDecorationLine: 'underline',
    fontWeight: '500'
  },
  registerButton: {
    fontSize: 30,
    fontFamily: 'Arial',
    color: '#1e73be',
    textDecorationLine: 'underline',
    fontWeight: '500'
  }
});

export default HomeScreen;
