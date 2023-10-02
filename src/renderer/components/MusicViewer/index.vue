<template>
  <div class="music-viewer" :class="{ show: viewStore.isMusicViewerShow }">
    <div style="display: none"><LyyHeader /></div>
  </div>
</template>

<script lang="ts" setup>
import { defineOptions } from 'vue'
import { useViewStore } from '@/store'

import LyyHeader from '@/components/Base/LyHeader/Index.vue'

const viewStore = useViewStore()

defineOptions({
  name: 'music-viewer'
})
</script>

<style lang="less" scoped>
.music-viewer {
  position: fixed;
  inset: 0 0 75px 0;
  background-color: #fff;
  transform: translateY(100%);
  transition: all 0.3s;

  &.show {
    transform: translateY(0);
  }
}
</style>
