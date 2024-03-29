import { App } from 'vue'

import { formatUtcString } from '@/utils/date-format'

// 注册一些全局工具函数
export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    formatTime(value: string) {
      return formatUtcString(value)
    }
  }
}
