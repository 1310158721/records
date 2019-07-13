const framesRouterConfigs = [
  {
    path: 'vue-apis',
    name: 'vue-apis',
    meta: {
      browserTitle: '前端框架',
      tab: {
        title: 'Vue Apis 相关',
        path: '/vue-apis',
        key: '/vue-apis',
        belong: 'frames'
      }
    },
    component: () => import('@/views/layout/frames/vue/apis.vue')
  },
  {
    path: 'vue-derectives',
    name: 'vue-derectives',
    meta: {
      browserTitle: '前端框架',
      tab: {
        title: 'Vue derectives 相关',
        path: '/vue-derectives',
        key: '/vue-derectives',
        belong: 'frames'
      }
    },
    component: () => import('@/views/layout/frames/vue/derectives.vue')
  },
  {
    path: 'vue-router',
    name: 'vue-router',
    meta: {
      browserTitle: '前端框架',
      tab: {
        title: 'Vue router 相关',
        path: '/vue-router',
        key: '/vue-router',
        belong: 'frames'
      }
    },
    component: () => import('@/views/layout/frames/vue/router.vue')
  },
  {
    path: 'vue-vuex',
    name: 'vue-vuex',
    meta: {
      browserTitle: '前端框架',
      tab: {
        title: 'Vue vuex 相关',
        path: '/vue-vuex',
        key: '/vue-vuex',
        belong: 'frames'
      }
    },
    component: () => import('@/views/layout/frames/vue/vuex.vue')
  }
]

export default framesRouterConfigs
