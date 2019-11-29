# vuejs-datepicker-mobile

## 介绍

>触屏选择日期的vue组件

```
基于vue2.x, vueCli3.x
```

## 组件使用

>安装

```bash
npm i vuejs-datepicker-mobile --save-dev
yarn add vuejs-datepicker-mobile
```

>初始化

```js
import Datepicker from 'vuejs-datepicker-mobile';
Vue.use(Datepicker);
```

>使用

```js
<script>
export default {
  name: 'App',
  data () {
    return {
      date: '',
      date1: '',
      date2: '2019-11-29',
      date3: '2019-04-01 18:30' // yyyy-MM-dd HH-mm 务必按照格式
    }
  },
  methods: {
    setPicker () {
      this.$picker.show({
        succeed: (e) => {
          this.date = e
        }
      });
    },
    setTime () {
      this.$picker.show({
        type: 'moment', // 时分 moment
        succeed: (e) => {
          this.date1 = e
        }
      });
    },
    setDefault () {
      this.$picker.show({
        type: 'picker', // 默认picker，可不填
        date: this.date2, // 初始化时间
        succeed: (e) => {
          this.date2 = e
        }
      });
    },
    setMoment () {
      this.$picker.show({
        type: 'moment', // 时分 moment
        date: this.date3, // 初始化时间，精确到时分
        startTime: '2018-01-01', // 开始时间
        endTime: '2020-10-01', // 截至时间
        succeed: (e) => {
          this.date3 = e
        },
        cancel: () => {
          console.log('cancel')
        }
      })
    }
  },
}
 </script>
```

## 版本介绍

>https://github.com/wongtaisin/vuejs-datepicker-mobile

```
1.1.0 - 增加背景关闭，优化代码。（此版本不会维持太久，下一版本跟进VueCli4.X）
1.0.4 - 增加时分参数
1.0.0 - 初版本
```