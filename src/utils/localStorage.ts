// 获取LocalStorage
export const get = (key: string) => window.localStorage.getItem(key)

  // 修改LocalStorage
export const set = (key: string, value: any) => window.localStorage.setItem(key, value)

// 清楚LocalStorage
export const clear = () => window.localStorage.clear()

// 删除某个LocalStorage
export const remove = (key: string) => window.localStorage.removeItem(key)
