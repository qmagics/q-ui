import { createApp } from 'vue';
import App from './App.vue';
import './styles/index.scss';

// import QUI from 'q-ui';
import QUI from '../../lib/index.esm.js';
import 'theme-chalk/src/index.scss';

createApp(App).use(QUI).mount('#app');
