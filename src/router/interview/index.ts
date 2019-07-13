const interviewRouterConfigs = [
  {
    path: 'algorithm-array',
    name: 'algorithm-array',
    meta: {
      browserTitle: '面试-数组算法',
      tab: {
        title: '面试-数组算法',
        path: '/algorithm-array',
        key: '/algorithm-array',
        belong: 'interview'
      }
    },
    component: () => import('@/views/layout/interview/algorithm/array.vue')
  },
  {
    path: 'interview-vue',
    name: 'interview-vue',
    meta: {
      browserTitle: '面试-VUE',
      tab: {
        title: '面试-VUE',
        path: '/interview-vue',
        key: '/interview-vue',
        belong: 'interview'
      }
    },
    component: () => import('@/views/layout/interview/frames/vue.vue')
  }
]

export default interviewRouterConfigs
