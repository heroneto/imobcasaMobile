module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    "plugins": [
      [
        "module-resolver",
        {
          "root": ["./"],
          "alias": {
            "@lead-management": "./src/lead-management",
            "@core": "./src/core",
            "@commons": "./src/commons"
          }
        },
      ],
    ],
  };
};
