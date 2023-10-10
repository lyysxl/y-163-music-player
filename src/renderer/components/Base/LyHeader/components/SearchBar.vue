<template>
  <el-popover trigger="click" :width="320" :offset="20">
    <template #reference>
      <div class="search-bar">
        <i class="iconfont icon-sousuoxiao"></i>
        <input
          type="text"
          placeholder="不是"
          style="-webkit-app-region: no-drag"
        />
      </div>
    </template>
    <ul class="theme-list">
      <li class="theme-list-item" v-for="item in 6" :key="item"></li>
    </ul>
  </el-popover>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.search-bar {
  display: flex;
  align-items: center;
  margin-left: 12px;
  position: relative;

  .iconfont {
    position: absolute;
    left: 10px;
    top: 7px;
    color: #f19f9f;
  }

  input {
    height: 30px;
    outline: none;
    border: none;
    background-color: rgba(0, 0, 0, 0.1);
    padding: 0 16px 0 30px;
    width: 110px;
    border-radius: 15px;
    color: #fff;

    &::placeholder {
      color: #f19f9f;
    }
  }
}
</style>
