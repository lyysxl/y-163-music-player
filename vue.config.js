// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

function reslove(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set('@', reslove('src/renderer'))
  },
  pages: {
    index: {
      entry: 'src/renderer/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  pluginOptions: {
    electronBuilder: {
      preload: 'src/main/preload.js',
      // nodeIntegration: false,
      // contextIsolation: false,
      mainProcessFile: 'src/main/background.ts',
      mainProcessWathch: ['src/main'],
      builderOptions: {
        nsis: {
          oneClick: true,
          perMachine: true,
          deleteAppDataOnUninstall: true
        }
      }
    }
  }
}
