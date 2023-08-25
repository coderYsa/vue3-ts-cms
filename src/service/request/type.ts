import type { AxiosRequestConfig } from 'axios'

export interface HYRequestInterceptors {
  requestInterceptor?: (config: any) => any
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: any) => any
  responseInterceptorCatch?: (error: any) => any
}

export interface HYRequestConfig extends AxiosRequestConfig {
  interceptors?: HYRequestInterceptors
  showLoading?: boolean
}
