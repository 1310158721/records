const memorandumRouterConfigs = [
  {
    path: 'memorandum-javascript',
    name: 'memorandum-javascript',
    meta: {
      browserTitle: '我的记录',
      tab: {
        title: '我的记录-js',
        path: '/memorandum-javascript',
        key: '/memorandum-javascript',
        belong: 'memorandum'
      }
    },
    component: () => import('@/views/layout/memorandum/records/javascript.vue')
  },
  {
    path: 'memorandum-css',
    name: 'memorandum-css',
    meta: {
      browserTitle: '我的记录',
      tab: {
        title: '我的记录-css',
        path: '/memorandum-css',
        key: '/memorandum-css',
        belong: 'memorandum'
      }
    },
    component: () => import('@/views/layout/memorandum/records/css.vue')
  },
  {
    path: 'memorandum-html',
    name: 'memorandum-html',
    meta: {
      browserTitle: '我的记录',
      tab: {
        title: '我的记录-html',
        path: '/memorandum-html',
        key: '/memorandum-html',
        belong: 'memorandum'
      }
    },
    component: () => import('@/views/layout/memorandum/records/html.vue')
  }
]

export default memorandumRouterConfigs
