import * as SecureStore from 'expo-secure-store';
import { LoginFormData, RegisterFormData, AuthResponse } from '../types/auth';
import { api } from './api';

export const login = async (data: LoginFormData): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/auth/login', {
    emailOrUsername: data.emailOrUsername,
    password: data.password
  });
  // Store the access token
  if (response.accessToken) {
    await SecureStore.setItemAsync('auth_token', response.accessToken);
  }
  return response;
};

export const register = async (data: RegisterFormData): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/auth/register', {
    name: data.name,
    email: data.email,
    username: data.username,
    password: data.password
    // confirmPassword is typically not sent to the backend
  });
  return response;
};

export const logout = async (): Promise<void> => {
  api.setAuthToken(null);
  await SecureStore.deleteItemAsync('auth_token');
};

export const setAuthToken = async (token: string | null): Promise<void> => {
  api.setAuthToken(token);
  if (token) {
    await SecureStore.setItemAsync('auth_token', token);
  }
};