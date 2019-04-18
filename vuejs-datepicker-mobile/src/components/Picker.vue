<template>
  <div class="m-picker" v-if="show">
    <div class="m-picker-mark"></div>
    <div class="m-picker-box">
      <div class="m-picker-header">
        <span @click="cancel">取消</span>
        <span @click="sel">确定</span>
      </div>
      <div class="m-picker-content">
        <div class="m-picker-item-box" v-if="type=='datePicker'">
          <PickerItem :val.sync="year" :selType="'year'" :change="change" :d="dataList[0]"></PickerItem>
          <PickerItem :val.sync="month" :selType="'month'" :change="change" :d="dataList[1]"></PickerItem>
          <PickerItem :val.sync="day" :selType="'day'" :change="change" :d="dataList[2]"></PickerItem>
          <PickerItem :val.sync="hour" :selType="'hour'" :change="change" :d="dataList[3]"></PickerItem>
          <PickerItem :val.sync="minute" :selType="'minute'" :change="change" :d="dataList[4]"></PickerItem>
        </div>
        <div class="m-picker-item-box" v-else>
          <PickerItem v-for="(i,k) in dataList" :key="k" :change="change" :d="i"></PickerItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../css/style.scss'
import PickerItem from './PickerItem.vue'
export default {
  name: 'datePicker',
  data () {
    return {
      show: false,
      type: 'picker',
      dataList: [],
      year: 1,
      month: 1,
      day: 1,
      hour: 1,
      minute: 1,
      endTime: '',
      startTime: '',
      onSucceed (e) {
        console.log(e)
      },
      onCancel () {

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
  methods: {
    sel () {
      this.show = false;
      if (this.month < 10) this.month = `0${this.month}`
      if (this.day < 10) this.day = `0${this.day}`
      if (this.hour < 10) this.hour = `0${this.hour}`
      if (this.minute < 10) this.minute = `0${this.minute}`
      this.onSucceed(this.year + '-' + this.month + '-' + this.day + ' ' + this.hour + ':' + this.minute)
    },
    itemSel () {

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
      this.dataList[2] = newM;
      this.dataList[1] = mArr;
    },
    // 确定数值的回调
    change (val, key, type = '') {
      if (type == 'day') {
        this.day = val.match(/\d*/g)[0];
      } else if (type == 'year') {
        this.year = val.match(/\d*/g)[0];
        this.setMonth()
      } else if (type == 'month') {
        this.month = val.match(/\d*/g)[0];
        this.setMonth()
      } else if (type == 'hour') {
        this.hour = val.match(/\d*/g)[0];
      } else if (type == 'minute') {
        this.minute = val.match(/\d*/g)[0];
      }
    },
    cancel () {
      this.show = false;
      this.onCancel()
    },
  },
  mounted () {
    this.setMonth()
  },
  components: {
    PickerItem
  }
}
</script>
