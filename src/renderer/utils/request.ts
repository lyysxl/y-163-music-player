import axios, { AxiosRequestConfig, CreateAxiosDefaults } from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 15000
})

instance.interceptors.request.use(
  (config) => {
    config.params = config.params || {}
    config.params.timestamp = Date.now()
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

instance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    return error
  }
)

export function setDefaultsConfig(config: CreateAxiosDefaults): void {
  Object.assign(instance.defaults, config)
}

export default {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get<T = any, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<T> {
    return new Promise((r, j) => {
      instance.get<T, T, D>(url, config).then(r).catch(j)
    })
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  post<T = any, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<T> {
    return new Promise((r, j) => {
      config = config || {}
      config.method = 'POST'
      instance.get<T, T, D>(url, config).then(r).catch(j)
    })
  }
}
