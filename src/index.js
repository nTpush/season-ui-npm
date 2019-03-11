import SeSwitch from './packages/switch/se-switch.vue'
import SeButton from './packages/button/se-button.vue'
// ...
const components = [
  SeSwitch,
  SeButton
  // ...
]

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.vue)
}

export default {
  install,
  SeSwitch,
  SeButton
  // ...
}
