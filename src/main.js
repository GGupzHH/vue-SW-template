import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import variable from '../config/env'
Vue.config.productionTip = false
console.log(variable)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
