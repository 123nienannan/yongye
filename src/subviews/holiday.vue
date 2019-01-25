<template>
  <div class="holiday">
    <div class="holiday_top">
      <div class="top_left">
        节假日设置:
        <span class="work">工作日</span>
        <span class="week">节假日</span>
      </div>
      <div class="top_right">
        年份:
        <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      </div>
    </div>
    <div class="holiday_main">
      <div style="padding: 5px 10px; float: left;">
        <input type="text"
          class="re-config-month"
          placeholder="请选择回溯时间"
          id="input1"
          v-model="time" />
      </div>
       <div style="padding: 5px 10px; float: left;">
        <input type="text"
          class="re-config-month"
          placeholder="请选择回溯时间"
          id="input2"
          v-model="time" />
      </div>
       <div style="padding: 5px 10px; float: left;">
        <input type="text"
          class="re-config-month"
          placeholder="请选择回溯时间"
          id="input3"
          v-model="time" />
      </div>
       <div style="padding: 5px 10px; float: left;">
        <input type="text"
          class="re-config-month"
          placeholder="请选择回溯时间"
          id="input4"
          v-model="time" />
      </div>
       <div style="padding: 5px 10px; float: left;">
        <input type="text"
          class="re-config-month"
          placeholder="请选择回溯时间"
          id="input1"
          v-model="time" />
      </div>
       <div style="padding: 5px 10px; float: left;">
        <input type="text"
          class="re-config-month"
          placeholder="请选择回溯时间"
          id="input1"
          v-model="time" />
      </div>
       <div style="padding: 5px 10px; float: left;">
        <input type="text"
          class="re-config-month"
          placeholder="请选择回溯时间"
          id="input1"
          v-model="time" />
      </div>
       <div style="padding: 5px 10px; float: left;">
        <input type="text"
          class="re-config-month"
          placeholder="请选择回溯时间"
          id="input1"
          v-model="time" />
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import '@/lib/jquery-datatime/jquery.datetimepicker.full.js'
import '@/lib/jquery-datatime/jquery.datetimepicker.css'
export default {
  data () {
    return {
      options:[],
      value:'',
      time:''
    }
  },
  mounted() {
      setTimeout(() => {
          this.changeTime()
      }, 100);
  },
  methods: {
    toSelectDate(date) {
      this.config(date)
    },
    config(date) {
      var day = date.pattern("yyyy-MM-dd")
      var param = {}
      param.day = day
    },
    changeTime () {
       $.datetimepicker.setLocale('ch') //进行汉化
       let that = this
       let date = new Date()
       $("#input1,#input2,#input3,#input4").datetimepicker({
             lang:"ch", //语言选择中文
             inline:true,
             datepicker: true,
             timepicker: false,
             format: 'Y-m-d',
             todayButton: false,
             prevButton: false,
             nextButton: false,
             defaultSelect: false,
             dayOfWeekStart: 1,
             minDate: false,
             value:date,
             maxDate: new Date(),
             yearStart: date.getFullYear(),
             yearEnd:  date.getFullYear(),
             monthStart: date.getMonth(),
             monthEnd: date.getMonth(),
             onShow: function () { },
             onSelectDate: function (date) {
               this.toSelectDate(date)
             },
             onSelectTime: function (current_time, $input) {
             }
      });
    },
  }
}
</script>

<style scoped lang="less">
.holiday {
  .holiday_top {
    display: flex;
    font-size: 16px;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #fff;
    box-shadow: 0px 2px 3px 0px
        rgba(0, 0, 0, 0.3);
     border-radius: 4px;
     border: solid 1px #cacaca;
     .top_left {
        span {
            cursor: pointer;
            padding: 3px 10px;
            border-radius: 4px;
          &.work {
            border: 1px solid #dfdcdc;
            color: #999;
          }
          &.week {
            color: #fff;
            background-image: linear-gradient(
              #ff0000,
              #ff0000),
            linear-gradient(
              #222228,
              #222228);
          }
        }
     }
  }
  .holiday_main {
    padding: 20px 20px;
    overflow: hidden;
    margin-top: 10px;
    background-color: #ffffff;
    box-shadow: 0px 2px 3px 0px
      rgba(0, 0, 0, 0.3);
    border: solid 1px #dcdcdc;
  }
}
</style>
<style lang="less">
.holiday {
  .el-input__inner {
        width: 125px;
        height: 32px;
        background-image: linear-gradient(
          #eeeeee,
          #eeeeee),
        linear-gradient(
          #222228,
          #222228);
        border-radius: 4px;
        border:none;
      }
}
</style>

