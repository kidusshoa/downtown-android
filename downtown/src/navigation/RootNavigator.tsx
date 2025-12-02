import React, { useState, useEffect, useCallback } from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ActivityIndicator, View } from 'react-native';
import * as SecureStore from 'expo-secure-store';

import { RootStackParamList } from './types';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import SplashScreen from '../screens/SplashScreen';
import { setAuthToken } from '../services/authService';

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigationRef = useNavigationContainerRef();

  // Check if user is logged in
  const checkAuth = useCallback(async () => {
    try {
      // Check if we have a token in secure storage
      const token = await SecureStore.getItemAsync('auth_token');
      if (token) {
        // Set the auth token in the API client
        setAuthToken(token);
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error('Error checking auth status', error);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  // This effect will run when the navigation ref is ready
  useEffect(() => {
    if (!navigationRef.isReady()) return;

    // Listen for navigation state changes to update auth state
    const unsubscribe = navigationRef.addListener('state', () => {
      checkAuth();
    });

    return unsubscribe;
  }, [navigationRef, checkAuth]);

  // Show loading indicator while checking auth state
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator 
        screenOptions={{ headerShown: false }}
        initialRouteName={isAuthenticated ? 'App' : 'Auth'}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="App" component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
