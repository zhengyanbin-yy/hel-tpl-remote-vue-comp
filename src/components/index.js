/*
|--------------------------------------------------------------------------
|
| 这些组件暴露给使用方
|
|--------------------------------------------------------------------------
*/
import App from './App.vue';
import HelloWorld from './HelloWorld.vue';
import BinTestComponent from './BinTestComponent.vue';

export default {
    AppInfo: {//app级别的信息
        name: '',
        value: '',
    },
    HelloWorld,//组件 HelloWorld
    BinTestComponent,
    App: {// 组件 App
        component: App,
        componentConfig: [//组件配置项描述
            {
                itemType:'el-input',
                itemLabel:'按钮文字',
                itemName:'label',
            },
            {
                itemType:'el-select',
                itemLabel:'是否显示取消按钮',
                itemName:'size',
                itemOptions:[
                    {label:'正常',value:'medium'},
                    {label:'小号',value:'small'},
                    {label:'迷你',value:'mini'},
                ],
            },
        ],
        componentJson:{//组件描述
            type: 'oa-button',
            component: 'oa-button',
            label: 'oa按钮',
            labelWidth: '20',
        }
    },
};
