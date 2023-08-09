import { isMasterApp } from 'hel-iso';
import * as Vue from 'vue';
import { LIB_NAME } from './configs/subApp';
import { libReady } from 'hel-lib-proxy';
// import { preFetchLib } from 'hel-micro';
debugger
if (Vue.config) {
  Vue.config.productionTip = false;
}

(async function () {
  // const enableCustom = false;
  // await preFetchLib('hel-tpl-remote-vue-comps2');

  const libProperties = await import('./entrance/libProperties');
  // 注意此处传递的是 default
  libReady(LIB_NAME, libProperties.default);

  // 非子应用时（即不是被别的模块触发载入的情况），自己挂载渲染节点，方便本地调试
  // 可根据项目实际情况控制是否载入 loadApp 文件
  // eslint-disable-next-line
  if (isMasterApp()) {
    await import('./loadApp');
  }
})().catch(console.error);
