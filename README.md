# vuejs-datepicker-mobile

## 介绍

> 触屏选择日期的 vue 组件

```
基于vue3, vite
```

## 组件使用

> 安装

```bash
npm i vuejs-datepicker-mobile --save-dev
yarn add vuejs-datepicker-mobile
```

> 初始化

```js
import Datepicker from 'vuejs-datepicker-mobile'
Vue.use(Datepicker)
```

> 使用

```js
<script setup>
  import {ref} from 'vue' import Datepicker from 'vuejs-datepicker-mobile' Vue.use(Datepicker) const
  date = ref('') const date1 = ref('') const date2 = ref('2019-11-29') const date3 = ref('2019-04-01
  18:30') // yyyy-MM-dd HH-mm 务必按照格式 const setPicker = () =>{' '}
  {Datepicker.show({
    succeed: e => {
      date.value = e
    }
  })}
  const setTime = () => {Datepicker.show({
    type: 'moment', // 时分 moment
    succeed: e => {
      date1.value = e
    }
  })}
  const setDefault = () =>{' '}
  {Datepicker.show({
    type: 'picker', // 默认picker，可不填
    date: date2.value, // 初始化时间
    succeed: e => {
      date2.value = e
    }
  })}
  const setMoment = () => {Datepicker.show({
    type: 'moment', // 时分 moment
    date: date3.value, // 初始化时间，精确到时分
    startTime: '2018-01-01', // 开始时间
    endTime: '2020-10-01', // 截至时间
    succeed: e => {
      date3.value = e
    },
    cancel: () => {
      console.log('cancel')
    }
  })}
</script>
```

## 版本介绍

> https://github.com/wongtaisin/vuejs-datepicker-mobile

```
2.0.1 - 替换成vue3项目
1.2.0 - 增加初次进入的动画效果
1.1.2 - 增加背景关闭，优化代码
1.0.4 - 增加时分参数
1.0.0 - 初版本
```
