import { resultSuccess, resultError, getRequestToken, requestParams } from '../_util';
import { MockMethod } from 'vite-plugin-mock';
import { createFakeUserList } from './user';

// single
const dashboardRoute = {
  path: '/dashboard',
  name: 'Welcome',
  component: '/dashboard/analysis/index',
  meta: {
    title: 'routes.dashboard.analysis',
    affix: true,
    icon: 'bx:bx-home',
  },
};

const backRoute = {
  path: 'back',
  name: 'PermissionBackDemo',
  meta: {
    title: 'routes.demo.permission.back',
  },

  children: [
    {
      path: 'page',
      name: 'BackAuthPage',
      component: '/demo/permission/back/index',
      meta: {
        title: 'routes.demo.permission.backPage',
      },
    },
    {
      path: 'btn',
      name: 'BackAuthBtn',
      component: '/demo/permission/back/Btn',
      meta: {
        title: 'routes.demo.permission.backBtn',
      },
    },
  ],
};

const authRoute = {
  path: '/permission',
  name: 'Permission',
  component: 'LAYOUT',
  redirect: '/permission/front/page',
  meta: {
    icon: 'carbon:user-role',
    title: 'routes.demo.permission.permission',
  },
  children: [backRoute],
};

const levelRoute = {
  path: '/level',
  name: 'Level',
  component: 'LAYOUT',
  redirect: '/level/menu1/menu1-1',
  meta: {
    icon: 'carbon:user-role',
    title: 'routes.demo.level.level',
  },

  children: [
    {
      path: 'menu1',
      name: 'Menu1Demo',
      meta: {
        title: 'Menu1',
      },
      children: [
        {
          path: 'menu1-1',
          name: 'Menu11Demo',
          meta: {
            title: 'Menu1-1',
          },
          children: [
            {
              path: 'menu1-1-1',
              name: 'Menu111Demo',
              component: '/demo/level/Menu111',
              meta: {
                title: 'Menu111',
              },
            },
          ],
        },
        {
          path: 'menu1-2',
          name: 'Menu12Demo',
          component: '/demo/level/Menu12',
          meta: {
            title: 'Menu1-2',
          },
        },
      ],
    },
    {
      path: 'menu2',
      name: 'Menu2Demo',
      component: '/demo/level/Menu2',
      meta: {
        title: 'Menu2',
      },
    },
  ],
};

// const sysRoute = {
//   path: '/system',
//   name: 'System',
//   component: 'LAYOUT',
//   redirect: '/system/account',
//   meta: {
//     icon: 'ion:settings-outline',
//     title: 'routes.demo.system.moduleName',
//   },
//   children: [
//     {
//       path: 'account',
//       name: 'AccountManagement',
//       meta: {
//         title: 'routes.demo.system.account',
//         ignoreKeepAlive: true,
//       },
//       component: '/demo/system/account/index',
//     },
//     {
//       path: 'account_detail/:id',
//       name: 'AccountDetail',
//       meta: {
//         hideMenu: true,
//         title: 'routes.demo.system.account_detail',
//         ignoreKeepAlive: true,
//         showMenu: false,
//         currentActiveMenu: '/system/account',
//       },
//       component: '/demo/system/account/AccountDetail',
//     },
//     {
//       path: 'role',
//       name: 'RoleManagement',
//       meta: {
//         title: 'routes.demo.system.role',
//         ignoreKeepAlive: true,
//       },
//       component: '/demo/system/role/index',
//     },
//
//     {
//       path: 'menu',
//       name: 'MenuManagement',
//       meta: {
//         title: 'routes.demo.system.menu',
//         ignoreKeepAlive: true,
//       },
//       component: '/demo/system/menu/index',
//     },
//     {
//       path: 'dept',
//       name: 'DeptManagement',
//       meta: {
//         title: 'routes.demo.system.dept',
//         ignoreKeepAlive: true,
//       },
//       component: '/demo/system/dept/index',
//     },
//     {
//       path: 'changePassword',
//       name: 'ChangePassword',
//       meta: {
//         title: 'routes.demo.system.password',
//         ignoreKeepAlive: true,
//       },
//       component: '/demo/system/password/index',
//     },
//   ],
// };

const linkRoute = {
  path: '/link',
  name: 'Link',
  component: 'LAYOUT',
  meta: {
    icon: 'ion:tv-outline',
    title: 'routes.demo.iframe.frame',
  },
  children: [
    {
      path: 'doc',
      name: 'Doc',
      meta: {
        title: 'routes.demo.iframe.doc',
        frameSrc: 'https://vvbin.cn/doc-next/',
      },
    },
    {
      path: 'https://vvbin.cn/doc-next/',
      name: 'DocExternal',
      component: 'LAYOUT',
      meta: {
        title: 'routes.demo.iframe.docExternal',
      },
    },
  ],
};

const menus = {
  path: '/demo',
  name: 'Demo',
  component: 'LAYOUT',
  meta: { icon: 'ant-design:bug-filled', title: 'Demo' },
  tag: { dot: true },
  children: [
    
    {
  path: '/about',
  name: 'About',
  redirect: '/about/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'simple-icons:about-dot-me',
    title: 'routes.dashboard.about',
    orderNo: 100000,
  },
  children: [
    {
      path: 'index',
      name: 'AboutPage',
      component: '/sys/about/index',
      meta: {
        title: 'routes.dashboard.about',
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
      },
    },
  ],
},
  
    {
  path: '/dashboard',
  name: 'Dashboard',
  redirect: '/dashboard/analysis',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: 'routes.dashboard.dashboard',
  },
  children: [
    {
      path: 'analysis',
      name: 'Analysis',
      component: '/dashboard/analysis/index',
      meta: {
        // affix: true,
        title: 'routes.dashboard.analysis',
      },
    },
    {
      path: 'workbench',
      name: 'Workbench',
      component: '/dashboard/workbench/index',
      meta: {
        title: 'routes.dashboard.workbench',
      },
    },
  ],
},
  
    {
  path: '/charts',
  name: 'Charts',
  redirect: '/charts/echarts/map',
  meta: {
    orderNo: 500,
    icon: 'ion:bar-chart-outline',
    title: 'routes.demo.charts.charts',
  },
  children: [
    {
      path: 'baiduMap',
      name: 'BaiduMap',
      meta: {
        title: 'routes.demo.charts.baiduMap',
      },
      component: '/demo/charts/map/Baidu',
    },
    {
      path: 'aMap',
      name: 'AMap',
      meta: {
        title: 'routes.demo.charts.aMap',
      },
      component: '/demo/charts/map/Gaode',
    },
    {
      path: 'googleMap',
      name: 'GoogleMap',
      meta: {
        title: 'routes.demo.charts.googleMap',
      },
      component: '/demo/charts/map/Google',
    },

    {
      path: 'echarts',
      name: 'Echarts',
      component: 'LAYOUT',
      meta: {
        title: 'Echarts',
      },
      redirect: '/charts/echarts/map',
      children: [
        {
          path: 'map',
          name: 'Map',
          component: '/demo/charts/Map',
          meta: {
            title: 'routes.demo.charts.map',
          },
        },
        {
          path: 'line',
          name: 'Line',
          component: '/demo/charts/Line',
          meta: {
            title: 'routes.demo.charts.line',
          },
        },
        {
          path: 'pie',
          name: 'Pie',
          component: '/demo/charts/Pie',
          meta: {
            title: 'routes.demo.charts.pie',
          },
        },
      ],
    },
  ],
},
  
    {
  path: '/comp',
  name: 'Comp',
  redirect: '/comp/basic',
  meta: {
    orderNo: 30,
    icon: 'ion:layers-outline',
    title: 'routes.demo.comp.comp',
  },

  children: [
    {
      path: 'basic',
      name: 'BasicDemo',
      component: '/demo/comp/button/index',
      meta: {
        title: 'routes.demo.comp.basic',
      },
    },

    {
      path: 'form',
      name: 'FormDemo',
      redirect: '/comp/form/basic',
      component: 'LAYOUT',
      meta: {
        // icon: 'mdi:form-select',
        title: 'routes.demo.form.form',
      },
      children: [
        {
          path: 'basic',
          name: 'FormBasicDemo',
          component: '/demo/form/index',
          meta: {
            title: 'routes.demo.form.basic',
          },
        },
        {
          path: 'useForm',
          name: 'UseFormDemo',
          component: '/demo/form/UseForm',
          meta: {
            title: 'routes.demo.form.useForm',
          },
        },
        {
          path: 'refForm',
          name: 'RefFormDemo',
          component: '/demo/form/RefForm',
          meta: {
            title: 'routes.demo.form.refForm',
          },
        },
        {
          path: 'advancedForm',
          name: 'AdvancedFormDemo',
          component: '/demo/form/AdvancedForm',
          meta: {
            title: 'routes.demo.form.advancedForm',
          },
        },
        {
          path: 'ruleForm',
          name: 'RuleFormDemo',
          component: '/demo/form/RuleForm',
          meta: {
            title: 'routes.demo.form.ruleForm',
          },
        },
        {
          path: 'dynamicForm',
          name: 'DynamicFormDemo',
          component: '/demo/form/DynamicForm',
          meta: {
            title: 'routes.demo.form.dynamicForm',
          },
        },
        {
          path: 'customerForm',
          name: 'CustomerFormDemo',
          component: '/demo/form/CustomerForm',
          meta: {
            title: 'routes.demo.form.customerForm',
          },
        },
        {
          path: 'appendForm',
          name: 'appendFormDemo',
          component: '/demo/form/AppendForm',
          meta: {
            title: 'routes.demo.form.appendForm',
          },
        },
      ],
    },
    {
      path: 'table',
      name: 'TableDemo',
      redirect: '/comp/table/basic',
      component: 'LAYOUT',
      meta: {
        // icon: 'carbon:table-split',
        title: 'routes.demo.table.table',
      },

      children: [
        {
          path: 'basic',
          name: 'TableBasicDemo',
          component: '/demo/table/Basic',
          meta: {
            title: 'routes.demo.table.basic',
          },
        },
        {
          path: 'treeTable',
          name: 'TreeTableDemo',
          component: '/demo/table/TreeTable',
          meta: {
            title: 'routes.demo.table.treeTable',
          },
        },
        {
          path: 'fetchTable',
          name: 'FetchTableDemo',
          component: '/demo/table/FetchTable',
          meta: {
            title: 'routes.demo.table.fetchTable',
          },
        },
        {
          path: 'fixedColumn',
          name: 'FixedColumnDemo',
          component: '/demo/table/FixedColumn',
          meta: {
            title: 'routes.demo.table.fixedColumn',
          },
        },
        {
          path: 'customerCell',
          name: 'CustomerCellDemo',
          component: '/demo/table/CustomerCell',
          meta: {
            title: 'routes.demo.table.customerCell',
          },
        },
        {
          path: 'formTable',
          name: 'FormTableDemo',
          component: '/demo/table/FormTable',
          meta: {
            title: 'routes.demo.table.formTable',
          },
        },
        {
          path: 'useTable',
          name: 'UseTableDemo',
          component: '/demo/table/UseTable',
          meta: {
            title: 'routes.demo.table.useTable',
          },
        },
        {
          path: 'refTable',
          name: 'RefTableDemo',
          component: '/demo/table/RefTable',
          meta: {
            title: 'routes.demo.table.refTable',
          },
        },
        {
          path: 'multipleHeader',
          name: 'MultipleHeaderDemo',
          component: '/demo/table/MultipleHeader',
          meta: {
            title: 'routes.demo.table.multipleHeader',
          },
        },
        {
          path: 'mergeHeader',
          name: 'MergeHeaderDemo',
          component: '/demo/table/MergeHeader',
          meta: {
            title: 'routes.demo.table.mergeHeader',
          },
        },
        {
          path: 'expandTable',
          name: 'ExpandTableDemo',
          component: '/demo/table/ExpandTable',
          meta: {
            title: 'routes.demo.table.expandTable',
          },
        },
        {
          path: 'fixedHeight',
          name: 'FixedHeightDemo',
          component: '/demo/table/FixedHeight',
          meta: {
            title: 'routes.demo.table.fixedHeight',
          },
        },
        {
          path: 'footerTable',
          name: 'FooterTableDemo',
          component: '/demo/table/FooterTable',
          meta: {
            title: 'routes.demo.table.footerTable',
          },
        },
        {
          path: 'editCellTable',
          name: 'EditCellTableDemo',
          component: '/demo/table/EditCellTable',
          meta: {
            title: 'routes.demo.table.editCellTable',
          },
        },
        {
          path: 'editRowTable',
          name: 'EditRowTableDemo',
          component: '/demo/table/EditRowTable',
          meta: {
            title: 'routes.demo.table.editRowTable',
          },
        },
        {
          path: 'authColumn',
          name: 'AuthColumnDemo',
          component: '/demo/table/AuthColumn',
          meta: {
            title: 'routes.demo.table.authColumn',
          },
        },
      ],
    },
    {
      path: 'transition',
      name: 'transitionDemo',
      component: '/demo/comp/transition/index',
      meta: {
        title: 'routes.demo.comp.transition',
      },
    },
    {
      path: 'cropper',
      name: 'CropperDemo',
      component: '/demo/comp/cropper/index',
      meta: {
        title: 'routes.demo.comp.cropperImage',
      },
    },

    {
      path: 'timestamp',
      name: 'TimeDemo',
      component: '/demo/comp/time/index',
      meta: {
        title: 'routes.demo.comp.time',
      },
    },
    {
      path: 'countTo',
      name: 'CountTo',
      component: '/demo/comp/count-to/index',
      meta: {
        title: 'routes.demo.comp.countTo',
      },
    },
    {
      path: 'tree',
      name: 'TreeDemo',
      redirect: '/comp/tree/basic',
      component: 'LAYOUT',
      meta: {
        // icon: 'clarity:tree-view-line',
        title: 'routes.demo.comp.tree',
      },
      children: [
        {
          path: 'basic',
          name: 'BasicTreeDemo',
          component: '/demo/tree/index',
          meta: {
            title: 'routes.demo.comp.treeBasic',
          },
        },
        {
          path: 'editTree',
          name: 'EditTreeDemo',
          component: '/demo/tree/EditTree',
          meta: {
            title: 'routes.demo.comp.editTree',
          },
        },
        {
          path: 'actionTree',
          name: 'ActionTreeDemo',
          component: '/demo/tree/ActionTree',
          meta: {
            title: 'routes.demo.comp.actionTree',
          },
        },
      ],
    },
    {
      path: 'editor',
      name: 'EditorDemo',
      redirect: '/comp/editor/markdown',
      component: 'LAYOUT',
      meta: {
        // icon: 'carbon:table-split',
        title: 'routes.demo.editor.editor',
      },
      children: [
        {
          path: 'json',
          component: '/demo/editor/json/index',
          name: 'JsonEditorDemo',
          meta: {
            title: 'routes.demo.editor.jsonEditor',
          },
        },
        {
          path: 'markdown',
          component: 'LAYOUT',
          name: 'MarkdownDemo',
          meta: {
            title: 'routes.demo.editor.markdown',
          },
          redirect: '/comp/editor/markdown/index',
          children: [
            {
              path: 'index',
              name: 'MarkDownBasicDemo',
              component: '/demo/editor/markdown/index',
              meta: {
                title: 'routes.demo.editor.tinymceBasic',
              },
            },
            {
              path: 'editor',
              name: 'MarkDownFormDemo',
              component: '/demo/editor/markdown/Editor',
              meta: {
                title: 'routes.demo.editor.tinymceForm',
              },
            },
          ],
        },

        {
          path: 'tinymce',
          component: 'LAYOUT',
          name: 'TinymceDemo',
          meta: {
            title: 'routes.demo.editor.tinymce',
          },
          redirect: '/comp/editor/tinymce/index',
          children: [
            {
              path: 'index',
              name: 'TinymceBasicDemo',
              component: '/demo/editor/tinymce/index',
              meta: {
                title: 'routes.demo.editor.tinymceBasic',
              },
            },
            {
              path: 'editor',
              name: 'TinymceFormDemo',
              component: '/demo/editor/tinymce/Editor',
              meta: {
                title: 'routes.demo.editor.tinymceForm',
              },
            },
          ],
        },
      ],
    },
    {
      path: 'scroll',
      name: 'ScrollDemo',
      redirect: '/comp/scroll/basic',
      component: 'LAYOUT',
      meta: {
        title: 'routes.demo.comp.scroll',
      },
      children: [
        {
          path: 'basic',
          name: 'BasicScrollDemo',
          component: '/demo/comp/scroll/index',
          meta: {
            title: 'routes.demo.comp.scrollBasic',
          },
        },
        {
          path: 'action',
          name: 'ActionScrollDemo',
          component: '/demo/comp/scroll/Action',
          meta: {
            title: 'routes.demo.comp.scrollAction',
          },
        },
        {
          path: 'virtualScroll',
          name: 'VirtualScrollDemo',
          component: '/demo/comp/scroll/VirtualScroll',
          meta: {
            title: 'routes.demo.comp.virtualScroll',
          },
        },
      ],
    },

    {
      path: 'modal',
      name: 'ModalDemo',
      component: '/demo/comp/modal/index',
      meta: {
        title: 'routes.demo.comp.modal',
      },
    },
    {
      path: 'drawer',
      name: 'DrawerDemo',
      component: '/demo/comp/drawer/index',
      meta: {
        title: 'routes.demo.comp.drawer',
      },
    },
    {
      path: 'desc',
      name: 'DescDemo',
      component: '/demo/comp/desc/index',
      meta: {
        title: 'routes.demo.comp.desc',
      },
    },

    {
      path: 'lazy',
      name: 'LazyDemo',
      component: 'LAYOUT',
      redirect: '/comp/lazy/basic',
      meta: {
        title: 'routes.demo.comp.lazy',
      },
      children: [
        {
          path: 'basic',
          name: 'BasicLazyDemo',
          component: '/demo/comp/lazy/index',
          meta: {
            title: 'routes.demo.comp.lazyBasic',
          },
        },
        {
          path: 'transition',
          name: 'BasicTransitionDemo',
          component: '/demo/comp/lazy/Transition',
          meta: {
            title: 'routes.demo.comp.lazyTransition',
          },
        },
      ],
    },
    {
      path: 'verify',
      name: 'VerifyDemo',
      component: 'LAYOUT',
      redirect: '/comp/verify/drag',
      meta: {
        title: 'routes.demo.comp.verify',
      },
      children: [
        {
          path: 'drag',
          name: 'VerifyDragDemo',
          component: '/demo/comp/verify/index',
          meta: {
            title: 'routes.demo.comp.verifyDrag',
          },
        },
        {
          path: 'rotate',
          name: 'VerifyRotateDemo',
          component: '/demo/comp/verify/Rotate',
          meta: {
            title: 'routes.demo.comp.verifyRotate',
          },
        },
      ],
    },
    //

    {
      path: 'qrcode',
      name: 'QrCodeDemo',
      component: '/demo/comp/qrcode/index',
      meta: {
        title: 'routes.demo.comp.qrcode',
      },
    },
    {
      path: 'strength-meter',
      name: 'StrengthMeterDemo',
      component: '/demo/comp/strength-meter/index',
      meta: {
        title: 'routes.demo.comp.strength',
      },
    },
    {
      path: 'upload',
      name: 'UploadDemo',
      component: '/demo/comp/upload/index',
      meta: {
        title: 'routes.demo.comp.upload',
      },
    },
    {
      path: 'loading',
      name: 'LoadingDemo',
      component: '/demo/comp/loading/index',
      meta: {
        title: 'routes.demo.comp.loading',
      },
    },
  ],
},
  
    {
  path: '/feat',
  name: 'FeatDemo',
  redirect: '/feat/icon',
  meta: {
    orderNo: 19,
    icon: 'ion:git-compare-outline',
    title: 'routes.demo.feat.feat',
  },

  children: [
    {
      path: 'icon',
      name: 'IconDemo',
      component: '/demo/feat/icon/index',
      meta: {
        title: 'routes.demo.feat.icon',
      },
    },
    {
      path: 'ws',
      name: 'WebSocket',
      component: '/demo/feat/ws/index',
      meta: {
        title: 'routes.demo.feat.ws',
      },
    },
    {
      path: 'session-timeout',
      name: 'SessionTimeout',
      component: '/demo/feat/session-timeout/index',
      meta: {
        title: 'routes.demo.feat.sessionTimeout',
      },
    },
    {
      path: 'print',
      name: 'Print',
      component: '/demo/feat/print/index',
      meta: {
        title: 'routes.demo.feat.print',
      },
    },
    {
      path: 'tabs',
      name: 'TabsDemo',
      component: '/demo/feat/tabs/index',
      meta: {
        title: 'routes.demo.feat.tabs',
      },
    },
    {
      path: 'breadcrumb',
      name: 'BreadcrumbDemo',
      redirect: '/feat/breadcrumb/flat',
      component: 'LAYOUT',
      meta: {
        title: 'routes.demo.feat.breadcrumb',
      },

      children: [
        {
          path: 'flat',
          name: 'BreadcrumbFlatDemo',
          component: '/demo/feat/breadcrumb/FlatList',
          meta: {
            title: 'routes.demo.feat.breadcrumbFlat',
          },
        },
        {
          path: 'flatDetail',
          name: 'BreadcrumbFlatDetailDemo',
          component: '/demo/feat/breadcrumb/FlatListDetail',
          meta: {
            title: 'routes.demo.feat.breadcrumbFlatDetail',
            hideMenu: true,
            hideTab: true,
            currentActiveMenu: '/feat/breadcrumb/flat',
          },
        },
        {
          path: 'children',
          name: 'BreadcrumbChildrenDemo',
          component: '/demo/feat/breadcrumb/ChildrenList',
          meta: {
            title: 'routes.demo.feat.breadcrumbChildren',
          },
          children: [
            {
              path: 'childrenDetail',
              name: 'BreadcrumbChildrenDetailDemo',
              component: '/demo/feat/breadcrumb/ChildrenListDetail',
              meta: {
                currentActiveMenu: '/feat/breadcrumb/children',
                title: 'routes.demo.feat.breadcrumbChildrenDetail',
                //hideTab: true,
                // hideMenu: true,
              },
            },
          ],
        },
      ],
    },

    {
      path: 'context-menu',
      name: 'ContextMenuDemo',
      component: '/demo/feat/context-menu/index',
      meta: {
        title: 'routes.demo.feat.contextMenu',
      },
    },
    {
      path: 'download',
      name: 'DownLoadDemo',
      component: '/demo/feat/download/index',
      meta: {
        title: 'routes.demo.feat.download',
      },
    },
    {
      path: 'click-out-side',
      name: 'ClickOutSideDemo',
      component: '/demo/feat/click-out-side/index',
      meta: {
        title: 'routes.demo.feat.clickOutSide',
      },
    },
    {
      path: 'img-preview',
      name: 'ImgPreview',
      component: '/demo/feat/img-preview/index',
      meta: {
        title: 'routes.demo.feat.imgPreview',
      },
    },
    {
      path: 'copy',
      name: 'CopyDemo',
      component: '/demo/feat/copy/index',
      meta: {
        title: 'routes.demo.feat.copy',
      },
    },
    {
      path: 'msg',
      name: 'MsgDemo',
      component: '/demo/feat/msg/index',
      meta: {
        title: 'routes.demo.feat.msg',
      },
    },
    {
      path: 'watermark',
      name: 'WatermarkDemo',
      component: '/demo/feat/watermark/index',
      meta: {
        title: 'routes.demo.feat.watermark',
      },
    },
    {
      path: 'ripple',
      name: 'RippleDemo',
      component: '/demo/feat/ripple/index',
      meta: {
        title: 'routes.demo.feat.ripple',
      },
    },
    {
      path: 'full-screen',
      name: 'FullScreenDemo',
      component: '/demo/feat/full-screen/index',
      meta: {
        title: 'routes.demo.feat.fullScreen',
      },
    },
    {
      path: '/error-log',
      name: 'ErrorLog',
      component: '/sys/error-log/index',
      meta: {
        title: 'routes.demo.feat.errorLog',
      },
    },
    {
      path: 'excel',
      name: 'Excel',
      redirect: '/feat/excel/customExport',
      component: 'LAYOUT',
      meta: {
        // icon: 'mdi:microsoft-excel',
        title: 'routes.demo.excel.excel',
      },

      children: [
        {
          path: 'customExport',
          name: 'CustomExport',
          component: '/demo/excel/CustomExport',
          meta: {
            title: 'routes.demo.excel.customExport',
          },
        },
        {
          path: 'jsonExport',
          name: 'JsonExport',
          component: '/demo/excel/JsonExport',
          meta: {
            title: 'routes.demo.excel.jsonExport',
          },
        },
        {
          path: 'arrayExport',
          name: 'ArrayExport',
          component: '/demo/excel/ArrayExport',
          meta: {
            title: 'routes.demo.excel.arrayExport',
          },
        },
        {
          path: 'importExcel',
          name: 'ImportExcel',
          component: '/demo/excel/ImportExcel',
          meta: {
            title: 'routes.demo.excel.importExcel',
          },
        },
      ],
    },
    {
      path: 'testTab/:id',
      name: 'TestTab',
      component: '/demo/feat/tab-params/index',
      meta: {
        title: 'routes.demo.feat.tab',
        carryParam: true,
        hidePathForChildren: true,
      },
      children: [
        {
          path: 'testTab/id1',
          name: 'TestTab1',
          component: '/demo/feat/tab-params/index',
          meta: {
            title: 'routes.demo.feat.tab1',
            carryParam: true,
            ignoreRoute: true,
          },
        },
        {
          path: 'testTab/id2',
          name: 'TestTab2',
          component: '/demo/feat/tab-params/index',
          meta: {
            title: 'routes.demo.feat.tab2',
            carryParam: true,
            ignoreRoute: true,
          },
        },
      ],
    },
    {
      path: 'testParam/:id',
      name: 'TestParam',
      component: 'LAYOUT',
      meta: {
        title: 'routes.demo.feat.menu',
        ignoreKeepAlive: true,
      },
      children: [
        {
          path: 'sub1',
          name: 'TestParam_1',
          component: '/demo/feat/menu-params/index',
          meta: {
            title: 'routes.demo.feat.menu1',
            ignoreKeepAlive: true,
          },
        },
        {
          path: 'sub2',
          name: 'TestParam_2',
          component: '/demo/feat/menu-params/index',
          meta: {
            title: 'routes.demo.feat.menu2',
            ignoreKeepAlive: true,
          },
        },
      ],
    },
  ],
},
  
    {
  path: '/flow',
  name: 'FlowDemo',
  redirect: '/flow/flowChart',
  meta: {
    orderNo: 5000,
    icon: 'tabler:chart-dots',
    title: 'routes.demo.flow.name',
  },
  children: [
    {
      path: 'flowChart',
      name: 'flowChartDemo',
      component: '/demo/comp/flow-chart/index',
      meta: {
        title: 'routes.demo.flow.flowChart',
      },
    },
  ],
},
  
    {
  path: '/frame',
  name: 'Frame',
  redirect: '/frame/doc',
  meta: {
    orderNo: 1000,
    icon: 'ion:tv-outline',
    title: 'routes.demo.iframe.frame',
  },

  children: [
    {
      path: 'doc',
      name: 'Doc',
      component: '/sys/iframe/FrameBlank',
      meta: {
        frameSrc: 'https://vvbin.cn/doc-next/',
        title: 'routes.demo.iframe.doc',
      },
    },
    {
      path: 'antv',
      name: 'Antv',
      component: '/sys/iframe/FrameBlank',
      meta: {
        frameSrc: 'https://2x.antdv.com/docs/vue/introduce-cn/',
        title: 'routes.demo.iframe.antv',
      },
    },
    {
      path: 'https://vvbin.cn/doc-next/',
      name: 'DocExternal',
      component: '/sys/iframe/FrameBlank',
      meta: {
        title: 'routes.demo.iframe.docExternal',
      },
    },
  ],
},
  
    {
  path: '/level',
  name: 'Level',
  redirect: '/level/menu1/menu1-1/menu1-1-1',
  meta: {
    orderNo: 2000,
    icon: 'ion:menu-outline',
    title: 'routes.demo.level.level',
  },

  children: [
    {
      path: 'menu1',
      name: 'Menu1Demo',
      component: 'LAYOUT',
      meta: {
        title: 'Menu1',
      },
      redirect: '/level/menu1/menu1-1/menu1-1-1',
      children: [
        {
          path: 'menu1-1',
          name: 'Menu11Demo',
          component: 'LAYOUT',
          meta: {
            title: 'Menu1-1',
          },
          redirect: '/level/menu1/menu1-1/menu1-1-1',
          children: [
            {
              path: 'menu1-1-1',
              name: 'Menu111Demo',
              component: '/demo/level/Menu111',
              meta: {
                title: 'Menu111',
              },
            },
          ],
        },
        {
          path: 'menu1-2',
          name: 'Menu12Demo',
          component: '/demo/level/Menu12',
          meta: {
            title: 'Menu1-2',
          },
        },
      ],
    },
    {
      path: 'menu2',
      name: 'Menu2Demo',
      component: '/demo/level/Menu2',
      meta: {
        title: 'Menu2',
        // ignoreKeepAlive: true,
      },
    },
  ],
},
  
    {
  path: '/page-demo',
  name: 'PageDemo',
  redirect: '/page-demo/form/basic',
  meta: {
    orderNo: 20,
    icon: 'ion:aperture-outline',
    title: 'routes.demo.page.page',
  },
  children: [
    // =============================form start=============================
    {
      path: 'form',
      name: 'FormPage',
      redirect: '/page-demo/form/basic',
      component: 'LAYOUT',
      meta: {
        title: 'routes.demo.page.form',
      },
      children: [
        {
          path: 'basic',
          name: 'FormBasicPage',
          component: '/demo/page/form/basic/index',
          meta: {
            title: 'routes.demo.page.formBasic',
          },
        },
        {
          path: 'step',
          name: 'FormStepPage',
          component: '/demo/page/form/step/index',
          meta: {
            title: 'routes.demo.page.formStep',
          },
        },
        {
          path: 'high',
          name: 'FormHightPage',
          component: '/demo/page/form/high/index',
          meta: {
            title: 'routes.demo.page.formHigh',
          },
        },
      ],
    },
    // =============================form end=============================
    // =============================desc start=============================
    {
      path: 'desc',
      name: 'DescPage',
      component: 'LAYOUT',
      redirect: '/page-demo/desc/basic',
      meta: {
        title: 'routes.demo.page.desc',
      },
      children: [
        {
          path: 'basic',
          name: 'DescBasicPage',
          component: '/demo/page/desc/basic/index',
          meta: {
            title: 'routes.demo.page.descBasic',
          },
        },
        {
          path: 'high',
          name: 'DescHighPage',
          component: '/demo/page/desc/high/index',
          meta: {
            title: 'routes.demo.page.descHigh',
          },
        },
      ],
    },
    // =============================desc end=============================

    // =============================result start=============================
    {
      path: 'result',
      name: 'ResultPage',
      redirect: '/page-demo/result/success',
      component: 'LAYOUT',

      meta: {
        title: 'routes.demo.page.result',
      },
      children: [
        {
          path: 'success',
          name: 'ResultSuccessPage',
          component: '/demo/page/result/success/index',
          meta: {
            title: 'routes.demo.page.resultSuccess',
          },
        },
        {
          path: 'fail',
          name: 'ResultFailPage',
          component: '/demo/page/result/fail/index',
          meta: {
            title: 'routes.demo.page.resultFail',
          },
        },
      ],
    },
    // =============================result end=============================

    // =============================account start=============================
    {
      path: 'account',
      name: 'AccountPage',
      component: 'LAYOUT',
      redirect: '/page-demo/account/setting',
      meta: {
        title: 'routes.demo.page.account',
      },
      children: [
        {
          path: 'center',
          name: 'AccountCenterPage',
          component: '/demo/page/account/center/index',
          meta: {
            title: 'routes.demo.page.accountCenter',
          },
        },
        {
          path: 'setting',
          name: 'AccountSettingPage',
          component: '/demo/page/account/setting/index',
          meta: {
            title: 'routes.demo.page.accountSetting',
          },
        },
      ],
    },
    // =============================account end=============================
    // =============================exception start=============================
    {
      path: 'exception',
      name: 'ExceptionPage',
      component: 'LAYOUT',
      redirect: '/page-demo/exception/404',
      meta: {
        title: 'routes.demo.page.exception',
      },
      children: [
        {
          path: '403',
          name: 'PageNotAccess',
          component: '/sys/exception/Exception',
          props: {
            status: 403,
          },
          meta: {
            title: '403',
          },
        },
        {
          path: '404',
          name: 'PageNotFound',
          component: '/sys/exception/Exception',
          props: {
            status: 404,
          },
          meta: {
            title: '404',
          },
        },
        {
          path: '500',
          name: 'ServiceError',
          component: '/sys/exception/Exception',
          props: {
            status: 500,
          },
          meta: {
            title: '500',
          },
        },
        {
          path: 'net-work-error',
          name: 'NetWorkError',
          component: '/sys/exception/Exception',
          props: {
            status: 10000,
          },
          meta: {
            title: 'routes.demo.page.netWorkError',
          },
        },
        {
          path: 'not-data',
          name: 'NotData',
          component: '/sys/exception/Exception',
          props: {
            status: 10001,
          },
          meta: {
            title: 'routes.demo.page.notData',
          },
        },
      ],
    },
    // =============================exception end=============================
    // =============================list start=============================
    {
      path: 'list',
      name: 'ListPage',
      component: 'LAYOUT',
      redirect: '/page-demo/list/card',
      meta: {
        title: 'routes.demo.page.list',
      },
      children: [
        {
          path: 'basic',
          name: 'ListBasicPage',
          component: '/demo/page/list/basic/index',
          meta: {
            title: 'routes.demo.page.listBasic',
          },
        },
        {
          path: 'card',
          name: 'ListCardPage',
          component: '/demo/page/list/card/index',
          meta: {
            title: 'routes.demo.page.listCard',
          },
        },
        {
          path: 'search',
          name: 'ListSearchPage',
          component: '/demo/page/list/search/index',
          meta: {
            title: 'routes.demo.page.listSearch',
          },
        },
      ],
    },
    // =============================list end=============================
  ],
},
  
    {
  path: '/permission',
  name: 'Permission',
  redirect: '/permission/front/page',
  meta: {
    orderNo: 15,
    icon: 'ion:key-outline',
    title: 'routes.demo.permission.permission',
  },

  children: [
    {
      path: 'front',
      name: 'PermissionFrontDemo',
      component: 'LAYOUT',
      meta: {
        title: 'routes.demo.permission.front',
      },
      children: [
        {
          path: 'page',
          name: 'FrontPageAuth',
          component: '/demo/permission/front/index',
          meta: {
            title: 'routes.demo.permission.frontPage',
          },
        },
        {
          path: 'btn',
          name: 'FrontBtnAuth',
          component: '/demo/permission/front/Btn',
          meta: {
            title: 'routes.demo.permission.frontBtn',
          },
        },
        {
          path: 'auth-pageA',
          name: 'FrontAuthPageA',
          component: '/demo/permission/front/AuthPageA',
          meta: {
            title: 'routes.demo.permission.frontTestA',
            roles: ['super'],
          },
        },
        {
          path: 'auth-pageB',
          name: 'FrontAuthPageB',
          component: '/demo/permission/front/AuthPageB',
          meta: {
            title: 'routes.demo.permission.frontTestB',
            roles: ['test'],
          },
        },
      ],
    },
    {
      path: 'back',
      name: 'PermissionBackDemo',
      component: 'LAYOUT',
      meta: {
        title: 'routes.demo.permission.back',
      },
      children: [
        {
          path: 'page',
          name: 'BackAuthPage',
          component: '/demo/permission/back/index',
          meta: {
            title: 'routes.demo.permission.backPage',
          },
        },
        {
          path: 'btn',
          name: 'BackAuthBtn',
          component: '/demo/permission/back/Btn',
          meta: {
            title: 'routes.demo.permission.backBtn',
          },
        },
      ],
    },
  ],
},
  
    {
  path: '/setup',
  name: 'SetupDemo',
  redirect: '/setup/index',
  meta: {
    orderNo: 90000,
    hideChildrenInMenu: true,
    icon: 'whh:paintroll',
    title: 'routes.demo.setup.page',
  },
  children: [
    {
      path: 'index',
      name: 'SetupDemoPage',
      component: '/demo/setup/index',
      meta: {
        title: 'routes.demo.setup.page',
        icon: 'whh:paintroll',
        hideMenu: true,
      },
    },
  ],
},
  
    {
  path: '/system',
  name: 'System',
  redirect: '/system/account',
  meta: {
    orderNo: 2000,
    icon: 'ion:settings-outline',
    title: 'routes.demo.system.moduleName',
  },
  children: [
    {
      path: 'account',
      name: 'AccountManagement',
      meta: {
        title: 'routes.demo.system.account',
        ignoreKeepAlive: false,
      },
      component: '/demo/system/account/index',
    },
    {
      path: 'account_detail/:id',
      name: 'AccountDetail',
      meta: {
        hideMenu: true,
        title: 'routes.demo.system.account_detail',
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/system/account',
      },
      component: '/demo/system/account/AccountDetail',
    },
    {
      path: 'role',
      name: 'RoleManagement',
      meta: {
        title: 'routes.demo.system.role',
        ignoreKeepAlive: true,
      },
      component: '/demo/system/role/index',
    },

    {
      path: 'menu',
      name: 'MenuManagement',
      meta: {
        title: 'routes.demo.system.menu',
        ignoreKeepAlive: true,
      },
      component: '/demo/system/menu/index',
    },
    {
      path: 'dept',
      name: 'DeptManagement',
      meta: {
        title: 'routes.demo.system.dept',
        ignoreKeepAlive: true,
      },
      component: '/demo/system/dept/index',
    },
    {
      path: 'changePassword',
      name: 'ChangePassword',
      meta: {
        title: 'routes.demo.system.password',
        ignoreKeepAlive: true,
      },
      component: '/demo/system/password/index',
    },
  ],
},
  
  ],
};

export default [
  {
    url: '/basic-api/getMenuList',
    timeout: 1000,
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request);
      if (!token) {
        return resultError('Invalid token!');
      }
      const checkUser = createFakeUserList().find((item) => item.token === token);
      if (!checkUser) {
        return resultError('Invalid user token!');
      }
      const id = checkUser.userId;
      if (!id || id === '1') {
        return resultSuccess([menus, test]);
      }
      if (id === '2') {
        return resultSuccess([dashboardRoute, authRoute, levelRoute, linkRoute]);
      }
    },
  },
] as MockMethod[];
