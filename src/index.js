import SeSwitch from './packages/switch/se-switch.vue'
// ...
const components = [
  SeSwitch
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
  SeSwitch
  // ...
}
