<template>
<div class="bindPark">
    <div class="topBar">
     <el-form label-width="100px" size="small" :model="searchForm">
      <el-row style="padding-top: 2px;">
          <el-col :span="4">
              <el-form-item label="连接设备ID:">
                <el-input v-model="searchForm.name" placeholder="请输入连接设备ID"></el-input>
              </el-form-item>
          </el-col>
          <el-col :span="4">
              <el-form-item label="车位编号:">
              <el-input v-model="searchForm.name" placeholder="请输入车位编号"></el-input>
              </el-form-item>
          </el-col>
        <el-col :span="10">
          <el-button class="search">查询</el-button>
          <el-upload
            class="upload-demo"
            :multiple="false"
            action="">
            <el-button class="import">批量导入</el-button>
          </el-upload>
          <el-button icon="el-icon-plus" class="openUser" @click="addbindPark">摄像头车位绑定</el-button>
        </el-col>
      </el-row>
     </el-form>
    </div>
    <div class="main">
      <el-table
        :header-cell-style="tableHeaderColor"
        :data="bindParkData"
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
          label="连接类型">
        </el-table-column>
        <el-table-column
          prop="date"
          align="center"
          label="连接设备ID">
        </el-table-column>
        <el-table-column
          prop="date"
          align="center"
          label="监控车道序号">
        </el-table-column>
        <el-table-column
          prop="date"
          align="center"
          label="通道号">
        </el-table-column>
        <el-table-column
          prop="date"
          align="center"
          label="车位编号">
        </el-table-column>
        <el-table-column
          prop="date"
          align="center"
          label="状态">
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="操作">
          <template slot-scope="scope">
          <el-button class="parkuser_btn" @click="keepbindPark" type="text" size="small">维护</el-button>
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
 name:"region",
 data () {
   return {
    bindParkData:[{
      data:1
    }],
    searchForm:{
      name:''
    }
   }
 },
 methods: {
   addbindPark () {
     this.$router.push({name:'addBind'})
     this.$store.commit('changedevice')
   },
   keepbindPark () {
        this.$router.push({name:'keepBind'})
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
.bindPark {
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
  .topBar {
      box-shadow: 0px 1px 1px 0px
      rgba(0, 0, 0, 0.3);
      padding: 5px 22px 5px 5px;
      height: 50px;
      box-sizing: border-box;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .el-form {
        width: 100%;
        height: 100%;
        .el-form-item {
          margin-bottom: 0px;
          margin-right: 20px;
        }
      }
   .search {
        margin-left: 35px;
        background-image: linear-gradient(
          #1078d2,
          #1078d2),
        linear-gradient(
          #222228,
          #222228);
        box-shadow: 0px 1px 2px 0px
          rgba(0, 0, 0, 0.65);
   }
   .upload-demo {
     margin-left: 6px;
     display: inline-block;
     .el-upload-list {
       display: none;
     }
      .import {
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
    .openUser {
        width: 135px;
        margin-left: -4px;
        background-image: linear-gradient(
            #02a896,
            #02a896),
          linear-gradient(
            #222228,
            #222228);
          box-shadow: 0px 1px 2px 0px
            rgba(0, 0, 0, 0.65);
    }
    button {
      width: 92px;
      height: 32px;
      padding:0;
      border: none;
      color: #fff;
      border-radius: 4px;
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
  .dialog-footer {
    button {
      width: 60px;
      height: 30px;
      padding: 0;
    }
  }
}
</style>
<style lang="less">
.bindPark {
  .el-input__inner {
      background-image: linear-gradient(
        #eeeeee,
        #eeeeee),
      linear-gradient(
        #222228,
        #222228);
      border-radius: 4px;
      border:none;
  }
}
</style>
