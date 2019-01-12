<template>
<div class="park">
   <div class="nav">
     <span>智慧停车</span>
      ->
     <span class="current">用户停车</span>
   </div>
   <div class="topBar">
     <el-form label-width="80px" size="small" :model="searchForm">
      <el-row style="padding-top: 2px;">
        <el-col :span="18">
             <el-row>
               <el-col :span="4">
                  <el-form-item label="公司:">
                     <el-input v-model="searchForm.company" placeholder="请输入公司"></el-input>
                  </el-form-item>
               </el-col>
               <el-col :span="4">
                   <el-form-item label="姓名:">
                    <el-input v-model="searchForm.username" placeholder="请输入姓名"></el-input>
                   </el-form-item>
               </el-col>
               <el-col :span="4">
                    <el-form-item label="车牌:">
                      <el-input v-model="searchForm.brandCar" placeholder="请输入车牌"></el-input>
                    </el-form-item>
               </el-col>
               <el-col :span="4">
                 <el-form-item label="停车类型:">
                    <el-select v-model="searchForm.parktype" placeholder="全部类型">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
               </el-col>
               <el-col :span="4">
                  <el-form-item label="账户状态:">
                    <el-select v-model="searchForm.userstatus" placeholder="有效期">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
               </el-col>
               <el-col :span="4"></el-col>
             </el-row>
        </el-col>
        <el-col :span="6">
          <el-row>
            <el-col :span="6">
              <el-button class="search">查询</el-button>
            </el-col>
            <el-col :span="6">
              <el-upload
              class="upload-demo"
              :multiple="false"
              action="">
              <el-button class="import">导入</el-button>
            </el-upload>
            </el-col>
            <el-col :span="6">
              <el-upload
                class="upload-demo"
                :multiple="false"
                action="">
                <el-button class="import">导出</el-button>
              </el-upload>
            </el-col>
            <el-col :span="6">
              <el-button icon="el-icon-plus" class="openUser">开户</el-button>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
     </el-form>
   </div>
   <div class="wrapper">
      <el-table
        :header-cell-style="tableHeaderColor"
        :data="parkData"
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
          label="姓名"
          align="center"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="联系方式">
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="公司">
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="停车类型">
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="有效期">
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="操作">
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
            company:'',
            username:'',
            brandCar:'',
            parktype:'',
            userstatus:''
         },
         parkData:[]
      }
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
        margin-right: 10px;
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
  }

}
</style>
<style lang="less">
.park {
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

