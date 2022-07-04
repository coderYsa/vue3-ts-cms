import type { AxiosRequestConfig, AxiosResponse } from 'axios'
// 定义拦截器接口
interface YsaRequestInterceptors {
  requesterInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requesterErrorInterceptors?: (error: any) => any
  responseInterceptors?: (response: AxiosResponse) => AxiosResponse
  responseErrorInterceptors?: (error: any) => any
}

// 继承AxiosRequestConfig接口
interface YsaRequestConfig extends AxiosRequestConfig {
  interceptors?: YsaRequestInterceptors
}

export { YsaRequestConfig, YsaRequestInterceptors }
