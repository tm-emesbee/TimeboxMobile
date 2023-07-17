import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform your validation logic here
    if (username === '' || password === '') {
      Alert.alert('Error', 'Please enter a username and password');
    } else {
      // Perform your login logic here
      // For demonstration purposes, we'll just show an alert with the entered username and password
      Alert.alert('Success', `Logged in with username: ${username} and password: ${password}`);
    }
  };

  
  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
