<template>
<div class="dataReport">
  <div class="nav">
     <span>智慧停车</span>
      ->
     <span class="current">数据报表</span>
  </div>
   <el-tabs>
    <el-tab-pane label="当前停车记录">
     <search-part></search-part>
    </el-tab-pane>
    <el-tab-pane label="历史停车记录">
      <history-park></history-park>
    </el-tab-pane>
    <el-tab-pane label="车辆违停记录">
      <error-park></error-park>
    </el-tab-pane>
    <el-tab-pane label="月租缴费记录">
      <payment-park></payment-park>
    </el-tab-pane>
    <el-tab-pane label="停车缴费记录">
      <parkpayment-park></parkpayment-park>
    </el-tab-pane>
    <el-tab-pane label="排班收费汇总">
      <gather-park></gather-park>
    </el-tab-pane>
    <el-tab-pane label="车辆入库统计">
      <storage-park></storage-park>
    </el-tab-pane>
    <el-tab-pane label="车辆出库统计">
     <output-park></output-park>
    </el-tab-pane>
    <el-tab-pane label="停车用户查询">
     <usersearch-park></usersearch-park>
    </el-tab-pane>
    <el-tab-pane label="设备报警记录">
      <policeCall></policeCall>
    </el-tab-pane>
  </el-tabs>
</div>
</template>

<script>
import searchPart from '@/subviews/search-part'
import historyPark from '@/subviews/history-park'
import errorPark from '@/subviews/error-park'
import paymentPark from '@/subviews/payment-park'
import parkpaymentPark from '@/subviews/parkpayment-park'
import gatherPark from '@/subviews/gather-park'
import storagePark from '@/subviews/storage-park'
import outputPark from '@/subviews/output-park'
import usersearchPark from '@/subviews/usersearch-park'
import policeCall from '@/subviews/police-call'
export default {
  data () {
    return {
      activeName: '',
    }
  },
  components: {
    searchPart,
    historyPark,
    errorPark,
    paymentPark,
    parkpaymentPark,
    gatherPark,
    storagePark,
    outputPark,
    usersearchPark,
    policeCall
  },
  methods: {

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
}
</style>
<style lang="less">
.dataReport {
    .el-tabs__content {
        overflow: visible;
    }
}

</style>

