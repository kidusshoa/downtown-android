export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
};

export type AppStackParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
};

export type RootStackParamList = {
  Splash: undefined;
  Auth: undefined;
  App: undefined;
  // Keep these for backward compatibility
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  Main: undefined;
  [key: string]: undefined | object;
};
