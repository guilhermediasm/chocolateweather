module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '~/pages': './src/pages',
          '~/assets': './src/assets',
          '~/navigation': './src/navigation',
          '~/components': './src/components',
          '~/theme': './src/theme',
          '~/utils': './src/utils',
          '~/stores': './src/stores',
          '~/api': './src/api',
          '~/helpers': './src/helpers',
        },
      },
    ],
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
  ],
};
