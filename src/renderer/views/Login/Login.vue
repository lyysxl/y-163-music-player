<template>
  <div class="login">
    <div class="close" title="关闭" @click="handleCloseClick">
      <i class="iconfont icon-guanbi"></i>
    </div>
    <component
      :is="component"
      @toOutherLogin="handleToOuther"
      @toScanQRCode="handleToScanQRCode"
    />
  </div>
</template>

<script lang="ts" setup>
import { shallowRef } from 'vue'
import type { Component } from 'vue'

import ScanQRCode from './components/ScanQRCode.vue'
import Other from './components/Other.vue'

const component = shallowRef<Component>(ScanQRCode)

const handleCloseClick = () => {
  window.api.ipcRenderer.send('CLOSE_LOGIN')
}

const handleToOuther = () => {
  component.value = Other
}

const handleToScanQRCode = () => {
  component.value = ScanQRCode
}
</script>

<style lang="less" scoped>
.login {
  height: 100%;
  position: relative;
  -webkit-app-region: drag;
  display: flex;
  justify-content: center;
  align-items: center;

  .close {
    position: fixed;
    top: 16px;
    right: 16px;
    cursor: pointer;
    -webkit-app-region: no-drag;

    .iconfont {
      color: #999;
    }

    &:hover {
      .iconfont {
        color: #000;
      }
    }
  }
}
</style>
