<template>
  <div class="usersearch">
    <div class="top_row">
      <div class="toprow_one">
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
          公司:&nbsp;&nbsp;<el-input v-model="carlocation" placeholder="请输入公司"></el-input>
          姓名:&nbsp;&nbsp;<el-input v-model="carlocation" placeholder="请输入姓名"></el-input>
          电话:&nbsp;&nbsp;<el-input v-model="carlocation" placeholder="请输入电话"></el-input>
          关联车辆:&nbsp;&nbsp;<el-input v-model="carlocation" placeholder="请输入关联车辆"></el-input>

      </div>
       <div class="toprow_two">
         创建人:&nbsp;&nbsp;<el-input v-model="carlocation" placeholder="请输入创建人"></el-input>
         车辆类型:&nbsp;&nbsp;<el-select v-model="paymentPerson" placeholder="所有类型">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
       </el-select>
       状态:&nbsp;&nbsp;<el-select v-model="paymentPerson" placeholder="正常">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
       </el-select>
       有效期:&nbsp;&nbsp;<el-select v-model="paymentFlat" placeholder="有效">
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
          label="开通日期"
          >
        </el-table-column>
        <el-table-column
          prop="name"
          label="卡号"
          align="center"
          >
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="公司">
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="电话">
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="关联车辆">
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="车辆类型">
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="生效日期">
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="有效期期">
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="状态">
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="停车场">
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="车位">
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="创建人">
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
    rangDate:'',
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
.usersearch {
  .top_row {
    box-shadow: 0px 1px 1px 0px
    rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    padding: 10px 25px;
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    .toprow_one {
       display: flex;
       justify-content: flex-start;
       align-items: center;
    }
    .toprow_two {
       margin-top: 15px;
       display: flex;
       justify-content: flex-start;
       align-items: center;
    }
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
.usersearch {
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
