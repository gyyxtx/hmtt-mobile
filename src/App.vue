<template>
  <div id="app">
    <van-button type="primary">主要按钮</van-button>
    <div class="swy"></div>
    <router-view/>
  </div>
</template>

<style lang="less" scoped>
.swy {
  width: 100px;
  height: 100px;
  background-color: hotpink;
}
</style>
