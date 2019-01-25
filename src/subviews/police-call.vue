<template>
  <div class="police-call">
    <div class="top_row">
       修复状态:&nbsp;&nbsp;<el-select v-model="paymentPerson" placeholder="未修复">
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
     <div class="wrap">
      <el-table
        :header-cell-style="tableHeaderColor"
        :data="policecallData"
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
          label="故障类型"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="设备类型"
          align="center"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="设备地址">
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="报障描述">
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="报障时间">
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="修复状况">
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="修复时间">
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="操作">
          <template slot-scope="scope">
            <el-button class="parkuser_btn" type="text" size="small">查看</el-button>
          </template>
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
    paymentPerson:'',
    policecallData:[{
      date:1
    }]
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
.police-call {
  .top_row {
    box-shadow: 0px 1px 1px 0px
    rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    padding: 10px 25px;
    background-color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
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
    .parkuser_btn {
        color: #03c0dd;
        font-size: 14px;
    }
  }
}
</style>
<style lang="less">
.police-call {
  .el-select {
  .el-input__inner{
      width: 180px;
      height: 32px;
      background-image: linear-gradient(
        #eeeeee,
        #eeeeee),
      linear-gradient(
        #222228,
        #222228) !important;
      border: none;
      border-radius: 4px;
    }
  }
}


</style>
