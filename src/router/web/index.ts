const webRouterConfigs = [
  {
    path: 'web-es5',
    name: 'web-es5',
    meta: {
      browserTitle: '前端三剑客',
      tab: {
        title: '前端-es5',
        path: '/web-es5',
        key: '/web-es5',
        belong: 'web'
      }
    },
    component: () => import(/* webpackChunkName: "web-es5" */ '@/views/layout/web/javascript/es5.vue')
  },
  {
    path: 'web-es6',
    name: 'web-es6',
    meta: {
      browserTitle: '前端三剑客',
      tab: {
        title: '前端-es6',
        path: '/web-es6',
        key: '/web-es6',
        belong: 'web'
      }
    },
    component: () => import(/* webpackChunkName: "web-es6" */ '@/views/layout/web/javascript/es6.vue')
  },
  {
    path: 'web-label',
    name: 'web-label',
    meta: {
      browserTitle: '前端三剑客',
      tab: {
        title: '前端-html标签',
        path: '/web-label',
        key: '/web-label',
        belong: 'web'
      }
    },
    component: () => import(/* webpackChunkName: "web-html" */ '@/views/layout/web/html/label.vue')
  },
  {
    path: 'web-css',
    name: 'web-css',
    meta: {
      browserTitle: '前端三剑客',
      tab: {
        title: '前端-css样式',
        path: '/web-css',
        key: '/web-css',
        belong: 'web'
      }
    },
    component: () => import(/* webpackChunkName: "web-css" */ '@/views/layout/web/css/css.vue')
  },
  {
    path: 'web-less',
    name: 'web-less',
    meta: {
      browserTitle: '前端三剑客',
      tab: {
        title: '前端-less样式',
        path: '/web-less',
        key: '/web-less',
        belong: 'web'
      }
    },
    component: () => import(/* webpackChunkName: "web-less" */ '@/views/layout/web/css/less.vue')
  },
  {
    path: 'web-sass',
    name: 'web-sass',
    meta: {
      browserTitle: '前端三剑客',
      tab: {
        title: '前端-sass样式',
        path: '/web-sass',
        key: '/web-sass',
        belong: 'web'
      }
    },
    component: () => import(/* webpackChunkName: "web-sass" */ '@/views/layout/web/css/sass.vue')
  },
  {
    path: 'web-stylus',
    name: 'web-stylus',
    meta: {
      browserTitle: '前端三剑客',
      tab: {
        title: '前端-stylus样式',
        path: '/web-stylus',
        key: '/web-stylus',
        belong: 'web'
      }
    },
    component: () => import('@/views/layout/web/css/stylus.vue')
  }
]

export default webRouterConfigs
