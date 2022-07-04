import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { YsaRequestInterceptors, YsaRequestConfig } from './type'
class YsaRequest {
  instance: AxiosInstance
  interceptors?: YsaRequestInterceptors
  constructor(config: YsaRequestConfig) {
    // axios实例
    this.instance = axios.create(config)
    // 拦截器
    this.interceptors = config.interceptors
    // 挂载拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requesterInterceptors,
      this.interceptors?.requesterErrorInterceptors
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptors,
      this.interceptors?.responseErrorInterceptors
    )

    // 所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log(config)
        return config
      },
      (error) => {
        console.log(error)
        return error
      }
    )
    this.instance.interceptors.response.use(
      (response) => {
        console.log(response)
        return response
      },
      (error) => {
        console.log(error)
        return error
      }
    )
  }

  request(config: YsaRequestConfig): void {
    if (config.interceptors?.requesterInterceptors) {
      config = config.interceptors.requesterInterceptors(config)
    }
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
}

export default YsaRequest
