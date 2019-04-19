# vuejs-datepicker-mobile


## 介绍

>触碰选择日期的vue组件

基于vue3.X

## 组件使用

>安装

```bash
npm i vuejs-datepicker-mobile --save-dev
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
      date2: '2019-04-08',
      date3: '2019-04-01 18:00'
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
        endTime: '2019-10-01', // 截至时间
        succeed: (e) => {
          this.date3 = e
        },
        cancel: () => {
          console.log(`取消`)
        }
      })
    }
  },
}
 </script>
```