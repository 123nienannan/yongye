<template>
<div class="monitor-region">
    <el-button class="role" icon="el-icon-plus" @click="addmonitor">硬件监控区域</el-button>
    <div class="main">
      <el-table
        :header-cell-style="tableHeaderColor"
        :data="monitorregionData"
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
          label="名称">
        </el-table-column>
        <el-table-column
          prop="date"
          align="center"
          label="车库">
        </el-table-column>
        <el-table-column
          prop="date"
          align="center"
          label="宽度">
        </el-table-column>
        <el-table-column
          prop="date"
          align="center"
          label="高度">
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="操作">
          <template slot-scope="scope">
          <el-button class="parkuser_btn" @click="keepmonitor" type="text" size="small">维护</el-button>
          <el-button class="parkuser_btn" type="text" @click="monitorMap" size="small">硬件监控图</el-button>
          <el-button class="parkuser_btn" type="text" size="small">删除</el-button>
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
 name:"monitor",
 data () {
   return {
    monitorregionData:[{
      data:1
    }]
   }
 },
 methods: {
   addmonitor () {
        this.$router.push({name:'addmonitorRegion'})
        this.$store.commit('changedevice')
   },
   keepmonitor () {
        this.$router.push({name:'keepmonitorRegion'})
        this.$store.commit('changedevice')
   },
   monitorMap () {
       this.$router.push({name:'monitorMap'})
       this.$store.commit('changedevice')
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
.monitor-region {
  width: 100%;
  height: 100%;
  .nav {
    margin-bottom: 25px;
    span {
      font-size: 16px;
      &.current {
        color: #fba128;
      }
    }
  }
  .main {
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
    .role {
      padding: 0 5px;
      height: 32px;
      color: #fff;
      border: none;
      background-image: linear-gradient(
      #02a896,
      #02a896),
      linear-gradient(
        #222228,
        #222228);
      box-shadow: 0px 1px 2px 0px
        rgba(0, 0, 0, 0.65);
      border-radius: 4px;
    }
  .dialog-footer {
    button {
      width: 60px;
      height: 30px;
      padding: 0;
    }
  }
}
</style>
