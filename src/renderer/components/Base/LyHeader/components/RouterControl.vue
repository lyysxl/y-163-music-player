<template>
  <div class="router-control">
    <div class="last" :class="{ active: isRouterBack }">
      <i class="iconfont icon-shangyibu" @click="handleRouterLast"></i>
    </div>
    <div class="next" :class="{ active: isRouterForward }">
      <i class="iconfont icon-xiayibu" @click="handleRouterNext"></i>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const isRouterBack = ref(true)
const isRouterForward = ref(true)

const handleRouterLast = () => {
  router.go(-1)
}

const handleRouterNext = () => {
  router.go(1)
}
</script>

<style lang="less" scoped>
.router-control {
  display: flex;
  align-items: center;
  -webkit-app-region: no-drag;

  .last,
  .next {
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    margin-left: 8px;
    color: #969696;

    .iconfont {
      font-size: 12px;
    }

    &.active {
      color: #fff;
    }
  }
}
</style>
