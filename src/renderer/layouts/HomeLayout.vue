<template>
  <LyHeader />
  <div class="main">
    <Sidebar />
    <el-scrollbar style="flex-grow: 1">
      <div class="content" style="position: relative">
        <router-view />
      </div>
    </el-scrollbar>
  </div>
  <MusicViewer />
  <LyFooter />
</template>

<script lang="ts" setup>
import Sidebar from '@/components/Base/LySidebar/Index.vue'
import LyHeader from '@/components/Base/LyHeader/Index.vue'
import LyFooter from '@/components/Base/LyFooter/Index.vue'
import MusicViewer from '@/components/MusicViewer/index.vue'
</script>

<style lang="less" scoped>
.main {
  display: flex;
  height: calc(100vh - 60px - 75px);
}
</style>
