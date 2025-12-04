

export interface ApiResponse<T> {
  data: T;
  // You can add other common response fields like status, message, etc.
}


export interface AuthState {
  token: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  user: {
    id: string;
    name: string;
    email: string;
  } | null;
}

export interface LoginFormData {
  emailOrUsername: string;  // Changed from 'email' to 'emailOrUsername'
  password: string;
}

export interface RegisterFormData {
  name: string;
  email: string;
  username: string;  // Added username field
  password: string;
  confirmPassword: string;
}

export interface AuthResponse {
  accessToken: string;  // Changed from 'token' to 'accessToken'
  user: {
    id: string;
    email: string;
    username: string;  // Added username field
    role: string;     // Added role field
  };
}