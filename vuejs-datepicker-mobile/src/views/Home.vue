<template>
  <div class="date">
    <p @click="setDate" class="click">点击设置日期（默认今天）</p>
    <p>选中的时间：{{date}}</p>
    <p @click="setDate2" class="click">设定指定的日期（2019-04-18）</p>
    <p>选中的时间：{{date2}}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      date: '',
      date2: '2019-04-18'
    }
  },
  methods: {
    setDate () {
      this.$picker.show({
        type: 'datePicker',
        onSucceed: (e) => {
          this.date = e
        }
      });
    },
    setDate2 () {
      this.$picker.show({
        type: 'datePicker',
        date: this.date2, // 初始化时间
        startTime: '2018-06-19', // 开始时间
        endTime: '2018-09-08', // 截至时间
        onSucceed: (e) => {
          this.date2 = e;
        },
      })
    }
  },
}
</script>

<style lang="scss">
.click {
  color: #41b883;
}
</style>

