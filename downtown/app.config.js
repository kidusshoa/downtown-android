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
  // For Android emulator
  API_URL: 'http://192.168.1.16:4000',
  
  // For physical device (uncomment and replace with your local IP)
  // API_URL: 'http://YOUR_LOCAL_IP:4000',
  
  // For iOS simulator
  // API_URL: 'http://localhost:4000',
  
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
