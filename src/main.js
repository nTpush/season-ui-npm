import Vue from 'vue'
import App from './App.vue'
import seSwitch from './index'

Vue.use(seSwitch)

new Vue({
  el: '#app',
  render: h => h(App)
})
