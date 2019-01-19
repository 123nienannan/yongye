<template>
  <div class="mappark">
    <div class="mappark_top">
      <i @click="comeback" class="el-icon-back"></i>
      <span>车位图</span>
    </div>
    <div class="mappark_main">
      <p>车位图</p>


    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    comeback () {
      window.history.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
.mappark {
  padding: 20px 58px 82px 62px;
  .mappark_top {
    font-size: 16px;
    span {
      color: #fba128;
    }
  }
  .mappark_main {
    box-shadow: 0px 2px 3px 0px
		rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    border: solid 1px #cacaca;
    margin-top: 25px;
    background-color: #fff;
    padding: 25px;
    p {
      padding-bottom: 20px;
      border-bottom: 1px solid #ddd;
      font-size: 18px;
      color: #222;
    }
  }
}
</style>
