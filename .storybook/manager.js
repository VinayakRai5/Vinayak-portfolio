import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    // brandImage: 'https://Vinayakrai.netlify.app/icon.svg',
    brandTitle: 'Vinayak Components',
    brandUrl: 'https://Vinayakjain.cf',
  },
});
