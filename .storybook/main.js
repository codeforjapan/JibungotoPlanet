const path = require("path");

module.exports = {
  stories: ["../components/**/*.stories.@(js|jsx|ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@chakra-ui/storybook-addon",
  ],

  framework: {
    name: "@storybook/nextjs",
    options: {}
  },

  typescript: {
    reactDocgen: false,
  },

  features: {
    emotionAlias: false,
  },

  staticDirs: ['../public', '../styles'],

  webpackFinal: async (config) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, '../'),
    ]

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    // Return the altered config
    return config;
  },

  docs: {}
}
