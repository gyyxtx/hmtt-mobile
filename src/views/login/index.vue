<template>
  <div class="login-continer">
    <!-- 导航 -->
    <van-nav-bar title="登录" />
    <!-- 登录表单 -->
    <form>
        <van-cell-group>
            <van-field
            v-model="user.phone"
            required
            clearable
            label="手机号"
            right-icon="question-o"
            placeholder="请输入手机号"
            />

            <van-field v-model="user.password" type="password" label="密码" placeholder="请输入密码" required />
            <van-button type="info" block>登录</van-button>
      </van-cell-group>
    </form>
  </div>
</template>

<script>
export default {
  name: 'loginInex',
  data () {
    return {
      user: {
        phone: '18801185985',
        password: '246810'
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
