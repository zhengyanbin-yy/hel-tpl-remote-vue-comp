/*
|--------------------------------------------------------------------------
|
| 用于本地调试组件，配合 npm script 的 VUE_APP_COMP 参数来决定载入哪个组件调试
|
|--------------------------------------------------------------------------
*/
import Vue from 'vue';
import libProperties from './entrance/libProperties';

const compName = process.env.VUE_APP_COMP || 'App';

// 如果是 vue3，注意调整此处逻辑
new Vue({
  render: h => h(libProperties[compName]),
}).$mount('#app');
