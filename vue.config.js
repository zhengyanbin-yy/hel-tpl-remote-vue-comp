const webpack = require('webpack');
const pkg = require('./package.json');
const helDevUtils = require('hel-dev-utils');
// const webpack = require('webpack');

const subApp = helDevUtils.createVue2SubApp(pkg, { npmCdnType: 'unpkg' });

module.exports = {
  // 此处传入的url值仅为了方便另一个项目可以基于当前模块的wed-dev-server调试当前模块代码，端口号对齐 npm run start 里的 PORT
  // 它不会影响流水线的 publicUrl 值，因为 hel-dev-utils 内部发现设置有 process.env.HEL_APP_HOME_PAGE 时或 设置了 npmCdnType 时，
  // 会优先采用 HEL_APP_HOME_PAGE 值或 npmCdnType 对应的 cdn 前缀值作为 publicUrl，覆盖掉这里的默认值
  publicPath: subApp.getPublicPathOrUrl('http://localhost:7001'),
  productionSourceMap: true,
  outputDir: helDevUtils.cst.HEL_DIST_DIR,
  configureWebpack: config => {
    config.output.library = subApp.groupName;
    config.output.libraryTarget = 'umd';
    config.output.jsonpFunction = subApp.jsonpFnName;
    config.output.maxSize

    config.externals = subApp.externals;
    config.optimization = {
      splitChunks: {
        maxSize: 6000000,
      },
    };

    config.devServer = {
      // 开启跨域，方便本机上别的项目调试当前模块
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
      }
    };

    config.plugins.push(
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 2
      }),
    );

    // if user want to inject env var
    // config.plugins.push(new webpack.DefinePlugin({
    //   "process.env": {
    //     VUE_APP_XXX: JSON.stringify('xxx'),
    //   }
    // }));
  },
};
