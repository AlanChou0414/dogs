module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["@babel/plugin-transform-flow-strip-types"],
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      ["@babel/plugin-proposal-class-properties", { "loose": true }],
      ["module:react-native-dotenv", {
        "envName": "APP_ENV",
        "moduleName": "@env",
        "path": ".env",
      }],
      ["module-resolver", {
        "alias": {
          "@Components": "./app/components",
          "@Styles": "./app/styles",
          "@Hooks": "./app/hooks",
          "@Types": "./app/types",
          "@Api": "./app/constants/api",
          "@Path": "./app/constants/path",
          "@Screens": "./app/screens"
        },
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
        ]
      }],
    ]
  };
};