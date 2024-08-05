module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src'],
        alias: {
          '@screens': './src/screens',
          '@redux': './src/redux',
          '@components': './src/components',
          '@assets': './src/assets',
          '@utils': './src/utils',
          '@services': './src/services',
          '@navigation': './src/navigation',
          '@types': './src/types',
          '@theme': './src/theme',
          '@translations': './src/translations',
          '@constants': './src/constants',
          '@api': './src/api',
          '@instances': './src/instances',
          '@models': './src/models',
          '@schemas': './src/schemas',
        },
      },
    ],
  ],
};
