<template>
  <div class="frame-btn">
    <i class="iconfont icon-zuixiaohua"></i>
    <i class="iconfont icon-zuixiaohua" @click="handleSetFrame('min')"></i>
    <i class="iconfont icon-zuidahua" @click="handleSetFrame('max')"></i>
    <i class="iconfont icon-guanbi" @click="handleSetFrame('close')"></i>
  </div>
</template>

<script lang="ts" setup>
const handleSetFrame = (mode: string) => {
  if (!mode) return
  window.api.ipcRenderer.send('SET_FRAME_MODE', { mode })
}
</script>

<style lang="less" scoped>
.frame-btn {
  margin-right: 16px;
  -webkit-app-region: no-drag;

  .iconfont {
    margin: 8px;
    font-size: 18px;
    color: #f19f9f;

    &:hover {
      color: #fff;
    }
  }
}
</style>
