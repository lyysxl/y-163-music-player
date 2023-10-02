<template>
  <div class="sidebar">
    <el-scrollbar style="flex-grow: 1">
      <div style="display: table"></div>
      <div class="block-k">
        <ul>
          <li
            :class="{ active: '/discovered' === acitveRoutePath }"
            @click="handleToPath('/discovered')"
          >
            发现音乐
          </li>
          <li>播客</li>
          <li>视频</li>
          <li>关注</li>
          <li>直播</li>
          <li>私人漫游</li>
        </ul>
      </div>
      <div class="block-k">
        <p class="info">我的音乐</p>
        <ul>
          <li
            :class="{ active: '/my-music' === acitveRoutePath }"
            @click="handleToPath('/my-music')"
          >
            我喜欢的音乐
          </li>
          <li>本地与下载</li>
          <li>最近播放</li>
          <li>我的音乐云盘</li>
          <li>我的播客</li>
          <li>我的收藏</li>
        </ul>
      </div>
      <div class="block-k">
        <p class="info">创建的歌单</p>
        <ul>
          <li>发现音乐</li>
          <li>播客</li>
        </ul>
      </div>
      <div class="block-k">
        <p class="info">收藏的歌单</p>
        <ul>
          <li>发现音乐</li>
          <li>播客</li>
          <li>视频</li>
        </ul>
      </div>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()
const router = useRouter()

const acitveRoutePath = computed(() => {
  return route.path
})

const handleToPath = (path: string) => {
  router.push(path)
}
</script>

<style lang="less" scoped>
.sidebar {
  width: 200px;
  height: 100%;
  border-right: 1px solid rgb(224, 224, 224);

  .block-k {
    margin-left: 16px;
    margin-right: 12px;
    margin-top: 8px;
    margin-bottom: 8px;

    .info {
      padding: 8px;
      color: #b9b9b9;
      font-size: 14px;
    }

    ul {
      li {
        font-size: 15px;
        padding: 8px;
        // border-radius: 8px;
        margin-bottom: 4px;
        transition: 0.1s;

        &.active {
          font-size: 18px;
          font-weight: 700;
          background-color: rgb(245, 245, 245);
        }
        &:hover {
          background-color: rgb(245, 245, 245);
        }
      }
    }
  }
}
</style>
