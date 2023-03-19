/* eslint-disable import/order */
/* eslint-disable import/first */
/* eslint-disable vue/multi-word-component-names */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const browser = require('webextension-polyfill');

import extension from '../extension';
import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import DataTable from 'primevue/datatable';
import Divider from 'primevue/divider';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import OverlayPanel from 'primevue/overlaypanel';
import ProfileTable from '../components/ProfileTable.vue';
import SetupSteps from '../components/SetupSteps.vue';
import LoginLinks from '../components/LoginLinks.vue';
import App from '../view/popup.vue';
import 'primevue/resources/themes/lara-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(App);
app.use(PrimeVue);
app.config.globalProperties.$browser = browser;
app.config.globalProperties.$ext = extension;
app.component('Accordion', Accordion);
app.component('AccordionTab', AccordionTab);
app.component('DataTable', DataTable);
app.component('Divider', Divider);
app.component('Column', Column);
app.component('InputText', InputText);
app.component('OverlayPanel', OverlayPanel);
app.component('PrimeButton', Button);
app.component('ProfileTable', ProfileTable);
app.component('SetupSteps', SetupSteps);
app.component('LoginLinks', LoginLinks);
app.mount('#app');
