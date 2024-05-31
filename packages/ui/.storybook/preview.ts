import type { Preview } from "@storybook/vue3";
import { setup } from "@storybook/vue3";
import '../src/style.css'
import 'carbon-components/css/carbon-components.css';
import CarbonComponentsVue from '@carbon/vue';

setup((app: any) => {
  app.use(CarbonComponentsVue);
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
