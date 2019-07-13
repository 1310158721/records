const toolsRouterConfigs = [
  {
    path: 'tools-git',
    name: 'tools-git',
    meta: {
      browserTitle: 'Tools 常用工具',
      tab: {
        title: '常用工具-Git',
        path: '/tools-git',
        key: '/tools-git',
        belong: 'tools'
      }
    },
    component: () => import('@/views/layout/tools/common/git.vue')
  }
]

export default toolsRouterConfigs
