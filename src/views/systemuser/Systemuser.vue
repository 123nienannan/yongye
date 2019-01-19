<template>
<div class="systemuser">
   <div class="nav">
     <span>系统设置</span>
      ->
     <span class="current">系统用户</span>
   </div>
   <div class="topBar">
     <el-form label-width="80px" size="small" :model="searchForm">
      <el-row style="padding-top: 2px;">
               <el-col :span="4">
                  <el-form-item label="公司:">
                     <el-input v-model="searchForm.name" placeholder="请输入公司"></el-input>
                  </el-form-item>
               </el-col>
               <el-col :span="4">
                   <el-form-item label="姓名:">
                    <el-input v-model="searchForm.name" placeholder="请输入姓名"></el-input>
                   </el-form-item>
               </el-col>
               <el-col :span="4">
                    <el-form-item label="电话:">
                      <el-input v-model="searchForm.name" placeholder="请输入电话"></el-input>
                    </el-form-item>
               </el-col>
               <el-col :span="4">
                 <el-form-item label="用户状态:">
                    <el-select v-model="searchForm.name" placeholder="正常">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
               </el-col>
            <el-col :span="6">
              <el-button class="search">查询</el-button>
              <el-button icon="el-icon-plus" class="openUser" @click="addsystemUser">系统用户</el-button>
            </el-col>
            <el-col :span="2">
            </el-col>
      </el-row>
     </el-form>
   </div>
   <div class="wrapper">
      <el-table
        :header-cell-style="tableHeaderColor"
        :data="systemUserData"
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
          label="用户名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          align="center"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="电话">
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="公司">
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="邮箱">
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="状态">
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="操作">
          <template slot-scope="scope">
            <el-button class="parkuser_btn" type="text" size="small" @click="amendsystemUser">修改</el-button>
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
    data () {
      return {
         searchForm: {
            name:''
         },
         systemUserData:[{
           date: 7
         }]
      }
    },
    methods: {
      tableHeaderColor({ row, column, rowIndex, columnIndex }) {
          if (rowIndex === 0) {
            return 'background-color: #e4e4e4;'
          }
      },
      addsystemUser () {
         this.$router.push({name:'addsystemUser'})
         this.$store.commit('changesyatemStatus')
      },
      amendsystemUser () {
        this.$router.push({name:'amendsystemUser'})
         this.$store.commit('changesyatemStatus')
      },

  }
}
</script>

<style lang="less" scoped>
.systemuser {
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
        margin-left: 6px;
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
  .wrapper {
    box-shadow: 0px 2px 3px 0px
		rgba(0, 0, 0, 0.3);
	  border: 1px solid#dcdcdc;
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
.systemuser {
  .el-input__inner {
      background-image: linear-gradient(
        #eeeeee,
        #eeeeee),
      linear-gradient(
        #222228,
        #222228);
      background-blend-mode: normal,
        normal;
      border-radius: 4px;
      border:none;
  }
}
</style>

