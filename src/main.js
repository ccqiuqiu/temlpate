/**
 * Created by 熊超超 on 2018/4/20.
 */
import Vue from 'vue'
import routes from './router'
import modules from './store'
// 使用qianxun库
import qianxun from '../../packages/index'
import './assets/css/base.scss'

import utils from './assets/utils'

// 注册svg图标
import './assets/icons/icon'
import Logo from './views/Logo'

Vue.config.productionTip = false

Vue.use(qianxun, {
  ui: {
    size: 'small',
    // forceMultiTab: true // url严格模式，强制参数不同的url打开新标签,
  },
  router: {
    mode: 'hash',
    routes, // 子路由
  },
  store: {
    modules, // vuex子模块
  },
  components: {
    title: Logo, // 网站标题
    // nav: Logo, // 网站导航部分扩展
    // login: Logo, // 登录页面
    // home: Logo, // 首页
  },
  actions: {
    login: 'system/login', // 登录的action
    captcha: 'system/captcha', // 获取验证码的action
    logout: null, // 退出的action
    userInfo: 'system/getUserInfo' // 获取用户信息
  },
  http: {
    baseURL: process.env.VUE_APP_BASE_URL,
    // statusName: 'success',
    // successCode: true,
  },
  // 主框架初始化数据的时候执行，如果返回promise，会加入到框架初始化的promise同步执行
  beforeCreated: () => {
    console.log('beforeCreated')
  },
  // 主框架数据初始化后执行
  afterCreated: () => {
    console.log('afterCreated')
  },
  onLogout: ({router}) => {
    console.log('退出了')
    router.push('/login')
  },
})
Vue.use(utils)
