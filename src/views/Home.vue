<template>
  <div class="date">
    <p @click="setPicker" class="click">设置默认日期（默认今天）</p>
    <p>选中的时间：{{date}}</p>
    <p @click="setDefault" class="click">设置指定的日期（2019-04-08）</p>
    <p>选中的时间：{{date2}}</p>
    <p @click="setMoment" class="click">设置所有参数（2019-04-01 18:00）</p>
    <p>选中的时间：{{date3}}</p>
  </div>
</template>

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
      });
    }
  },
}
</script>

<style lang="scss">
.click {
  color: #41b883;
}
</style>

