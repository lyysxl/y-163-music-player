<template>
  <div class="header">
    <div class="left">
      <div class="logo-wrap">
        <img
          src="@/assets/logo.png"
          alt="logo"
          class="logo"
          draggable="false"
        />
        <h1>网易云音乐</h1>
      </div>
      <RouterControl />
      <SearchBar />
    </div>
    <div class="right">
      <UserInfo />
      <Theme />
      <Notify />
      <FrameBtn />
    </div>
  </div>
</template>

<script lang="ts" setup>
import SearchBar from './components/SearchBar.vue'
import RouterControl from './components/RouterControl.vue'
import UserInfo from './components/UserInfo.vue'
import Theme from './components/Theme.vue'
import Notify from './components/Notify.vue'
import FrameBtn from './components/FrameBtn.vue'
</script>

<style lang="less" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  background-color: #ec4141;
  -webkit-app-region: drag;
  user-select: none;

  .left,
  .right {
    display: flex;
    align-items: center;
  }

  .logo-wrap {
    display: flex;
    align-items: center;
    height: 40px;
    margin: 0 16px;
    padding: 10px;
    width: 170px;

    .logo {
      height: 30px;
      width: 30px;
      background-color: #fff;
      border-radius: 50%;
      overflow: hidden;
    }

    h1 {
      color: #fff;
      font-size: 18px;
      letter-spacing: 3px;
      font-weight: 500;
      text-indent: 8px;
    }
  }
}
</style>
