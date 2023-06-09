import 'dotenv/config'

export default {
  expo: {
    name: 'AI Post Chat',
    slug: 'openai-midjourney-and-expo',
    version: '1.0.1',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff'
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff'
      },
      package: 'com.snapverse.aipostchat'
    },
    web: {
      favicon: './assets/favicon.png'
    },
    extra: {
      openaiApiKey: process.env.OPENAI_API_TOKEN,
      eas: {
        projectId: '07c0baa8-c7dc-42be-a31e-534bab1c93ef'
      }
    }
  }
}
