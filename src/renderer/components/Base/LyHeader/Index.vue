<template>
  <div class="header">
    <div class="left">
      <div class="logo-wrap">
        <img
          src="@/assets/logo.png"
          alt="logo"
          class="logo"
          draggable="false"
        />
        <h1>网易云音乐</h1>
      </div>
      <div class="router-ctl">
        <div class="last" :class="{ active: isRouterBack }">
          <i class="iconfont icon-shangyibu" @click="handleRouterLast"></i>
        </div>
        <div class="next" :class="{ active: isRouterForward }">
          <i class="iconfont icon-xiayibu" @click="handleRouterNext"></i>
        </div>
      </div>
      <div class="search-bar">
        <i class="iconfont icon-sousuoxiao"></i>
        <input
          type="text"
          placeholder="不是"
          style="-webkit-app-region: no-drag"
        />
      </div>
      <div class="tgsq">
        <div class="iconfont icon-maikefeng next"></div>
      </div>
    </div>
    <div class="right">
      <div class="userinfo">
        <div class="actr">
          <img
            src="@/assets/logo.png"
            alt="logo"
            class="logo"
            draggable="false"
          />
        </div>
        <div class="nick">未登录</div>
        <el-popover trigger="click" :width="320" :offset="20">
          <template #reference>
            <div class="gxh">
              <i class="iconfont icon-pifugexinghuazhuti-xianxing"></i>
            </div>
          </template>
          <ul class="theme-list">
            <li class="theme-list-item" v-for="item in 6" :key="item"></li>
          </ul>
        </el-popover>

        <div class="setting" @click="handleToSetting">
          <i class="iconfont icon-shezhi"></i>
        </div>
        <div class="notf">
          <i class="iconfont icon-xiaoxi"></i>
        </div>
      </div>
      <div class="view-ctr">
        <i class="iconfont icon-zuixiaohua"></i>
        <i class="iconfont icon-zuidahua"></i>
        <i class="iconfont icon-guanbi"></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const isRouterBack = ref(false)
const isRouterForward = ref(false)

const handleToSetting = () => {
  router.push('/setting')
}

const handleRouterLast = () => {
  router.go(-1)
}

const handleRouterNext = () => {
  router.go(1)
}
</script>

<style lang="less" scoped>
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
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  background-color: #ec4141;
  -webkit-app-region: drag;
  user-select: none;

  .left,
  .right {
    display: flex;
    align-items: center;
  }

  .logo-wrap {
    display: flex;
    align-items: center;
    height: 40px;
    margin: 0 16px;
    padding: 10px;
    width: 170px;

    .logo {
      height: 30px;
      width: 30px;
      background-color: #fff;
      border-radius: 50%;
      overflow: hidden;
    }

    h1 {
      color: #fff;
      font-size: 18px;
      letter-spacing: 3px;
      font-weight: 500;
      text-indent: 8px;
    }
  }

  .router-ctl {
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

  .tgsq {
    .next {
      width: 25px;
      height: 25px;
      line-height: 25px;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 50%;
      margin-left: 8px;
      color: #969696;
      font-size: 14px;
    }
  }

  .userinfo {
    display: flex;
    align-items: center;
    color: #f19f9f;
    -webkit-app-region: no-drag;

    .iconfont {
      font-size: 24px;
      color: #f19f9f;

      &:hover {
        color: #fff;
      }
    }

    .actr {
      img {
        height: 30px;
        width: 30px;
        border-radius: 50%;
        background-color: #fff;
        vertical-align: top;
      }

      & ~ div {
        margin: 0 8px;
        color: #fff;
      }
    }
  }

  .view-ctr {
    margin-right: 16px;
    -webkit-app-region: no-drag;

    .iconfont {
      margin: 8px;
      font-size: 24px;
      color: rgb(241, 159, 159);

      &:hover {
        color: #fff;
      }
    }
  }
}
</style>
