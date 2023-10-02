import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useViewStore = defineStore('view', () => {
  const isMusicViewerShow = ref(false)

  return {
    isMusicViewerShow
  }
})
