import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppStackParamList } from './types';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator<AppStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          title: 'Home',
          headerShown: false,
        }}
      />
      {/* Add other app screens here */}
    </Stack.Navigator>
  );
};

export default AppStack;
