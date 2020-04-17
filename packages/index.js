import Vue from 'vue'
import CrazyConfirm from './index.vue'

let newInstance = null
let CrazyConfirmConstructor = Vue.extend(CrazyConfirm)

const caller = (options) => {
  if(!newInstance) {
    newInstance = new CrazyConfirmConstructor()
    Object.assign(newInstance, options)
    document.body.appendChild(newInstance.$mount().$el)
  }
  return newInstance
}

export default {
  install(vue, options = {}) {
    vue.prototype.$crazyConfirm = caller(options)
  }
}