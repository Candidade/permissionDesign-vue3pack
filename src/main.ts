import { createApp } from 'vue';
import { createPinia } from 'pinia';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// 初始化样式表
import './styles/global.less';

// 导入 sgvIcon
import installIcons from './icons/index';

import App from './App.vue';
import router from './router';

const app = createApp(App);
installIcons(app);

app.use(router).use(ElementPlus).use(createPinia()).mount('#app');
