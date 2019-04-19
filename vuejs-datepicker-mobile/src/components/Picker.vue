<template>
  <div class="m-picker" v-if="show">
    <div class="m-picker-mark"></div>
    <div class="m-picker-box">
      <div class="m-picker-header">
        <span @click="cal">取消</span>
        <span @click="sel">确定</span>
      </div>
      <div class="m-picker-content">
        <div class="m-picker-item-box" v-if="type=='moment'">
          <PickerItem :change="change" :d="dateList[0]" :selType="'year'" :val.sync="year"></PickerItem>
          <PickerItem :change="change" :d="dateList[1]" :selType="'month'" :val.sync="month"></PickerItem>
          <PickerItem :change="change" :d="dateList[2]" :selType="'day'" :val.sync="day"></PickerItem>
          <PickerItem :change="change" :d="dateList[3]" :selType="'hour'" :val.sync="hour"></PickerItem>
          <PickerItem :change="change" :d="dateList[4]" :selType="'minute'" :val.sync="minute"></PickerItem>
        </div>
        <div class="m-picker-item-box" v-else>
          <!-- <PickerItem :change="change" :d="i" :key="k" v-for="(i,k) in dateList"></PickerItem> -->
          <PickerItem :change="change" :d="dateList[0]" :selType="'year'" :val.sync="year"></PickerItem>
          <PickerItem :change="change" :d="dateList[1]" :selType="'month'" :val.sync="month"></PickerItem>
          <PickerItem :change="change" :d="dateList[2]" :selType="'day'" :val.sync="day"></PickerItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import '../css/style.scss'
import PickerItem from './PickerItem.vue'
export default {
  name: 'datePicker',
  components: {
    PickerItem
  },
  data () {
    return {
      show: false,
      type: 'picker',
      dateList: [],
      year: 1,
      month: 1,
      day: 1,
      hour: 1,
      minute: 1,
      endTime: '',
      startTime: '',
      succeed (e) {
        console.log(e)
      },
      cancel () {

      }
    }
  },
  computed: {
    isR () {
      return this.year % 4 == 0 ? true : false;
    },
    startTimeArr () {
      if (this.startTime) {
        return this.startTime.split('-')
      } else {
        return []
      }
    },
    endTimeArr () {
      if (this.endTime) {
        return this.endTime.split('-')
      } else {
        return []
      }
    }
  },
  mounted () {
    this.setMonth()
  },
  methods: {
    sel () {
      this.show = false;
      if (this.month < 10) this.month = `0${this.month}`
      if (this.day < 10) this.day = `0${this.day}`
      if (this.hour < 10) this.hour = `0${this.hour}`
      if (this.minute < 10) this.minute = `0${this.minute}`
      if (this.type == 'moment') return this.succeed(this.year + '-' + this.month + '-' + this.day + ' ' + this.hour + ':' + this.minute)
      this.succeed(this.year + '-' + this.month + '-' + this.day)
    },
    setMonth () {
      let c2 = this.month == 2;
      let c1 = [1, 3, 5, 7, 8, 10, 12].join().indexOf(parseInt(this.month));
      let m = '', newM = []; // day
      if (c2) {
        if (this.isR) {
          m = [1, 29];
        } else {
          m = [1, 28];
        }
      } else if (c1 < 0) {
        m = [1, 30];
      } else {
        m = [1, 31];
      }
      let mArr = [], m2 = [1, 12]; // month
      if (this.endTimeArr) {

        if (this.year == + this.endTimeArr[0]) {
          m2[1] = + this.endTimeArr[1]

          if (this.month == +this.endTimeArr[1]) {
            m[1] = + this.endTimeArr[2]
          }

        }
      }
      if (this.startTimeArr) {

        if (this.year == + this.startTimeArr[0]) {
          m2[0] = + this.startTimeArr[1]

          if (this.month == +this.startTimeArr[1]) {
            m[0] = + this.startTimeArr[2]
          }

        }
      }

      for (let i = m[0]; i <= m[1]; i++) {
        newM.push(i + '日')
      }
      for (let i = m2[0]; i <= m2[1]; i++) {
        mArr.push(i + '月')
      }
      this.dateList[2] = newM;
      this.dateList[1] = mArr;
    },
    // 确定数值的回调
    change (val, key, type = '') {
      if (type == 'year') {
        this.year = val.match(/\d*/g)[0];
        this.setMonth()
      } else if (type == 'month') {
        this.month = val.match(/\d*/g)[0];
        this.setMonth()
      } else if (type == 'day') {
        this.day = val.match(/\d*/g)[0];
      } else if (type == 'hour') {
        this.hour = val.match(/\d*/g)[0];
      } else if (type == 'minute') {
        this.minute = val.match(/\d*/g)[0];
      }
    },
    cal () {
      this.show = false;
      this.cancel()
    },
  }
}
</script>
