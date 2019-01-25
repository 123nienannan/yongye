<template>
  <div class="addbind">
    <div class="addbind_top">
      <i @click="comeback" class="el-icon-back"></i>
      <span>添加摄像头车位绑定</span>
    </div>
    <div class="addbind_main">
      <p>添加摄像头车位绑定</p>
      <el-form :model="addbindForm" ref="addbindForm" label-width="100px" class="demo-ruleForm">
        <el-row>
          <el-col :span="10">
           <el-form-item label="连接类型:" prop="region">
            <el-select v-model="addbindForm.name" placeholder="开放车位" style="width: 100%;">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
           </el-form-item>
          </el-col>
          <el-col :span="14"></el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
           <el-form-item label="连接设备:" prop="region">
            <el-select v-model="addbindForm.name" placeholder="开放车位" style="width: 100%;">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
           </el-form-item>
          </el-col>
          <el-col :span="14"></el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
           <el-form-item label="监控车道序号:" prop="name">
            <el-input v-model="addbindForm.name" placeholder="请输入车位编号"></el-input>
           </el-form-item>
          </el-col>
          <el-col :span="14"></el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
           <el-form-item label="通道号:" prop="name">
            <el-input v-model="addbindForm.name" placeholder="请输入编号"></el-input>
           </el-form-item>
          </el-col>
          <el-col :span="14"></el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
           <el-form-item label="车位编号:" prop="region">
            <el-select v-model="addbindForm.name" placeholder="开放车位" style="width: 100%;">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
           </el-form-item>
          </el-col>
          <el-col :span="14"></el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
           <el-form-item label="状态:" prop="name">
             <el-select v-model="addbindForm.name" placeholder="开放车位" style="width: 100%;">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
           </el-form-item>
          </el-col>
          <el-col :span="14"></el-col>
        </el-row>
      </el-form>
      <div class="addbind_foot">
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
      addbindForm: {
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
.addbind {
  padding: 20px 58px 82px 62px;
  .addbind_top {
    font-size: 16px;
    span {
      color: #fba128;
    }
  }
  .addbind_main {
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
      margin-bottom: 18px;
      .el-form-item {
          margin-bottom: 6px;
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
    .addbind_foot {
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
<style lang="less">
.addbind {
 .el-input__inner  {
    height: 37px;
    line-height: 37px;
}
}

</style>

