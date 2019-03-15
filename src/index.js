import SeSwitch from './packages/switch/index'
import SeButton from './packages/button/index'
import SeRow from './packages/row/index'
import SeCol from './packages/col/index'
// ...
const components = [
  SeSwitch,
  SeButton,
  SeRow,
  SeCol
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
  SeButton,
  SeRow,
  SeCol
  // ...
}
