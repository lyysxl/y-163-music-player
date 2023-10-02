import type { App, Plugin } from 'vue'
// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

export const ElementPlusPlugin: Plugin = (app: App) => {
  app.use(ElementPlus)
}
