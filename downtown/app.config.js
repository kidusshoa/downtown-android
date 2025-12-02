module.exports = {
  expo: {
    name: 'downtown',
    slug: 'downtown',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    plugins: [
      'expo-secure-store',
      [
        'expo-build-properties',
        {
          android: {
            compileSdkVersion: 33,
            targetSdkVersion: 33,
            buildToolsVersion: '33.0.0'
          },
          ios: {
            useFrameworks: 'static'
          }
        }
      ]
    ],
    extra: {
      // For development, use your local IP address (run 'ipconfig' on Windows or 'ifconfig' on macOS/Linux to find it)
      // Example: 'http://192.168.1.x:4000'
      API_URL: process.env.EXPO_PUBLIC_PRIVATE_URL || (process.env.NODE_ENV === 'production' 
        ? 'https://your-production-api.com' 
        : 'http://localhost:4000'),
      enableFlipper: process.env.ENABLE_FLIPPER || 'false',
    },
    splash: {
      image: null, // We're using a custom splash screen component
      resizeMode: 'contain',
      backgroundColor: '#ffffff'
    },
    assetBundlePatterns: [
      '**/*'
    ],
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff'
      },
      package: 'com.downtown.app'
    },
    web: {
      favicon: './assets/favicon.png'
    }
  }
};
