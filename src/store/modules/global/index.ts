import * as globalApi from '@/http/apis/global'
import * as localStorage from '@/utils/localStorage'

const global = {
  namespaced: true,
  state: {
    headerNavList: [], // Header 部分的数据
    allAsideNavList: {}, // 所有 Aside 部分的数据
    asideNavList: [], // 单个 Aside 部分的数据
    headerActiveTitle: '', // 当前 Header 被激活的模块的标题，welcome 页面有用到
    headerActiveIndex: '', // 当前 Header 被激活的模块
    asideOpenId: '', // 当前 Aside 展开的模块
    asideActiveIndex: '', // 当前 Aside 被激活的模块
  },
  mutations: {
    // 设置 header 部分的数据
    setHeaderNavList(state: any, data: string) {
      state.headerNavList = data
    },

    // 设置所有 Aside 部分的数据
    setAllAsideNavList(state: any, data: string) {
      state.allAsideNavList = data
    },

    // 设置单个 Aside 部分的数据
    setAsideNavList(state: any, data: string) {
      const headerActiveIndex = localStorage.get('headerActiveIndex') || 'node'
      state.asideNavList = state.allAsideNavList[headerActiveIndex]
    },

    // 设置当前 Header 被激活的模块的标题，welcome 页面有用到
    setHeaderActiveTitle(state: any) {
      interface HeaderActiveTitle {
        title: string;
        key: string;
        index: string;
      }
      const headerActiveIndex = localStorage.get('headerActiveIndex') || 'node'
      state.headerActiveTitle = state.headerNavList
        .filter((item: HeaderActiveTitle) => item.index === headerActiveIndex)[0].title || ''
    },

    // 设置当前 Header 被激活的模块
    setHeaderActiveIndex(state: any, data: string) {
      state.headerActiveIndex = data
    },

    // 设置当前 Aside 展开的模块
    setAsideOpenId(state: any, data: string) {
      state.asideOpenId = data
    },

    // 设置当前 Aside 被激活的模块
    setAsideActiveIndex(state: any, data: string) {
      state.asideActiveIndex = data
    }
  },
  actions: {
    getNavDataList({ commit }: any) {
      const url: string = './static/mock/nav.json'
      return new Promise((reslove) => {
        globalApi.getNavData(url)
        .then((res: any) => {
          if (res.data.errorCode === 0) {
            const headerNavList = res.data.headerNavList
            const allAsideNavList = res.data.asideNavList
            commit('setHeaderNavList', headerNavList)
            commit('setAllAsideNavList', allAsideNavList)
            reslove()
          }
        })
      })
    }
  }
}

export default global
