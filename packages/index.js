import Vue from 'vue'
import CrazyConfirm from './index.vue'

let newInstance = null
let CrazyConfirmConstructor = Vue.extend(CrazyConfirm) // Vue.extend 使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象

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