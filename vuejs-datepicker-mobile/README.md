# vuejs-datepicker-mobile


## 介绍

>一个选择日期的vue组件

基于vue3.X

## 组件使用

>安装

```bash
npm install vuejs-datepicker-mobile --save-dev
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
   data(){
        return{
            date:'',
            date2:'2019-01-01'
        }
   },
   methods:{
    setDate(){
        this.$picker.show({
            type:'datePicker',
            onSucceed: (date) =>{
                this.date = date
            }
        });
     },
     setDate2(){
        this.$picker.show({
            type:'datePicker',
            date:this.date2,  // 初始化时间
            startTime:'2010-01-01',  // 开始时间
            endTime:'2020-01-01',  // 截至时间
            onSucceed:(e)=>{
                this.date2 = e;
            },
        })
     },
   },
 }
 </script>
```