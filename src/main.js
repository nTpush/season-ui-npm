import Vue from 'vue'
import App from './App.vue'
import router from './router'
import seSwitch from './index'
import seButton from './index'
import seRow from './index'
import seCol from './index'
import DemoBlock from './wrap/demo-block.vue'
import TipBlock  from './wrap/tip-block.vue'
import WarningBlock  from './wrap/warning-block.vue'

import '../lib/css/index.css'
// import '../lib/css/spring.css'
Vue.component("demo-block", DemoBlock);
Vue.component("tip-block", TipBlock);
Vue.component("warning-block", WarningBlock);

Vue.use(seSwitch)
Vue.use(seButton)
Vue.use(seRow)
Vue.use(seCol)
new Vue({
  el: '#app',
    router,
  render: h => h(App)
})
