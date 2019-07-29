<template>
  <div class="login-continer">
    <!-- 导航 -->
    <van-nav-bar title="登录" />
    <!-- 登录表单 -->
    <form action="/" method="POST">
        <van-cell-group>
            <van-field
            v-model="user.mobile"
            required
            clearable
            label="手机号"
            right-icon="phone-o"
            placeholder="请输入手机号"
            />

            <van-field v-model="user.code" type="password" label="密码" placeholder="请输入密码" required right-icon="bag-o"/>
            <van-button type="info" block @click.prevent="handleLogin">登录</van-button>
      </van-cell-group>
    </form>
  </div>
</template>

<script>
// 引入axios
import axios from 'axios'
export default {
  name: 'loginInex',
  data () {
    return {
      user: {
        mobile: '18801185985',
        code: '246810'
      }
    }
  },
  methods: {
    async handleLogin () {
      const res = await axios({
        method: 'POST',
        url: 'http://ttapi.research.itcast.cn/app/v1_0/authorizations',
        data: this.user
      })
      console.log(res)
    }
  }
}
</script>

<style lang="less" scoped>
.van-nav-bar {
  background: #1989fa;
  .van-nav-bar__title {
    color: #fff;
  }
}
</style>
