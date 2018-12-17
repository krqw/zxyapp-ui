
import Button from './button/button.vue'

const components = {
  install (Vue) {
    Vue.component(Button.name, Button);
  }
}


if (typeof window !== 'undefined' && window.Vue) { 
  if (components.installed) return;
    window.Vue.use(components) 
}
export {
  components,
  Button
}