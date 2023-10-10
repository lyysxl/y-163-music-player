<template>
  <div class="other">
    <div class="logo">
      <img src="~@/assets/logo.png" alt="logo" />
    </div>
    <div class="login-form">
      <el-input placeholder="请输入手机号" size="large"> </el-input>
      <el-input placeholder="请输入密码" size="large"> </el-input>
      <div class="login-check">
        <el-checkbox>自动登录</el-checkbox>
        <div class="login-link">
          <a href="">忘记密码</a>
          <span>|</span>
          <a href="">忘记密码</a>
        </div>
      </div>
      <div class="login-btn">
        <el-button type="primary">登录</el-button>
        <br />
        <br />
        <el-button type="primary" link>注册</el-button>
      </div>
    </div>
    <div class="other-login-action">
      <i class="iconfont icon-weixin"></i>
      <i class="iconfont icon-QQ"></i>
      <i class="iconfont icon-xinlangweibo"></i>
      <i class="iconfont icon-netease"></i>
    </div>
    <div class="login-comfirm">
      <el-checkbox>同意</el-checkbox>
      <a href="https://st.music.163.com/official-terms/service" target="_blank">
        《服务条款》
      </a>
      <a href="https://st.music.163.com/official-terms/service" target="_blank">
        《隐私政策》
      </a>
      <a href="https://st.music.163.com/official-terms/service" target="_blank">
        《儿童隐私政策》
      </a>
    </div>
  </div>
  <div class="to-qrcode" @click="handleToScanQRCode">
    <img src="~@/assets/img/to-scan.png" alt="to-scan" />
    <div class="title">扫码登录更安全</div>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue'
const $emit = defineEmits(['toScanQRCode'])

const handleToScanQRCode = () => {
  $emit('toScanQRCode')
}
</script>

<style lang="less" scoped>
.other {
  width: 300px;
  height: 450px;
  position: relative;
  -webkit-app-region: no-drag;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.logo {
  img {
    width: 80px;
    height: 80px;
  }
}

.login-check {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .login-link {
    a {
      color: rgb(80, 125, 175);
      text-decoration: none;
      font-size: 13px;
    }

    span {
      margin: 0 16px;
    }
  }
}

.login-btn {
  margin-top: 16px;
  .el-button {
    width: 100%;
  }
}

.other-login-action {
  width: 100%;
  display: flex;
  justify-content: space-around;

  .iconfont {
    // color: #;
    padding: 8px;
    font-size: 16px;
    color: #fff;
    border-radius: 50%;
  }

  .icon-weixin {
    background-color: rgb(2, 222, 108);
  }

  .icon-QQ {
    background-color: rgb(25, 145, 255);
  }

  .icon-xinlangweibo {
    background-color: rgb(237, 70, 47);
  }

  .icon-netease {
    background-color: rgb(237, 70, 47);
  }
}

.login-comfirm {
  display: flex;
  align-items: center;
  a {
    color: rgb(80, 125, 175);
    font-size: 12px;
    text-decoration: none;
  }
}

.to-qrcode {
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  background-color: #000;
  cursor: pointer;
  -webkit-app-region: no-drag;

  .title {
    position: absolute;
    top: 10px;
    left: 60px;
    font-size: 12px;
    line-height: 16px;
    height: 16px;
    width: 84px;
    color: #eee;
    background-color: #999;
    padding: 4px 12px;

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: -4px;
      border: 5px solid transparent;
      border-left-color: #999;
      transform: rotate(90deg);
    }
  }
}
</style>
