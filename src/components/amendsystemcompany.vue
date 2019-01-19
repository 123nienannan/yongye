<template>
  <div class="amendsystemCompany">
    <div class="amendsystemCompany_top">
      <i @click="comeback" class="el-icon-back"></i>
      <span>添加系统公司</span>
    </div>
    <div class="amendsystemCompany_main">
      <p>添加系统公司</p>
      <el-form :model="amendsystemCompanyForm" ref="amendsystemCompanyForm" label-width="100px" class="demo-ruleForm">
        <el-row>
          <el-col :span="10">
           <el-form-item label="公司名称:" prop="name">
             <el-input v-model="amendsystemCompanyForm.name" placeholder="请输入公司名称"></el-input>
           </el-form-item>
          </el-col>
          <el-col :span="14"></el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
           <el-form-item label="联系人:" prop="name">
             <el-input v-model="amendsystemCompanyForm.name" placeholder="请输入联系人"></el-input>
           </el-form-item>
          </el-col>
          <el-col :span="14"></el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
           <el-form-item label="地址:" prop="name">
            <el-input v-model="amendsystemCompanyForm.name" placeholder="请输入地址"></el-input>
           </el-form-item>
          </el-col>
          <el-col :span="14"></el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
           <el-form-item label="园区地址:" prop="name">
            <el-input v-model="amendsystemCompanyForm.name" placeholder="请输入园区地址"></el-input>
           </el-form-item>
          </el-col>
          <el-col :span="14"></el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
           <el-form-item label="电话:" prop="name">
            <el-input v-model="amendsystemCompanyForm.name" placeholder="请输入电话"></el-input>
           </el-form-item>
          </el-col>
          <el-col :span="14"></el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
           <el-form-item label="公司管理员:" prop="region">
            <el-select v-model="amendsystemCompanyForm.name" placeholder="" style="width: 100%;">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
           </el-form-item>
          </el-col>
          <el-col :span="14"></el-col>
        </el-row>
         <el-row>
          <el-col :span="10">
           <el-form-item label="物业公司:" prop="region">
            <el-select v-model="amendsystemCompanyForm.name" placeholder="否" style="width: 100%;">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
           </el-form-item>
          </el-col>
          <el-col :span="14"></el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
           <el-form-item label="所属物业公司:" prop="region">
            <el-select v-model="amendsystemCompanyForm.name" placeholder="集团置业" style="width: 100%;">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
           </el-form-item>
          </el-col>
          <el-col :span="14"></el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
           <el-form-item label="备注:" prop="name">
            <el-input v-model="amendsystemCompanyForm.name" placeholder="请输入备注"></el-input>
           </el-form-item>
          </el-col>
          <el-col :span="14"></el-col>
        </el-row>
      </el-form>
      <div class="amendsystemCompany_foot">
        <el-button class="cancle">取消</el-button>
        <el-button class="confirm">确认</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amendsystemCompanyForm: {
        name:''
      }
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
.amendsystemCompany {
  padding: 20px 58px 82px 62px;
  .amendsystemCompany_top {
    font-size: 16px;
    span {
      color: #fba128;
    }
  }
  .amendsystemCompany_main {
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
    .el-form {
      margin-top: 18px;
      .el-form-item {
          margin-bottom: 8px;
      }
      .el-input__inner  {
        height: 32px;
        line-height: 32px;
      }
      .icon_explain {
        margin-left: 8px;
        text-align: center;
        width: 120px;
        height: 36px;
        line-height: 32px;
        background: url("../assets/images/icon-explain.png") no-repeat;
        span {
          font-size: 16px;
          color: #fff;
        }
      }
    }
    .amendsystemCompany_foot {
      padding-top: 20px;
      border-top: 1px solid #ddd;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      button {
        width: 150px;
        height: 40px;
        border: none;
        border-radius: 4px;
        box-shadow: 0px 1px 2px 0px
            rgba(0, 0, 0, 0.65);
        &.cancle {
          background-color: #ebebeb;
          border-radius: 4px;
        }
        &.confirm {
          color: #fff;
          background-image: linear-gradient(
            #1e88f5,
            #1e88f5),
          linear-gradient(
            #ffffff,
            #ffffff);
        }
      }
    }
  }
}
</style>
