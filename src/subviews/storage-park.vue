<template>
  <div class="storage">
    <div class="top_row">
      <div class="range">
        日期:&nbsp;&nbsp;<el-date-picker
          v-model="selectDate"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </div>
       时间段:&nbsp;&nbsp;<el-select v-model="paymentPerson" placeholder="全部">
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
      <p>临停数量: <span>5555</span></p>
      <p>包月数量: <span>55455</span></p>
      <p>错峰数量: <span>55455</span></p>
      <p>免费数量: <span>55455</span></p>
      <p>其他免费: <span>55455</span></p>
      <p>当页合计: <span>55455</span></p>
    </div>
     <div class="wrap">
      <el-table
        :header-cell-style="tableHeaderColor"
        :data="storageparkData"
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
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="时间"
          align="center"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="临停数量">
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="包月数量">
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="错峰数量">
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="免费数量">
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="其他免费">
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="合计">
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="备注">
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
    selectDate:'',
    carlocation:'',
    paymentPerson:'',
    storageparkData:[]
   }
 },
 methods: {
  tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return 'background-color: #e4e4e4;'
      }
  },
 }
}
</script>

<style lang="less" scoped>
.storage {
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
    box-shadow: 0px 2px 3px 0px
		rgba(0, 0, 0, 0.3);
	  border: solid 1px #dcdcdc;
    box-sizing: border-box;
    padding: 15px 30px;
    background-color: #eee;
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
.storage {
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
.el-input__prefix {
  top:-3px;
}
}

</style>
