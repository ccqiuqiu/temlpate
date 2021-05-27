/**
 * Created by 熊超超 on 2020/6/23.
 */
import utils from './utils'
import c from './constant'

export default {
  install (Vue) {
    // 这些是qianxun已经在原型上绑定过的属性
    // Vue.prototype.$c = constant
    // Vue.prototype.$bus = bus
    // Vue.prototype.$utils = utils
    // Vue.prototype.$config = config
    // Vue.prototype.$tab = tabUtils

    Vue.prototype.$utils.merge(utils)
    Vue.prototype.$c.merge(c)
    console.log(Vue.prototype.$c)
  }
}
