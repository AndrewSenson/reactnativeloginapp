import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screen/LoginScreen';
import SignupScreen from '../screen/SignUpScreen';
import WelcomeScreen from '../screen/WelcomeScreen'; 
import useAuth from '../hooks/useAuth';

const Stack = createStackNavigator();

export default function Navigation() {
  const {user} = useAuth();
  if(user){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">     
        <Stack.Screen name="Welcome" component={WelcomeScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  )
}
else{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}}
