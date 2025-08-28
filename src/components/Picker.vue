<template>
  <div class="m-picker" v-if="show">
    <div @click="cal" class="m-picker-mark" />
    <div class="m-picker-box">
      <div class="m-picker-header">
        <span @click="cal">取消</span>
        <span @click="sel">确定</span>
      </div>
      <div class="m-picker-content">
        <div class="m-picker-item-box" v-if="type === 'picker'">
          <PickerItem :change="change" :d="dateList[0]" selType="year" :val="year" />
          <PickerItem :change="change" :d="dateList[1]" selType="month" :val="month" />
          <PickerItem :change="change" :d="dateList[2]" selType="day" :val="day" />
        </div>
        <div class="m-picker-item-box" v-else>
          <PickerItem
            v-for="(list, idx) in dateList"
            :key="idx"
            :change="change"
            :d="list"
            :selType="['year', 'month', 'day', 'hour', 'minute'][idx]"
            :val="[year, month, day, hour, minute][idx]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js" setup>
// import '../css/style.scss'
import { computed, onMounted, ref } from 'vue'
import PickerItem from './PickerItem.vue'

const show = ref(false)
const type = ref('picker')
const dateList = ref([[], [], [], [], []])
const year = ref(1)
const month = ref(1)
const day = ref(1)
const hour = ref(1)
const minute = ref(1)
const startTime = ref('')
const endTime = ref('')
const succeed = (e)=> {
  console.log(e)
}
const cancel = () =>{}

const isR = computed(() => year.value % 4 === 0)

const startTimeArr = computed(() => {
  if (startTime.value) {
    return startTime.value.split('-')
  } else {
    return []
  }
})

const endTimeArr = computed(() => {
  if (endTime.value) {
    return endTime.value.split('-')
  } else {
    return []
  }
})

const sel = () => {
  show.value = false
  if (month.value < 10) month.value = `0${month.value}`
  if (day.value < 10) day.value = `0${day.value}`
  if (hour.value < 10) hour.value = `0${hour.value}`
  if (minute.value < 10) minute.value = `0${minute.value}`
  if (type.value === 'moment'){
    succeed(`${year.value}-${month.value}-${day.value} ${hour.value}:${minute.value}`)
   return
  }
  succeed(`${year.value}-${month.value}-${day.value}`)
}

/**
 * 设置月日 的确切时间
 */
const setMonth = () => {
  let c2 = month.value === 2
  let c1 = [1, 3, 5, 7, 8, 10, 12].join().indexOf(parseInt(month.value))
  let newM = [] // month
  let m1 = [1, 12]
  let newD = [] // day
  let m2 = ''
  let newH = [] // hour
  let m3 = [0, 23]
  let newMI = [] // minute
  let m4 = [0, 59]

  if (endTimeArr.value) {
    if (year.value === +endTimeArr.value[0]) {
      m1[1] = +endTimeArr.value[1]
      if (month.value === +endTimeArr.value[1]) {
        m2[1] = +endTimeArr.value[2]
      }
    }
  }
  if (c2) {
    if (isR.value) {
      m2 = [1, 29]
    } else {
      m2 = [1, 28]
    }
  } else if (c1 < 0) {
    m2 = [1, 30]
  } else {
    m2 = [1, 31]
  }
  if (startTimeArr.value) {
    if (year.value === +startTimeArr.value[0]) {
      m1[0] = +startTimeArr.value[1]
      if (month.value === +startTimeArr.value[1]) {
        m2[0] = +startTimeArr.value[2]
      }
    }
  }
  for (let i = m1[0]; i <= m1[1]; i++) {
    newM.push(i + '月')
  }
  for (let i = m2[0]; i <= m2[1]; i++) {
    newD.push(i + '日')
  }
  for (let i = m3[0]; i <= m3[1]; i++) {
    newH.push(i + '时')
  }
  for (let i = m4[0]; i <= m4[1]; i++) {
    newMI.push(i + '分')
  }

  dateList.value[1] = newM
  dateList.value[2] = newD
  dateList.value[3] = newH
  dateList.value[4] = newMI
}

/** 设置月日 的确切时间
 *  @param { val } - String
 */
const change = (val, key, type = '') => {
  if (type === 'year') {
    year.value = val.match(/\d*/g)[0]
    setMonth()
  } else if (type === 'month') {
    month.value = val.match(/\d*/g)[0]
    setMonth()
  } else if (type === 'day') {
    day.value = val.match(/\d*/g)[0]
  } else if (type === 'hour') {
    hour.value = val.match(/\d*/g)[0]
  } else if (type === 'minute') {
    minute.value = val.match(/\d*/g)[0]
  }
}
const cal = () => {
  show.value = false
  cancel()
}

onMounted(() => {
  setMonth()
})

const open = () => {
  show.value = true
}

// Expose fields so mergeOptions(instance, settings) can assign into them
defineExpose({
  open,
  get show() {
    return show.value
  },
  set show(v) {
    show.value = v
  },
  get type() {
    return type.value
  },
  set type(v) {
    type.value = v
  },
  get year() {
    return year.value
  },
  set year(v) {
    year.value = v
  },
  get month() {
    return month.value
  },
  set month(v) {
    month.value = v
  },
  get day() {
    return day.value
  },
  set day(v) {
    day.value = v
  },
  get hour() {
    return hour.value
  },
  set hour(v) {
    hour.value = v
  },
  get minute() {
    return minute.value
  },
  set minute(v) {
    minute.value = v
  },
  get startTime() {
    return startTime.value
  },
  set startTime(v) {
    startTime.value = v
  },
  get endTime() {
    return endTime.value
  },
  set endTime(v) {
    endTime.value = v
  },
  get dateList() {
    return dateList.value
  },
  set dateList(v) {
    dateList.value = v
  },
  succeed: succeed,
  cancel: cancel
})
</script>
