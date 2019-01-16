<template>
  <div class="parkpayment">
    <div class="top_row">
      <div class="date">
        <span class="item">今日</span>
        <span class="item">本周</span>
        <span class="item">本月</span>
        <span class="item" @click="selectDate">日期</span>
      </div>
      <div class="range">
        <el-date-picker
          v-model="rangDate"
          type="daterange"
          v-if="showDate"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
          </el-date-picker>
      </div>
       车牌:&nbsp;&nbsp;<el-input v-model="carlocation" placeholder="请输入车牌号"></el-input>
       收费员:&nbsp;&nbsp;<el-select v-model="paymentPerson" placeholder="全部">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
       </el-select>
       收费平台:&nbsp;&nbsp;<el-select v-model="paymentFlat" placeholder="全部平台">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
       </el-select>
      <el-button class="search">查询</el-button>
      <el-upload
          class="upload-demo"
          :multiple="false"
          action="">
          <el-button class="import">导出</el-button>
      </el-upload>
    </div>
    <div class="sum">
      <p>应收金额: <span>5555</span></p>
      <p>已收金额: <span>55455</span></p>
      <p>代金券合计: <span>55455</span></p>
      <p>停车券合计: <span>55455</span></p>
      <p>移动支付金额合计: <span>55455</span></p>
      <p>免费金额合计: <span>55455</span></p>
    </div>
     <div class="wrap">
      <el-table
        :header-cell-style="tableHeaderColor"
        :data="parkpaymentparkData"
        stripe
        style="width: 100%">
        <el-table-column
          type="index"
          label="序号"
          align="center"
          width="50">
        </el-table-column>
        <el-table-column
          prop="date"
          align="center"
          label="车牌号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="收费时间"
          align="center"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="应收金额">
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="券类型">
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="券">
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="免费金额">
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="实收金额">
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="收费员">
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="支付方式">
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="支付系统">
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="100">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
 data() {
   return {
    carlocation:'',
    paymentPerson:'',
    showDate:false,
    paymentFlat:'',
    parkpaymentparkData:[]
   }
 },
 methods: {
  selectDate() {
      this.showDate = true
  },
  tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return 'background-color: #e4e4e4;'
      }
  },
 }
}
</script>

<style lang="less" scoped>
.parkpayment {
  .top_row {
    box-shadow: 0px 1px 1px 0px
    rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    padding: 10px 25px;
    background-color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .date {
      margin-right: 10px;
      .item {
        color: #335;
        cursor: pointer;
        padding: 1px 9px;
        font-size: 16px;
        background-image: linear-gradient(
        #e2e2e2,
        #e2e2e2),
        linear-gradient(
          #eaeaea,
          #eaeaea);
        background-blend-mode: normal,
          normal;
        box-shadow: inset 0px 1px 2px 0px
          rgba(0, 0, 0, 0.05);
      }
     }
    .range {
      margin-right: 10px;
    }
    .el-date-editor {
      margin-left: 10px;
      height: 30px;
      line-height: 30px;
      padding: 0 5px;
    }
    button {
        width: 92px;
        height: 32px;
        padding:0;
        border: none;
        color: #fff;
        border-radius: 4px;
    }
    .search {
          margin-left: 10px;
          background-image: linear-gradient(
            #1078d2,
            #1078d2),
          linear-gradient(
            #222228,
            #222228);
          box-shadow: 0px 1px 2px 0px
            rgba(0, 0, 0, 0.65);
    }
    .import {
        margin-left: 10px;
        width: 92px;
        height: 32px;
        padding:0;
        border: none;
        color: #fff;
        border-radius: 4px;
        background-image: linear-gradient(
            #1078d2,
            #1078d2),
          linear-gradient(
            #222228,
            #222228);
          box-shadow: 0px 1px 2px 0px
            rgba(0, 0, 0, 0.65);
     }
  }
  .sum {
    margin-top: 12px;
    box-shadow: 0px 1px 1px 0px
    rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    padding: 15px 30px;
    background-color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    p {
      font-size: 16px;
      margin-right: 30px;
      span {
        color: #f41919;
      }
    }
  }
  .wrap {
    box-shadow: 0px 2px 3px 0px
		rgba(0, 0, 0, 0.3);
	  border: solid 1px #dcdcdc;
    margin-top: 10px;
    .el-pagination {
      padding: 12px 0;
      text-align: right;
    }
  }
}
</style>
<style lang="less">
.parkpayment {
.el-input {
  margin-right:10px;
  width: 180px;
   .el-input__inner{
    width: 180px;
    height: 32px;
    background-image: linear-gradient(
      #eeeeee,
      #eeeeee),
    linear-gradient(
      #222228,
      #222228);
      border: none;
    border-radius: 4px;
    }
}
}

</style>
