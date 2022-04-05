module.exports = {
  webpackFinal: async (config) => {
    config.module.rules[5].oneOf[2].use = ['@svgr/webpack'];
    config.module.rules.forEach((rule, i) => console.log(i, rule));
    return config;
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  }
}
