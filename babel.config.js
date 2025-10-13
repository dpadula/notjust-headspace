module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      [
        '@babel/preset-flow',
        'babel-preset-expo',
        { jsxImportSource: 'nativewind' },
      ],
      'nativewind/babel',
    ],
    plugins: ['react-native-worklets/plugin'],
  };
};
