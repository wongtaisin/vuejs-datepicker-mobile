<template>
  <div class="date">
    <p @click="setPicker" class="click">设置默认日期（默认今天）</p>
    <p>选中的时间：{{ date }}</p>
    <p @click="setTime" class="click">设置默认时间（默认当前）</p>
    <p>选中的时间：{{ date1 }}</p>
    <p @click="setDefault" class="click">设置指定的日期（{{ date2 }}）</p>
    <p>选中的时间：{{ date2 }}</p>
    <p @click="setMoment" class="click">设置所有参数（{{ date3 }}）</p>
    <p>选中的时间：{{ date3 }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Picker from '../index'

// 响应式变量声明
const date = ref('')
const date1 = ref('')
const date2 = ref('2019-11-29')
const date3 = ref('2019-04-01 18:30')

// 方法定义
const setPicker = () => {
  Picker.show({
    succeed: e => {
      date.value = e
    }
  })
}

const setTime = () => {
  Picker.show({
    type: 'moment',
    succeed: e => {
      date1.value = e
    }
  })
}

const setDefault = () => {
  Picker.show({
    date: date2.value,
    succeed: e => {
      date2.value = e
    }
  })
}

const setMoment = () => {
  Picker.show({
    type: 'moment',
    date: date3.value,
    startTime: '2018-01-01',
    endTime: '2020-10-01',
    succeed: e => {
      date3.value = e
    },
    cancel: () => {
      console.log('cancel')
    }
  })
}
</script>

<style lang="scss">
.click {
  color: #41b883;
}
</style>
