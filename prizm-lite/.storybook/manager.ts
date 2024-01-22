import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';
import { PrizmTheme } from './theme';

addons.setConfig({
  theme: PrizmTheme,
});
