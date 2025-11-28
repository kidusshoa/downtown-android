export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData extends LoginFormData {
  name: string;
  confirmPassword: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
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
