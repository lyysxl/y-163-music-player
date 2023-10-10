<template>
  <div class="music-control">
    <div class="control">
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
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.music-control {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  // justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;

  .control {
    width: 150px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;

    .iconfont {
      line-height: 30px;
      margin: 5px;

      &:hover {
        color: #f06767;
      }
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
</style>
