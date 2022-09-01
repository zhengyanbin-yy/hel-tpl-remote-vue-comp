const helDevUtils = require('hel-dev-utils');
const pkg = require('./package.json');

// const subApp = helDevUtils.createVue2SubApp(pkg, { npmCdnType: 'unpkg' });

const subApp = helDevUtils.createVue2SubApp(pkg, { defaultHomePage: 'https://hel-eco.github.io/hel-tpl-remote-vue-comp/as_v1' });

module.exports = subApp;
