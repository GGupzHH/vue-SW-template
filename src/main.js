import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import TYPE_JUDGE from './utils/TypeJudge'
Vue.config.productionTip = false
Vue.use(TYPE_JUDGE)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
