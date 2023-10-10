import path from 'path'
import { ipcMain, BrowserWindow } from 'electron'

import { getElectronRouterPath } from '../utlis'

let loginWindow: BrowserWindow

ipcMain.on('OPEN_LOGIN_FRAME', () => {
  const win = (loginWindow = new BrowserWindow({
    width: 350,
    height: 530,
    resizable: false,
    minimizable: false,
    maximizable: false,
    skipTaskbar: true,
    webPreferences: {
      preload: path.resolve(__dirname, './preload.js')
    },
    frame: false
  }))

  const loginRouterUrl = getElectronRouterPath('/login')
  win.loadURL(loginRouterUrl)

  if (!process.env.IS_TEST) win.webContents.openDevTools()
})

ipcMain.once('CLOSE_LOGIN', () => {
  loginWindow.close()
})
