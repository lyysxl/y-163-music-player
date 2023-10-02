import { createApp } from 'vue'

import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import './assets/css/app.less'
import './assets/css/iconfont.less'
import { ElementPlusPlugin } from './plugins/element-plus-plugin'
import { store } from './store'

createApp(App).use(store).use(ElementPlusPlugin).use(router).mount('#app')
