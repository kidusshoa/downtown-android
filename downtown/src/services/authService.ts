import * as SecureStore from 'expo-secure-store';
import { LoginFormData, RegisterFormData, AuthResponse } from '../types/auth';
import { api } from './api';

export const login = async (data: LoginFormData): Promise<AuthResponse> => {
  return api.post<AuthResponse>('/auth/login', data);
};

export const register = async (data: RegisterFormData): Promise<AuthResponse> => {
  return api.post<AuthResponse>('/auth/register', data);
};

export const logout = async (): Promise<void> => {
  // Clear the token from the API instance
  api.setAuthToken(null);
  // Clear the token from secure storage
  await SecureStore.deleteItemAsync('auth_token');
};

export const setAuthToken = (token: string | null): void => {
  api.setAuthToken(token);
  
  if (token) {
    // Also store the token in secure storage for persistence
    SecureStore.setItemAsync('auth_token', token);
  }
};
