// 封装请求模块
// 导入axios
import axios from 'axios'
// 设置基地址
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn'
})
// 添加请求拦截器
request.interceptors.request.use(function (config) {
// 在发送请求之前做些什么
  return config
}, function (error) {
// 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
request.interceptors.response.use(function (response) {
// 对响应数据做点什么
// 如果响应中有data数据，返回data数据  如果没有，直接返回，不做任何处理
  return response.data.data || response.data
}, function (error) {
// 对响应错误做点什么
  return Promise.reject(error)
})

export default request
