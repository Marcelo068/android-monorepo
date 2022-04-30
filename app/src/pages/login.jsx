import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

const Login = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Text>Sign in</Text>
      <Text>Sign in and start managing your candidates!</Text>
      <TextInput
        style={styles.input}
        placeholder="Login"
        placeholderTextColor="#FFFFFF"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        keyboardType="numeric"
        placeholderTextColor="#FFFFFF"
      />
      <Text style={styles.text}>Forgot Password</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5E5E5',
  },
  input: {
    width: 300,
    height: 45,
    backgroundColor: '#224957',
    borderRadius: 10,
    color: '#FFFFFF',
    fontSize: 14,
    paddingHorizontal: 20,
    marginBottom: 30
  },
  button: {
    height: 45,
    width: 300,
    backgroundColor: '#20DF7F',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'blue',
    fontSize: 30,
    fontFamily: 'LexendDeca-Bold'
  }
});