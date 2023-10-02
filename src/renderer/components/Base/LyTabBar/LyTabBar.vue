<template>
  <div class="ly-tab-bar">
    <ul class="tab-list">
      <li
        class="tab-item"
        :class="{ current: current === index }"
        v-for="(tabItem, index) in props.tabBarList"
        :key="index"
        @click="handleTabItemClick(index)"
      >
        {{ tabItem.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineEmits, defineProps, withDefaults } from 'vue'
import { TabBarList } from './@types'

const emit = defineEmits<{
  (event: 'change', current: number): void
}>()

const props = withDefaults(
  defineProps<{
    tabBarList: TabBarList
  }>(),
  {
    tabBarList: () => []
  }
)

const current = ref(0)

const handleTabItemClick = (c: number) => {
  current.value = c
  emit('change', c)
}
</script>

<style lang="less" scoped>
.ly-tab-bar {
  height: 50px;
  width: 100%;
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.3);

  .tab-list {
    display: flex;
    padding: 0 16px;

    .tab-item {
      font-size: 16px;
      padding: 12px;
      position: relative;

      &.current {
        font-size: 20px;
        font-weight: 700;
      }

      &.current::after {
        content: '';
        display: block;
        position: absolute;
        left: 50%;
        bottom: 5px;
        height: 4px;
        width: 55%;
        transform: translate(-50%, 0);
        background-color: rgb(236, 65, 65);
      }
    }
  }
}
</style>
