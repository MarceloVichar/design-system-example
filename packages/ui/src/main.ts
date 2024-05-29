import { createApp } from 'vue'
import './style.css'
import ExportedComponents from './index.ts'
import App from './App.vue'
import 'carbon-components/css/carbon-components.css';
import CarbonComponentsVue from '@carbon/vue';

const app = createApp(App);
app.use(CarbonComponentsVue);
app.use(ExportedComponents);
app.mount('#app');
