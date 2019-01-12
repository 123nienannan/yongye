<template>
<div class="dataReport">
  <div class="nav">
     <span>智慧停车</span>
      ->
     <span class="current">数据报表</span>
  </div>
   <el-tabs v-model="activeName">
    <el-tab-pane label="当前停车记录">
     <search-part></search-part>
     <div class="wrap">
        <el-table
          :header-cell-style="tableHeaderColor"
          :data="reportData"
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
            label="车牌"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="车辆类型"
            align="center"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            align="center"
            label="进场时间">
          </el-table-column>
          <el-table-column
            prop="address"
            align="center"
            label="车位编号">
          </el-table-column>
          <el-table-column
            prop="address"
            align="center"
            label="进场图片">
          </el-table-column>
          <el-table-column
            prop="address"
            align="center"
            label="车位照片">
          </el-table-column>
        </el-table>
        <el-pagination
          background
          layout="prev, pager, next"
          :total="100">
        </el-pagination>
     </div>
    </el-tab-pane>
    <el-tab-pane label="历史停车记录">配置管理</el-tab-pane>
    <el-tab-pane label="车辆违停记录">角色管理</el-tab-pane>
    <el-tab-pane label="月租缴费记录">定时任务补偿</el-tab-pane>
    <el-tab-pane label="停车缴费记录">定时任务补偿</el-tab-pane>
    <el-tab-pane label="排班收费汇总">定时任务补偿</el-tab-pane>
    <el-tab-pane label="车辆入库统计">定时任务补偿</el-tab-pane>
    <el-tab-pane label="车辆出库统计">定时任务补偿</el-tab-pane>
    <el-tab-pane label="停车用户查询">停车用户查询</el-tab-pane>
  </el-tabs>
</div>
</template>

<script>
import searchPart from '@/components/search-part'
export default {
  data () {
    return {
      activeName: '',
      reportData:[]
    }
  },
  components: {
    searchPart
  },
  methods: {
    tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return 'background-color: #e4e4e4;'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.dataReport {
  width: 100%;
  height: 100%;
  padding: 19px 58px 0 60px;
  box-sizing: border-box;
  .nav {
    margin-bottom: 25px;
    span {
      font-size: 16px;
      &.current {
        color: #fba128;
      }
    }
  }
  .el-tabs__content {
    overflow: visible;
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
<style>
.el-tabs__content {
    overflow: visible;
}
</style>

