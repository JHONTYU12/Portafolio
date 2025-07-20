import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  "stories": [
    "../src/design-system/**/*.stories.@(js|jsx|mjs|tsx)"
  ],
  "addons": [
    "@storybook/preset-create-react-app",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding"
  ],
  "framework": {
    "name": "@storybook/react-webpack5",
    "options": {}
  },
  "staticDirs": [
    "../public"
  ]
};
export default config;