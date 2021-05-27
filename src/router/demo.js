/**
 * Created by 熊超超 on 2020/6/2.
 */
export default [
  {
    path: '/demo/qx-table',
    component: () => import(/* webpackChunkName: "demo" */ '../views/demo/QxTableDemo.vue')
  },
  {
    path: '/mainData/product',
    component: () => import(/* webpackChunkName: "demo" */ '../views/demo/HelloWorld.vue')
  },
  {
    path: '/mainData/sss',
    // meta: {title: '新标签'},
    component: () => import(/* webpackChunkName: "demo" */ '../views/demo/NewTab.vue')
  },
  {
    path: '/mainData/aaa',
    // meta: {title: '新标签'},
    component: () => import(/* webpackChunkName: "demo" */ '../views/demo/NewTab.vue')
  },
]
