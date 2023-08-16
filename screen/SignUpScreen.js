import React, { useState } from 'react';
import { View, Text, TextInput, Button,  StyleSheet ,TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, firestore } from '../config/firebase';

const SignupScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('');

  const nationalities = [
    'USA',
    'Canada',
    'UK',
    'Australia',
    'India',
    'other',
  ];

  const handleSignup = async () => {
    if(email && password) {
      try{
        const userCredential =  await createUserWithEmailAndPassword(auth, email, password);
     const user = userCredential.user;
    
     await firestore.collection('users').doc(user.uid).set({
      firstName,
      lastName,
      email,
      nationality,
    });
  
      navigation.navigate('Login');
    } catch (error) {
      console.error(error);
    }
  }};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Picker
        style={styles.input}
        selectedValue={nationality}
        onValueChange={(itemValue) => setNationality(itemValue)}
      >
        <Picker.Item label="Select Nationality" value="" />
        {nationalities.map((nation) => (
          <Picker.Item label={nation} value={nation} key={nation} />
        ))}
      </Picker>
      <Button title="Sign Up" onPress={handleSignup} />
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginLink}>Already a user? Click here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'blue',
  },
  input: {
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 5,
  },
  loginLink: {
    marginTop: 10,
    color: 'blue',
    textAlign: 'center',
  },
});

export default SignupScreen;
