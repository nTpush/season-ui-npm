import Vue from 'vue'
import App from './App.vue'
import router from './router'
import seSwitch from './index'
import seButton from './index'

Vue.use(seSwitch)
Vue.use(seButton)
new Vue({
  el: '#app',
    router,
  render: h => h(App)
})
