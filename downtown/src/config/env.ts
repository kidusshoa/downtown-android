import Constants from 'expo-constants';

type Env = {
  API_URL: string;
  ENABLE_FLIPPER?: string;
};

const ENV = Constants.expoConfig?.extra as Env | undefined;

export const API_URL = ENV?.API_URL || 'http://localhost:4000/api';
export const ENABLE_FLIPPER = ENV?.ENABLE_FLIPPER === 'true';

export default {
  API_URL,
  ENABLE_FLIPPER,
};
