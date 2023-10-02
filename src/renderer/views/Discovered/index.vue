<template>
  <div class="discovered">
    <LyTabBar :tabBarList="tabBarList" @change="handleTabBarChange"></LyTabBar>
  </div>
</template>

<script lang="ts" setup>
import LyTabBar from '@/components/Base/LyTabBar/LyTabBar.vue'

import type { TabBarList } from '@/components/Base/LyTabBar/@types'
const tabBarList: TabBarList = [
  {
    path: '',
    name: '个性推荐'
  },
  {
    path: '',
    name: '专属订制'
  },
  {
    path: '',
    name: '歌单'
  },
  {
    path: '',
    name: '排行榜'
  },
  {
    path: '',
    name: '歌手'
  },
  {
    path: '',
    name: '最新音乐'
  }
]

const handleTabBarChange = (current: number) => {
  console.log(current)
}
</script>
