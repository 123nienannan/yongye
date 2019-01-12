<template>
<div class="park">
   <div class="nav">
     <span>智慧停车</span>
      ->
     <span class="current">用户停车</span>
   </div>
   <el-form label-width="60px" class="topBar">
     <el-row>
       <el-col :span="20">
         <el-row>
           <el-col :span="6">
             <el-form-item label="活动">
              <el-input v-model="name"></el-input>
            </el-form-item>
           </el-col>
           <el-col :span="6"></el-col>
           <el-col :span="6"></el-col>
           <el-col :span="6"></el-col>
         </el-row>
       </el-col>
       <el-col :span="4"></el-col>
     </el-row>
   </el-form>
</div>
</template>

<script>
export default {
    data () {
      return {
         name:''
      }
    },
    methods: {

    }
}
</script>

<style lang="less" scoped>
.park {
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
  .topBar {

  }
}
</style>

