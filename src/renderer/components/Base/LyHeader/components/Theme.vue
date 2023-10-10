<template>
  <el-popover trigger="click" :width="320" :offset="20">
    <template #reference>
      <div class="theme">
        <i class="iconfont icon-pifugexinghuazhuti-xianxing"></i>
      </div>
    </template>
    <ul class="theme-list">
      <li class="theme-list-item" v-for="item in 6" :key="item"></li>
    </ul>
  </el-popover>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.theme {
  -webkit-app-region: no-drag;

  .iconfont {
    margin: 8px;
    font-size: 20px;
    color: #f19f9f;

    &:hover {
      color: #fff;
    }
  }
}
.theme-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -8px;
  margin-bottom: -8px;

  .theme-list-item {
    width: 90px;
    height: 90px;
    border-radius: 5px;
    overflow: hidden;
    background-color: #ec4141;
    margin-left: 8px;
    margin-bottom: 8px;
  }
}
</style>
