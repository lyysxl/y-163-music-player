<template>
  <div class="userinfo">
    <div class="actr">
      <img src="@/assets/logo.png" alt="logo" class="logo" draggable="false" />
    </div>
    <div class="nick" @click="handleToLogin">未登录</div>
    <div class="setting" @click="handleToSetting">
      <i class="iconfont icon-shezhi"></i>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const handleToLogin = () => {
  window.api.ipcRenderer.send('OPEN_LOGIN_FRAME', {})
}

const handleToSetting = () => {
  router.push('/setting')
}
</script>

<style lang="less" scoped>
.userinfo {
  display: flex;
  align-items: center;
  color: #f19f9f;
  -webkit-app-region: no-drag;

  .nick {
    font-size: 14px;
    margin: 0 8px;
    color: #ddd;

    &:hover {
      color: #fff;
    }
  }

  .iconfont {
    font-size: 20px;
    color: #f19f9f;

    &:hover {
      color: #fff;
    }
  }

  .actr {
    img {
      height: 30px;
      width: 30px;
      border-radius: 50%;
      background-color: #fff;
      vertical-align: top;
    }
  }
}
</style>
