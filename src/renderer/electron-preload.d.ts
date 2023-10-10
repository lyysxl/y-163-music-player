/**
 * electron-preload预加载脚本 window变量声明
 */
export declare global {
  import type { IpcRenderer } from 'electron'

  export interface Window {
    api: { ipcRenderer: IpcRenderer }
  }
}
