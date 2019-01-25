<template>
<div class="systemDevice">
  <div class="nav">
     <span>智慧停车</span>
      ->
     <span class="current">停车设备</span>
  </div>
  <el-tabs v-model="showactiveName">
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
    <el-tab-pane name="five" label="机械车位组">
      <mechanicalCar></mechanicalCar>
    </el-tab-pane>
    <el-tab-pane name="six" label="显示屏车位组">
      <screenCar></screenCar>
    </el-tab-pane>
    <el-tab-pane name="seven" label="出入口">
      <alleyWay></alleyWay>
    </el-tab-pane>
    <el-tab-pane name="eight" label="闸机">
      <Gate></Gate>
    </el-tab-pane>
    <el-tab-pane name="nine" label="摄像头">
      <Camera></Camera>
    </el-tab-pane>
    <el-tab-pane name="ten" label="车位摄像头">
      <cameraCar></cameraCar>
    </el-tab-pane>
    <el-tab-pane name="eleven" label="诱导管理器">
      <guidanceManager></guidanceManager>
    </el-tab-pane>
    <el-tab-pane name="twelve" label="票箱">
      <ballotBox></ballotBox>
    </el-tab-pane>
    <el-tab-pane name="thirteen" label="显示屏">
      <showScreen></showScreen>
    </el-tab-pane>
    <el-tab-pane name="fourteen" label="摄像头车位绑定">
      <bindPark></bindPark>
    </el-tab-pane>
  </el-tabs>
</div>
</template>

<script>
import parkcarGarage from '@/subviews/park-cargarage'
import regioncarGarage from '@/subviews/region-cargarage'
import monitorRegion from '@/subviews/monitor-region'
import carPark from '@/subviews/car-park'
import mechanicalCar from '@/subviews/mechanical-car'
import screenCar from '@/subviews/screen-car'
import alleyWay from '@/subviews/alleyway'
import Gate from '@/subviews/gate'
import Camera from '@/subviews/camera'
import cameraCar from '@/subviews/camera-car'
import guidanceManager from '@/subviews/guidance-manager'
import ballotBox from '@/subviews/ballot-box'
import showScreen from '@/subviews/show-screen'
import bindPark from '@/subviews/bind-park'
export default {
  data() {
    return {

    }
  },
  computed: {
    showactiveName: {
      get () {
        return this.$store.state.activeName
      },
      set (val) {
        this.$store.commit('changeActiveName', val)
      }
    }
  },
  methods: {
  },
  components: {
    parkcarGarage,
    regioncarGarage,
    monitorRegion,
    carPark,
    mechanicalCar,
    screenCar,
    alleyWay,
    Gate,
    Camera,
    cameraCar,
    guidanceManager,
    ballotBox,
    showScreen,
    bindPark
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
