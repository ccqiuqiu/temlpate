/**
 * Created by 熊超超 on 2020/5/7.
 */
import api from '../api/index'
const state = {
}
const mutations = {
}
const actions = {
  login(context, params) {
    return api.login(params)
  },
  captcha(context) {
    return api.captcha()
  },
  async getUserInfo(context, params) {
    // 模拟接口返回的数据
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          data: {
            userName: 'admin',
            name: '张三',
            menus: [
              {
                id: '1',
                name: '示例页面',
                children: [
                  {id: '11', name: 'qx-table示例', path: '/demo/qx-table'},
                  {id: '12', name: '一些示例', path: '/mainData/product'},
                  {id: '13', name: '二级菜单', children: [{id: '131', name: '三级菜单', path: '/mainData/price'}]},
                ]
              },
              {id: '2', name: '没有下级的菜单', path: '/order'},
            ],
            resources: ['test'],
          }
        })
      }, 300)
    })
  },
  testPage(context, params) {
    return {data: {list: Array.from({length: 10}, (v, k) => ({id: k, name: 'name' + Math.random()})), total: 300}}
  },
}

export default { namespaced: true, state, mutations, actions }
