import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import VueCompositionAPI from '@vue/composition-api'
import store from './store'
import { create } from 'apisauce'
// import constants from './plugins/constants'
const api = create({
  baseURL : 'https://jsonplaceholder.typicode.com/'
})
Vue.prototype.$api = api
Vue.config.productionTip = false
Vue.use(VueCompositionAPI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
