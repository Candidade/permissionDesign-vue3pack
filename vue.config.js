const path = require('path');
function resolve(params) {
  return path?.join(__dirname, params);
}
const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack(config) {
    config.module.rule('svg').exclude.add(resolve('src/icons')).end();
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end();
  },
  // 代理可以把所有请求代理到另外的一个服务器上
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    https: false,
    proxy: {
      // 当前地址中包含 /api 的时候触发此代理
      '/api': {
        target: 'https://api.imooc-admin.lgdsunday.club/',
        ws: true,
        changOrigin: true, //允许跨域
        // pathRewrite: {
        //   '^/api': '', //请求的时候使用这个api就可以
        // },
      },
    },
  },
});
