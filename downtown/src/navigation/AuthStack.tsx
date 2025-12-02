import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackParamList } from './types';
import LoginScreen from '../screens/auth/LoginScreen';

const Stack = createStackNavigator<AuthStackParamList>();

// This is a wrapper component to prevent duplicate screen names
const AuthFlow = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      {/* Add other auth screens here */}
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return <AuthFlow />;
};

export default AuthStack;
