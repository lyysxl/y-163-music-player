<template>
  <div class="footer">
    <MusicInfo />
    <MusicControl />
    <div class="music-ctr">
      <el-popover placement="top" :width="20" trigger="hover">
        <template #reference>
          <i class="iconfont icon-24gf-playlist"></i>
        </template>
        <div class="sy">
          <el-progress :percentage="50" status="exception" />
        </div>
      </el-popover>
      <i class="iconfont icon-24gf-playlist"></i>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MusicInfo from './components/MusicInfo.vue'
import MusicControl from './components/MusicControl.vue'
</script>

<style lang="less" scoped>
.footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 74px;
  z-index: 999;
  border-top: 1px solid rgb(224, 224, 224);
  display: flex;
  align-items: center;
  padding: 0 16px;
  justify-content: space-between;
  background: linear-gradient(
    to left top,
    #333,
    #333 1px,
    transparent 1px,
    transparent 3px,
    #333 3px,
    #333 4px,
    transparent 4px,
    transparent 6px,
    #333 6px,
    #333 7px,
    transparent 7px
  );
  background-size: 20px 20px;
  background-repeat: no-repeat;
  background-position: right 3px bottom 3px;
  background-color: #fff;
}

.music-ctr {
  .iconfont {
    margin: 5px;
  }
}
</style>
