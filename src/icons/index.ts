// 1. 导入所有的 svg 图标 使用webpack require.context()
// 2. 完成SvgIcon 的全局注册

import SgvIcon from '@/components/SvgIcon/index.vue';

const svgRequire = require.context('./svg', false, /\.svg$/);

svgRequire.keys().forEach((item) => svgRequire(item));

export default (app: any) => {
  app.component('svg-icon', SgvIcon);
};
