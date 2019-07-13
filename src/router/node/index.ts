const nodeRouterConfigs = [
  {
    path: 'node-fs',
    name: 'node-fs',
    meta: {
      browserTitle: 'Node 相关 Apis',
      tab: {
        title: 'Node-文件系统',
        path: '/node-fs',
        key: '/node-fs',
        belong: 'node'
      }
    },
    component: () => import('@/views/layout/node/apis/fs.vue')
  },
  {
    path: 'node-express',
    name: 'node-express',
    meta: {
      browserTitle: 'Node 相关框架',
      tab: {
        title: 'Express 框架',
        path: '/node-express',
        key: '/node-express',
        belong: 'node'
      }
    },
    component: () => import('@/views/layout/node/frames/express.vue')
  },
  {
    path: 'node-webpack',
    name: 'node-webpack',
    meta: {
      browserTitle: 'Node 自动化流程',
      tab: {
        title: 'Webpack 自动化工具',
        path: '/node-webpack',
        key: '/node-webpack',
        belong: 'node'
      }
    },
    component: () => import('@/views/layout/node/auto/webpack.vue')
  },
  {
    path: 'node-gulp',
    name: 'node-gulp',
    meta: {
      browserTitle: 'Node 自动化流程',
      tab: {
        title: 'Gulp 自动化工具',
        path: '/node-gulp',
        key: '/node-gulp',
        belong: 'node'
      }
    },
    component: () => import('@/views/layout/node/auto/gulp.vue')
  }
]

export default nodeRouterConfigs
