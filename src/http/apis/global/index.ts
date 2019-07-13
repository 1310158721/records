import { httpGet } from '@/http/request'

/**
 * 获取头部和侧边栏的导航数据
 */
export async function getNavData(url: string, params: any = {}) {
  return httpGet(url, params)
}

