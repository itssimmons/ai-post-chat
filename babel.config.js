module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          envName: 'APP_ENV',
          moduleName: '@env',
          path: '.env',
          blocklist: null,
          allowlist: [
            'MIDJOURNEY_API_TOKEN',
            'OPENAI_API_TOKEN',
            'CONFIG_STORE_KEY',
            'SESSION_STORE_KEY'
          ],
          safe: false,
          allowUndefined: true,
          verbose: false
        }
      ],
      [
        'module-resolver',
        {
          alias: {
            '#': './src',
            assets: './assets'
          },
          extensions: ['.js', '.jsx', '.tsx', '.ios.js', '.android.js']
        }
      ]
    ]
  }
}
