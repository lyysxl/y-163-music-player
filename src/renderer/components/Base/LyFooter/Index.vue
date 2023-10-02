<template>
  <div class="footer">
    <div class="toggle-btn" :class="{ active: !viewStore.isMusicViewerShow }">
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
        <button>hide</button>
        <i class="iconfont icon-guanbi"></i>
        <i class="iconfont icon-guanbi"></i>
        <i class="iconfont icon-guanbi"></i>
        <i class="iconfont icon-guanbi"></i>
        <i class="iconfont icon-guanbi"></i>
      </div>
    </div>
    <div class="mid-ctr">
      <div class="ctr">
        <!-- <i class="iconfont icon-guanbi"></i> -->
        <i class="iconfont icon-24gf-previous"></i>
        <i class="iconfont icon-24gf-play"></i>
        <i class="iconfont icon-24gf-next"></i>
        <!-- <i class="iconfont icon-guanbi"></i> -->
      </div>
      <div class="timer">
        <div class="current">00:00</div>
        <div class="process-bar">
          <div class="process"></div>
        </div>
        <div class="all">02:14</div>
      </div>
    </div>
    <div class="music-ctr" style="flex-direction: row; width: auto">
      <i class="iconfont icon-24gf-playlist"></i>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useViewStore } from '@/store'
import { ref } from 'vue'

const viewStore = useViewStore()

const handleShowPlayer = () => {
  viewStore.isMusicViewerShow = true
}

const handleHidePlayer = () => {
  viewStore.isMusicViewerShow = false
}
</script>

<style lang="less" scoped>
.footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 74px;
  background-color: #fff;
  z-index: 999;
  border-top: 1px solid rgb(224, 224, 224);
  display: flex;
  align-items: center;
  padding: 0 16px;
  justify-content: space-between;
  // background: linear-gradient(
  //   to left top,
  //   #333,
  //   #333 1px,
  //   transparent 1px,
  //   transparent 3px,
  //   #333 3px,
  //   #333 4px,
  //   transparent 4px,
  //   transparent 6px,
  //   #333 6px,
  //   #333 7px,
  //   transparent 7px
  // );

  .toggle-btn {
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

  .mid-ctr {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    // justify-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;

    .ctr {
      width: 150px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 4px;

      .iconfont {
        line-height: 30px;
        margin: 5px;
      }
    }
    .timer {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .current,
      .all {
        font-size: 12px;
        margin: 0 8px;
      }

      .process-bar {
        width: 240px;
        height: 4px;
        background-color: #eee;
        .process {
          width: 70%;
          height: 4px;
          // flex-grow: 1;
          background-color: #42b983;
          position: relative;

          &::before {
            content: '';
            position: absolute;
            height: 10px;
            width: 10px;
            border-radius: 50%;
            background-color: #42b983;
            top: -3px;
            right: -5px;
          }
        }
      }
    }
  }
}
</style>
