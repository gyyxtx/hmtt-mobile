// 将登陆请求返回的token进行本地存储
// 实现并导出set/get/remove token的方法

const USER_KEY = 'user'
// 获取token方法
export const getToken = () =>
  JSON.parse(window.localStorage.getItem(USER_KEY))

// 设置token方法
export const setToken = (data) => {
  return window.localStorage.setItem(USER_KEY, JSON.stringify(data))
}
// 删除token方法
export const remove = () =>
  window.localStorage.removeItem(USER_KEY)
