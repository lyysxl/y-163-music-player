<template>
  <div class="music-info" :class="{ active: !viewStore.isMusicViewerShow }">
    <div class="block-1" @click="handleShowPlayer">
      <div>
        <img
          src="https://p2.music.126.net/HeGrAKPiZhKkONiFDxZvmw==/109951164384346866.jpg?param=500y500"
          alt=""
          style="width: 50px; height: 50px"
        />
      </div>
      <div style="margin-left: 8px">
        <div>
          <span>十年人均</span>
        </div>
        <div>诚意寻</div>
      </div>
    </div>
    <div class="block-2" @click="handleHidePlayer">
      <i class="iconfont icon-guanbi"></i>
      <i class="iconfont icon-guanbi"></i>
      <i class="iconfont icon-guanbi"></i>
      <i class="iconfont icon-guanbi"></i>
      <i class="iconfont icon-guanbi"></i>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useViewStore } from '@/store'

const viewStore = useViewStore()

const handleShowPlayer = () => {
  viewStore.isMusicViewerShow = true
}

const handleHidePlayer = () => {
  viewStore.isMusicViewerShow = false
}
</script>

<style lang="less" scoped>
.music-info {
  height: 74px;
  overflow: hidden;

  .block-1,
  .block-2 {
    display: flex;
    align-items: center;
    height: 74px;
    width: 220px;
    transition: 0.5s;
    transform: translateY(-100%);
  }

  &.active {
    .block-1,
    .block-2 {
      transform: translateY(0);
    }
  }
}
</style>
