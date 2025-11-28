export type RootStackParamList = {
  // Auth Stack
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  
  // Main App
  Main: undefined;
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
  
  // Other screens can be added here
  [key: string]: undefined | object;
};
