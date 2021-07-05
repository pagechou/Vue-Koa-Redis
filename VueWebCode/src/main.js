import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VeeValidate, { Validator } from 'vee-validate'
import './validate/index'

const validator = new Validator()

validator.localize('zh-CN')

Vue.config.productionTip = false
Vue.use(VeeValidate)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
