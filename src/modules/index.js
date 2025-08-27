import { createApp, nextTick } from 'vue';
import PickerCom from '../components/Picker.vue';
import '../css/style.scss';
import { getDate } from './util';

// 默认年份范围
const DEFAULT_YEARS = [1949, 2099]
// 默认月份范围
const DEFAULT_MONTHS = [1, 12]
// 默认小时范围
const DEFAULT_HOURS = [0, 23]
// 默认分钟范围
const DEFAULT_MINUTES = [0, 59]

let Picker = {}

// Vue 3 插件格式
Picker.install = function (app) {
  let instance = null
  let container = null

  const pickerInstance = {
    show: (settings = {}) => {
      // 创建新实例而非单例
      const container = document.createElement('div')
      document.body.appendChild(container)

      // 设置成功和取消回调
      const succeedCallback = settings.succeed || (() => {})
      const cancelCallback = settings.cancel || (() => {})

      // 创建组件实例并传递所有参数
      const appInstance = createApp(PickerCom, {
        ...settings,
        succeed: (e) => {
          // 调用原始的succeed回调
          if (settings.succeed) {
            settings.succeed(e);
          }
          // 清理实例
          appInstance.unmount(container)
          document.body.removeChild(container)
        },
        cancel: () => {
          // 调用原始的cancel回调
          if (settings.cancel) {
            settings.cancel();
          }
          // 清理实例
          appInstance.unmount(container)
          document.body.removeChild(container)
        }
      })

      let instance = appInstance.mount(container)
      instance.open()

      const now = new Date()
      instance = Object.assign(instance, {
        type: settings.type || 'picker',
        data: [],
        year: now.getFullYear(),
        month: now.getMonth() + 1,
        day: now.getDate(),
        hour: now.getHours(),
        minute: now.getMinutes(),
        startTime: settings.startTime || '',
        endTime: settings.endTime || '',
        date: settings.date || '',
        succeed: (e) => succeedCallback(e),
        cancel: () => cancelCallback()
      })

      // 获取年份范围并处理设置...
      const years = [...DEFAULT_YEARS]
      if (settings.startTime) {
        years[0] = new Date(getDate(settings.startTime)).getFullYear()
      }
      if (settings.endTime) {
        years[1] = new Date(getDate(settings.endTime)).getFullYear()
      }
      // 验证开始时间和结束时间
      if (settings.startTime && settings.endTime) {
        const startTime = new Date(getDate(settings.startTime)).getTime()
        const endTime = new Date(getDate(settings.endTime)).getTime()
        if (startTime >= endTime) {
          years[0] = DEFAULT_YEARS[0]
          settings.startTime = '1949-01-01'
        }
      }

      // 验证设置的日期是否在有效范围内
      if (settings.date) {
        const setDate = new Date(getDate(settings.date))
        const end = new Date(getDate(settings.endTime) || '2099-12-31').getTime()
        const start = new Date(getDate(settings.startTime) || '1949-01-01').getTime()
        if (setDate.getTime() >= start && setDate.getTime() <= end) {
          settings.year = setDate.getFullYear()
          settings.month = setDate.getMonth() + 1
          settings.day = setDate.getDate()
          settings.hour = setDate.getHours()
          settings.minute = setDate.getMinutes()
        } else {
          settings.date = ''
        }
      }

      // 生成各时间维度的列表
      const generateList = (start, end, suffix) => {
        const list = []
        for (let i = start; i <= end; i++) {
          list.push(i + suffix)
        }
        return list
      }

      const yearsList = generateList(years[0], years[1], '年')
      const monthsList = generateList(DEFAULT_MONTHS[0], DEFAULT_MONTHS[1], '月')
      // 注意：原代码中天数固定为 1-30 天，这可能不准确，这里保持原有逻辑但添加注释
      // 实际开发中应该根据具体月份和年份计算天数
      const daysList = generateList(1, 30, '日')
      const hourList = generateList(DEFAULT_HOURS[0], DEFAULT_HOURS[1], '时')
      const minuteList = generateList(DEFAULT_MINUTES[0], DEFAULT_MINUTES[1], '分')

      settings.dateList = [
        yearsList,
        monthsList,
        daysList,
        hourList,
        minuteList
      ]
      // 应用设置并显示选择器
      settings.succeed = succeedCallback;
      settings.cancel = cancelCallback;
      // 移除mergeOptions调用
      // mergeOptions(instance, settings)
      // 使用nextTick确保设置应用完成后再显示
      nextTick(() => {
        instance.open()
      })
    },
    hide: () => {
      if (instance) {
        instance.show = false
      }
    }
  }

  // 添加到全局属性
  app.config.globalProperties.$picker = pickerInstance
  // 提供注入键
  app.provide('$picker', pickerInstance)
}

export default Picker
