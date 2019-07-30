import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
// 引入rem适配相关插件
import 'vant/lib/index.css'
import '../node_modules/amfe-flexible/index.js'
// 引入表单验证插件vee-validate 及相关汉化插件
import zhCN from 'vee-validate/dist/locale/zh_CN'
import VeeValidate, { Validator } from 'vee-validate'
Vue.use(Vant)
Vue.use(VeeValidate)
Validator.localize('zh_CN', zhCN)
// vee-validate自定义校验规则
// moblie为自定义校验名称
Validator.extend('phone', {
  // 校验提示信息field为默认的自定义校验名
  getMessage: field => '请输入正确手机号',
  validate: value => value.length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
