<template>
<div class="systemDevice">
  <div class="nav">
     <span>智慧停车</span>
      ->
     <span class="current">停车设备</span>
  </div>
  <el-tabs v-model="activeName">
    <el-tab-pane name="first" label="停车库">
      <parkcarGarage></parkcarGarage>
    </el-tab-pane>
    <el-tab-pane name="two" label="车库区域">
      <regioncarGarage></regioncarGarage>
    </el-tab-pane>
    <el-tab-pane name="three" label="硬件监控区域">
      <monitorRegion></monitorRegion>
    </el-tab-pane>
    <el-tab-pane name="four" label="车位">
      <carPark></carPark>
    </el-tab-pane>
    <el-tab-pane name="five" label="机械车位组">定时任务补偿</el-tab-pane>
    <el-tab-pane name="six" label="显示屏车位组">定时任务补偿</el-tab-pane>
    <el-tab-pane name="seven" label="出入口">定时任务补偿</el-tab-pane>
    <el-tab-pane name="eight" label="闸机">定时任务补偿</el-tab-pane>
    <el-tab-pane name="nine" label="摄像头">定时任务补偿</el-tab-pane>
    <el-tab-pane name="ten" label="车位摄像头">定时任务补偿</el-tab-pane>
    <el-tab-pane name="eleven" label="诱导管理器">定时任务补偿</el-tab-pane>
    <el-tab-pane name="twelve" label="票箱">定时任务补偿</el-tab-pane>
    <el-tab-pane name="thirteen" label="显示屏">定时任务补偿</el-tab-pane>
    <el-tab-pane name="fourteen" label="摄像头车位绑定">定时任务补偿</el-tab-pane>
  </el-tabs>
</div>
</template>

<script>
import parkcarGarage from '@/subviews/park-cargarage'
import regioncarGarage from '@/subviews/region-cargarage'
import monitorRegion from '@/subviews/monitor-region'
import carPark from '@/subviews/car-park'
export default {
  data() {
    return {
     activeName:'first'
    }
  },
  methods: {
  },
  components: {
    parkcarGarage,
    regioncarGarage,
    monitorRegion,
    carPark
  }
}
</script>

<style lang='less' scoped>
.systemDevice {
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
.systemDevice {
  .el-tabs__content {
    overflow: visible;
  }
}
</style>
