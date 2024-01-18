// import type { Story } from '@storybook/html';

// import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
// import { mergeConfig } from 'vite';

const config = {
  stories: ['../src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions', "@whitespace/storybook-addon-html"],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
  core: {
    builder: "@storybook/builder-vite"
  },
  // viteFinal: async (config) =>
  //   mergeConfig(config, {
  //     plugins: [nxViteTsPaths()],
  //   }),
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/recipes/storybook/custom-builder-configs
