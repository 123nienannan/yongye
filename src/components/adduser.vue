<template>
  <div class="adduser">
    <div class="adduser_top">
      <i @click="comeback" class="el-icon-back"></i>
      <span>开户</span>
    </div>
    <div class="adduser_main">
      <p>开户信息登记</p>
      <el-form :model="adduserForm" ref="adduserForm" label-width="100px" class="demo-ruleForm">
        <el-row>
          <el-col :span="10">
           <el-form-item label="公司:" prop="name">
             <el-input v-model="adduserForm.name" placeholder="请输入公司名"></el-input>
           </el-form-item>
          </el-col>
          <el-col :span="14"></el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
           <el-form-item label="用户类型:" prop="region">
            <el-select v-model="adduserForm.name" placeholder="固定用户" style="width: 100%;">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
           </el-form-item>
          </el-col>
          <el-col :span="14"></el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
           <el-form-item label="姓名:" prop="name">
             <el-input v-model="adduserForm.name" placeholder="请输入姓名"></el-input>
           </el-form-item>
          </el-col>
          <el-col :span="14"></el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
           <el-form-item label="手机号码:" prop="name">
            <el-input v-model="adduserForm.name" placeholder="请输入手机号码"></el-input>
           </el-form-item>
          </el-col>
          <el-col :span="14"></el-col>
        </el-row>
        <el-row>
          <el-col :span="5">
           <el-form-item prop="date1" label="生效日开始:">
              <el-date-picker type="date" placeholder="请输入生效日开始" v-model="adduserForm.name" style="width: 100%;"></el-date-picker>
           </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item prop="date2" label="生效日结束:">
              <el-date-picker type="date" placeholder="请输入生效日结束" v-model="adduserForm.name" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="14"></el-col>
        </el-row>
        <el-row>
          <el-col :span="5">
           <el-form-item label="车牌号:" prop="name">
            <el-input v-model="adduserForm.name" placeholder="请输入车牌号"></el-input>
           </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item>
             <el-radio label="临时无牌车" v-model="adduserForm.name"></el-radio>
            </el-form-item>
          </el-col>
          <el-col :span="14"></el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
           <el-form-item label="绑定卡号:" prop="name">
            <el-input v-model="adduserForm.name" placeholder="请绑定卡号"></el-input>
           </el-form-item>
          </el-col>
          <el-col :span="14"></el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
           <el-form-item label="缴费类型:" prop="region">
            <el-select v-model="adduserForm.name" placeholder="协议价平面" style="width: 100%;">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
           </el-form-item>
          </el-col>
          <el-col :span="2">
            <div class="icon_explain">
              <span>查看说明</span>
            </div>
          </el-col>
          <el-col :span="12"></el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
           <el-form-item label="绑定车位:" prop="region">
            <el-select v-model="adduserForm.name" placeholder="请选择车位" style="width: 100%;">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
           </el-form-item>
          </el-col>
          <el-col :span="14"></el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            <el-form-item label="入口权限:" prop="resource">
              <el-radio-group v-model="adduserForm.name">
                <el-radio label="1号入口"></el-radio>
                <el-radio label="2号入口"></el-radio>
                <el-radio label="3号入口"></el-radio>
                <el-radio label="4号入口"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="14"></el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            <el-form-item label="出口权限:" prop="resource">
              <el-radio-group v-model="adduserForm.name">
                <el-radio label="1号出口"></el-radio>
                <el-radio label="2号出口"></el-radio>
                <el-radio label="3号出口"></el-radio>
                <el-radio label="4号出口"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="14"></el-col>
        </el-row>
      </el-form>
      <div class="adduser_foot">
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
      adduserForm: {
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
.adduser {
  padding: 20px 58px 82px 62px;
  .adduser_top {
    font-size: 16px;
    span {
      color: #fba128;
    }
  }
  .adduser_main {
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
    .adduser_foot {
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
