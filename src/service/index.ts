//service统一出口
import YsaRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const ysaRequest = new YsaRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})
export default ysaRequest
