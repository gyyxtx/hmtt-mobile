// 用户相关接口封装模块
// 最佳实践：建议所有请求都封装一个一个的小函数，在需要的时候直接调用
// 好处：1.好维护，统一管理  2.可重复
// 遵循一个原则:不要直接在组建中直接发送请求，最好封装成函数进行调用

import request from '@/utils/request.js'
/* 1. 新建api/user.js模块
2. 导入request模块
3. 封装登录请求的方法
4. 导出模块
5. 在login/index.vue发送请求
 */
// export defalut 导出的是一个对象 expost导出的是对象中的一个方法  所以使用时，直接结构赋值即可
// 结构赋值，将请求参数直接进行解构赋值
export const login = ({
  mobile,
  code
}) => {
// 将请求结果进行返回
  return request({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data: {
      mobile,
      code
    }
  })
}
