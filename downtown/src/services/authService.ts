import { LoginFormData, RegisterFormData, AuthResponse } from '../types/auth';
import api from './api';

export const login = async (data: LoginFormData): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/auth/login', data);
  return response.data;
};

export const register = async (data: RegisterFormData): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/auth/register', data);
  return response.data;
};

export const logout = async (): Promise<void> => {
  // Clear the token from the API instance
  delete api.defaults.headers.common['Authorization'];
  // You might want to clear other auth-related data here
};

export const setAuthToken = (token: string): void => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};
