const elRouterConfigs = [
  {
    path: 'el-component-form',
    name: 'el-component-form',
    meta: {
      browserTitle: 'el-Form表单',
      tab: {
        title: 'Form表单',
        path: '/el-component-form',
        key: '/el-component-form',
        belong: 'elementui'
      }
    },
    component: () => import('@/views/layout/elementui/components/form.vue')
  },
  {
    path: 'el-component-timepicker',
    name: 'el-component-timepicker',
    meta: {
      browserTitle: 'el-时间控件',
      tab: {
        title: '时间控件',
        path: '/el-component-timepicker',
        key: '/el-component-timepicker',
        belong: 'elementui'
      }
    },
    component: () => import('@/views/layout/elementui/components/timepicker.vue')
  }
]

export default elRouterConfigs
