<template>
  <div class="login-continer">
    <!-- 表单验证测试代码 -->
    <!-- 自带校验 -->
    <!-- <input v-validate="'required|email'" name="email" type="text">
    <span>{{ errors.first('email') }}</span> -->
    <!-- 自定义校验 -->
    <!-- <input v-validate="'required|phone'" name="phone" type="text">
    <span>{{ errors.first('phone') }}</span> -->
    <!-- 导航 -->
    <van-nav-bar title="登录" />
    <!-- 登录表单 -->
    <form action="/" method="POST">
        <van-cell-group>
            <van-field
            v-validate="'required|phone'" name="phone"
            :error-message="errors.first('phone')"
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
import { login } from '@/api/user.js'
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
    //   登录发送请求
    async handleLogin () {
    // 判断请求是否成功，如果成功就执行try，如果失败，就执行catch
      try {
        // 验证手机号
        this.$validator.validate().then(async valid => {
          // 如果验证失败，直接返回
          if (!valid) {
            console.log('error----')
            return
          }
          // 验证成功，执行登录
          const res = await login(this.user)
          console.log(res)
          // 登录成功后将请求返回的token值，更新给token
          this.$store.commit('setUser', res)
        })
      } catch (error) {
        console.log(error)
      }
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
