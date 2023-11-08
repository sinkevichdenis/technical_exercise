module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    '@babel/plugin-transform-class-static-block',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          api: ['./src/api'],
          components: ['./src/components'],
          features: ['./src/features'],
          hooks: ['./src/hooks'],
          styles: ['./src/styles'],
          utils: ['./src/utils'],
          types: ['./src/types.ts'],
          __mocks__: ['./src/__mocks__'],
        },
      }
    ]
  ],
};
