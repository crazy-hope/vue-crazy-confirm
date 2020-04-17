import Vue from 'vue'
import App from './App.vue'

import crazyConfirm from 'vue-crazy-confirm'
// import crazyConfirm from '../packages/index'
Vue.use(crazyConfirm)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
