<template>
 <div class="searchBar">
   <el-form>
     <el-row>
        <el-col :span="3">
          <el-form-item label="车牌:" label-width="60px" size="small">
            <el-input v-model="name" placeholder="请输入车牌"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item label="车位:" label-width="60px" size="small">
            <el-input v-model="name" placeholder="请输入车位"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="2" :offset="1">
          <el-button class="search">查询</el-button>
        </el-col>
        <el-col :span="2">
          <el-upload
              class="upload-demo"
              :multiple="false"
              action="">
              <el-button class="import">导出</el-button>
           </el-upload>
        </el-col>
        <el-col :span="15">
        </el-col>
     </el-row>
   </el-form>
</div>
</template>

<script>
export default {
  data() {
    return {
       name:''
    }
  },
}
</script>

<style scoped lang="less">
.searchBar {
  box-shadow: 0px 1px 1px 0px
		rgba(0, 0, 0, 0.3);
  padding: 8px 0px 5px 5px;
  height: 50px;
  box-sizing: border-box;
  background-color: #fff;
  button {
      width: 92px;
      height: 32px;
      padding:0;
      border: none;
      color: #fff;
      border-radius: 4px;
  }
  .search {
        margin-right: -34px;
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
        margin-left: -35px;
        width: 92px;
        height: 32px;
        margin-right: 10px;
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
</style>
<style lang="less">
.searchBar {
   .el-input__inner {
     border:none;
     background-image: linear-gradient(
        #eeeeee,
        #eeeeee),
      linear-gradient(
        #222228,
        #222228);
      background-blend-mode: normal,
        normal;
      border-radius: 4px;
  }
  .el-form-item  {
    margin-bottom:0;
  }
  .el-upload-list {
    display: none;
  }
}
</style>

