<template>
  <div class="scan-qr-code">
    <h1>扫码登录</h1>
    <!-- 二维码登录 -->
    <div v-if="current === 0" class="qr-code">
      <div class="code" ref="codeRef">
        <!-- qrcode -->
        <div v-if="isTimeout" class="mask">
          <div class="mid">
            <p>二维码已失效</p>
            <el-button @click="handleRefreshCode" type="primary"
              >点击刷新
            </el-button>
          </div>
        </div>
      </div>
      <p style="margin-top: 16px; font-size: 14px">
        使用<span style="color: red">网易云音乐APP</span>扫码登录
      </p>
    </div>
    <div v-if="current === 0" class="outher" @click="handleOutherClick">
      选择其他登录模式<span>&gt;</span>
    </div>
    <!-- 确认登录 -->
    <div v-if="current === 1" class="scan-confirm">
      <img src="~@/assets/img/scan_confirm.png" />
      <span>扫码成功</span>
      <p>请在手机上确认登录</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineEmits, onMounted, onUnmounted } from 'vue'

import { createQrCodeKey, createQrCodeURL, checkQrCodeStatus } from '@/api/user'
import { getQRCode, QRCodeRuturn } from '@/utils/qrcode'

let qr: QRCodeRuturn
const $emit = defineEmits(['toOutherLogin'])

/**
 * 二维码是否超时
 */
const isTimeout = ref(false)
/**
 * 当前扫码步骤
 * 0 二维码创建
 * 1 二维码已被扫码
 */
const current = ref(0)
const codeRef = ref<HTMLDivElement>()
let key = ''

/**
 * 跳转至其他登录方式
 */
const handleOutherClick = () => {
  $emit('toOutherLogin')
}

const handleRefreshCode = async () => {
  const qrCodeKey = await createQrCodeKey()
  console.log(qrCodeKey)
  const qrCodeUrl = await createQrCodeURL(qrCodeKey.data.unikey)
  qr.makeCode(qrCodeUrl.data.url)
  key = qrCodeKey.data.unikey
  startQrCode()
  isTimeout.value = false
  current.value = 0
}

let timer = -1
const startQrCode = () => {
  timer = window.setInterval(async () => {
    const statusRes = await checkQrCodeStatus(key)
    if (statusRes.code === 800) {
      isTimeout.value = true
      current.value = 0
      // alert('二维码已过期,请重新获取')
      clearInterval(timer)
    }
    if (statusRes.code === 802) {
      current.value = 1
    }
    if (statusRes.code === 803) {
      // 这一步会返回cookie
      clearInterval(timer)
      alert('授权登录成功')
      // await getLoginStatus(statusRes.cookie)
      // localStorage.setItem('cookie', statusRes.cookie)
    }
  }, 1500)
}

onMounted(() => {
  if (codeRef.value) {
    qr = getQRCode(codeRef.value)
  }
  handleRefreshCode()
})

onUnmounted(() => {
  timer != -1 && clearInterval(timer)
})
</script>

<style lang="less" scoped>
.scan-qr-code {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  -webkit-app-region: no-drag;

  h1 {
    font-size: 26px;
    font-weight: 500;
    margin-bottom: 16px;
  }

  .qr-code {
    width: 280px;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .code {
      position: relative;

      img {
        width: 170px;
        height: 170px;
      }

      .mask {
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;

        p {
          color: #efefef;
          margin-bottom: 16px;
        }
      }
    }
  }

  .outher {
    margin-top: 60px;
    font-size: 12px;
    cursor: pointer;

    span {
      margin-left: 6px;
    }
  }

  .scan-confirm {
    display: flex;
    flex-direction: column;
    text-align: center;

    img {
      width: 170px;
      height: 170px;
    }

    span {
      margin-top: 16px;
      color: #888;
    }

    p {
      margin-top: 16px;
    }
  }
}
</style>
