<template>
  <div class="m-picker" v-if="show">
    <div @click="cal" class="m-picker-mark"></div>
    <div class="m-picker-box">
      <div class="m-picker-header">
        <span @click="cal">取消</span>
        <span @click="sel">确定</span>
      </div>
      <div class="m-picker-content">
        <div class="m-picker-item-box">
          <PickerItem :change="change" :d="dateList[0]" :selType="'year'" :val.sync="year"></PickerItem>
          <PickerItem :change="change" :d="dateList[1]" :selType="'month'" :val.sync="month"></PickerItem>
          <PickerItem :change="change" :d="dateList[2]" :selType="'day'" :val.sync="day"></PickerItem>
          <!-- 仅在 type 为 'moment' 时显示小时和分钟选择器 -->
          <PickerItem v-if="type === 'moment'" :change="change" :d="dateList[3]" :selType="'hour'" :val.sync="hour">
          </PickerItem>
          <PickerItem v-if="type === 'moment'" :change="change" :d="dateList[4]" :selType="'minute'" :val.sync="minute">
          </PickerItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import PickerItem from './PickerItem.vue'

// 定义 props 并添加类型注释
const props = defineProps({
  endTime: { type: String, default: '' },
  startTime: { type: String, default: '' },
  type: { type: String, default: 'picker' },
  date: { type: String, default: '' },
  succeed: { type: Function, default: () => { } },
  cancel: { type: Function, default: () => { } }
})

// 移除emit定义
// const emit = defineEmits(['succeed', 'cancel'])

const show = ref(false)
const dateList = ref([])
const year = ref(1)
const month = ref(1)
const day = ref(1)
const hour = ref(1)
const minute = ref(1)

// 计算属性
const isR = computed(() => year.value % 4 === 0)
const startTimeArr = computed(() => props.startTime ? props.startTime.split('-') : [])
const endTimeArr = computed(() => props.endTime ? props.endTime.split('-') : [])



// 格式化数字，补零
const formatNumber = (num) => num < 10 ? `0${num}` : num

const sel = () => {
  show.value = false
  const formattedMonth = formatNumber(month.value)
  const formattedDay = formatNumber(day.value)
  const formattedHour = formatNumber(hour.value)
  const formattedMinute = formatNumber(minute.value)
  const formattedDate = props.type === 'moment'
    ? `${year.value}-${formattedMonth}-${formattedDay} ${formattedHour}:${formattedMinute}`
    : `${year.value}-${formattedMonth}-${formattedDay}`
  props.succeed(formattedDate)
}

const setMonth = () => {
  const isFebruary = month.value === 2
  const isLongMonth = [1, 3, 5, 7, 8, 10, 12].includes(month.value)
  const monthRange = [1, 12]
  let dayRange = []
  const hourRange = [0, 23]
  const minuteRange = [0, 59]

  // 处理结束时间限制
  if (endTimeArr.value.length) {
    if (year.value === +endTimeArr.value[0]) {
      monthRange[1] = +endTimeArr.value[1]
      if (month.value === +endTimeArr.value[1]) {
        if (!dayRange.length) dayRange = [1, 31]
        dayRange[1] = +endTimeArr.value[2]
      }
    }
  }

  // 设置天数范围
  if (isFebruary) {
    dayRange = isR.value ? [1, 29] : [1, 28]
  } else if (!isLongMonth) {
    dayRange = [1, 30]
  } else {
    dayRange = [1, 31]
  }

  // 处理开始时间限制
  if (startTimeArr.value.length) {
    if (year.value === +startTimeArr.value[0]) {
      monthRange[0] = +startTimeArr.value[1]
      if (month.value === +startTimeArr.value[1]) {
        dayRange[0] = +startTimeArr.value[2]
      }
    }
  }

  // 生成各选择器列表
  const newMonthList = Array.from({ length: monthRange[1] - monthRange[0] + 1 }, (_, i) => (i + monthRange[0]) + '月')
  const newDayList = Array.from({ length: dayRange[1] - dayRange[0] + 1 }, (_, i) => (i + dayRange[0]) + '日')
  const newHourList = Array.from({ length: hourRange[1] - hourRange[0] + 1 }, (_, i) => (i + hourRange[0]) + '时')
  const newMinuteList = Array.from({ length: minuteRange[1] - minuteRange[0] + 1 }, (_, i) => (i + minuteRange[0]) + '分')

  // 初始化 dateList
  if (dateList.value.length === 0) {
    const currentYear = new Date().getFullYear()
    const yearList = Array.from({ length: 100 }, (_, i) => (currentYear - 50 + i) + '年')
    dateList.value = [yearList]
  }
  dateList.value[1] = newMonthList
  dateList.value[2] = newDayList
  dateList.value[3] = newHourList
  dateList.value[4] = newMinuteList
}

const change = (val, key, selType) => {
  if (!val) return
  const match = val.match(/\d+/)
  if (!match) return
  const num = Number(match[0])

  if (selType === 'year' && num !== year.value) {
    year.value = num
    setMonth()
  } else if (selType === 'month' && num !== month.value) {
    month.value = num
    setMonth()
  } else if (selType === 'day') {
    day.value = num
  } else if (selType === 'hour') {
    hour.value = num
  } else if (selType === 'minute') {
    minute.value = num
  }
}

const cal = () => {
  show.value = false
  props.cancel()
}

onMounted(() => {
  const now = new Date()
  // 解析date属性设置初始日期
  if (props.date) {
    const setDate = new Date(props.date)
    year.value = setDate.getFullYear()
    month.value = setDate.getMonth() + 1
    day.value = setDate.getDate()
    hour.value = setDate.getHours()
    minute.value = setDate.getMinutes()
  } else {
    // 默认使用当前日期
    year.value = now.getFullYear()
    month.value = now.getMonth() + 1
    day.value = now.getDate()
    hour.value = now.getHours()
    minute.value = now.getMinutes()
  }
  setMonth()
})

// 方法
const open = () => {
  show.value = true
}

defineExpose({
  open
})
</script>
