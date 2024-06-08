module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo'
      // other presets can be added here if needed
    ],
    plugins: [
      // other plugins can be added here if needed
      'react-native-reanimated/plugin',
    ],
  };
};
