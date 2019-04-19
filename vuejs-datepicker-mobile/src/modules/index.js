import PickerCom from '../components/Picker.vue'
import {
  mergeOptions,
  getDate
} from './util'
import '../css/style.scss'

let Picker = {};

Picker.install = function (Vue) {

  // let t = new Date();

  Vue.prototype.$picker = {}

  let CalendarMainCom = Vue.extend(PickerCom)

  let instance = new CalendarMainCom({
    el: document.createElement('div')
  })

  document.body.appendChild(instance.$el);

  Vue.prototype.$picker.show = (settings = {}) => {
    let date = new Date()
    instance = Object.assign(instance, {
      show: true,
      type: 'picker', // 默认选择器
      data: [],
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      hour: date.getHours(),
      minute: date.getMinutes(),
      startTime: '',
      endTime: '',
      date: '',
      succeed(e) {
        console.log(e, '选中回调')
      },
      cancel() {
        console.log('取消回调')
      }
    })
    // 如果是日期模式
    let years = [1949, 2099];

    // 有设置开始时间
    if (settings.startTime) {
      let startY = (new Date(getDate(settings.startTime))).getFullYear();
      years[0] = startY;
    }
    // 有设置结束时间
    if (settings.endTime) {
      let endY = (new Date(getDate(settings.endTime))).getFullYear();
      years[1] = endY;
    }
    // 两个都设置了
    if (settings.startTime && settings.endTime) {
      if ((new Date(getDate(settings.startTime))).getTime() >= (new Date(getDate(settings.endTime))).getTime()) {
        years[0] = 1949;
        settings.startTime = '1949-01-01';
      }
    }

    if (settings.date) {
      const setDate = new Date(getDate(settings.date));
      const end = (new Date(getDate(settings.endTime) || '2099-01-01').getTime());
      const start = (new Date(getDate(settings.startTime) || '1949-01-01').getTime());
      // 验证输入的年的范围是否正确
      if (setDate.getTime() >= start && setDate.getTime() <= end) {
        settings.year = setDate.getFullYear();
        settings.month = setDate.getMonth() + 1;
        settings.day = setDate.getDate();
        settings.hour = setDate.getHours();
        settings.minute = setDate.getMinutes();
      } else {
        settings.date = '';
      }
    }

    let months = [1, 12],
      days = [1, 30],
      hour = [0, 23],
      minute = [0, 59];
    let yearsList = [],
      monthsList = [],
      daysList = [],
      hourList = [],
      minuteList = [];

    for (; years[0] <= years[1]; years[0]++) {
      yearsList.push(years[0] + '年')
    }
    for (; months[0] <= months[1]; months[0]++) {
      if (months[0] < 10) months[0] = `0${months[0]}`
      monthsList.push(months[0] + '月')
    }
    for (; days[0] <= days[1]; days[0]++) {
      daysList.push(days[0] + '日')
    }
    for (; hour[0] <= hour[1]; hour[0]++) {
      hourList.push(hour[0] + '时')
    }
    for (; minute[0] <= minute[1]; minute[0]++) {
      minuteList.push(minute[0] + '分')
    }
    settings.dateList = [
      yearsList,
      monthsList,
      daysList,
      hourList,
      minuteList
    ]

    mergeOptions(instance, settings)

  }
  Vue.prototype.$picker.hide = () => {
    instance.show = false
  }

}

export default Picker
