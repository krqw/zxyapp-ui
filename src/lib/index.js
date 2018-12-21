
import Button from './button/button.vue'

const install = function(Vue) {
  Vue.component(Button.name, Button);
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

export {
  Button
};
