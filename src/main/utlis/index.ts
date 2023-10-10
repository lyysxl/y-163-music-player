/**
 * 获取vue-router在electron环境中的路径
 * @param path vue-router路径
 * @returns electron
 */
export const getElectronRouterPath = (path: string): string => {
  if (path === '') return 'app://./index.html'
  path = '#' + path
  if (process.env.WEBPACK_DEV_SERVER_URL) {
    return process.env.WEBPACK_DEV_SERVER_URL + path
  } else {
    return 'app://./index.html' + path
  }
}
