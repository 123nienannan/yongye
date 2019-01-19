<template>
  <div class="addregiongarage">
    <div class="addregiongarage_top">
      <i @click="comeback" class="el-icon-back"></i>
      <span>添加车库区域</span>
    </div>
    <div class="addregiongarage_main">
      <p>添加车库区域</p>
      <el-form :model="addregiongarageForm" ref="addregiongarageForm" label-width="70px" class="demo-ruleForm">
        <el-row>
          <el-col :span="10">
           <el-form-item label="名称:" prop="name">
             <el-input v-model="addregiongarageForm.name" placeholder="请输入名称"></el-input>
           </el-form-item>
          </el-col>
          <el-col :span="14"></el-col>
        </el-row>
         <el-row>
          <el-col :span="10">
           <el-form-item label="车库:" prop="region">
            <el-select v-model="addregiongarageForm.name" placeholder="请选择" style="width: 100%;">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
           </el-form-item>
          </el-col>
          <el-col :span="14"></el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
           <el-form-item label="区域图:" prop="name">
             <input type="file">
           </el-form-item>
          </el-col>
          <el-col :span="14"></el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
           <el-form-item label="宽度:" prop="name">
            <el-input v-model="addregiongarageForm.name" placeholder="请输入宽度"></el-input>
           </el-form-item>
          </el-col>
          <el-col :span="14"></el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
           <el-form-item label="高度:" prop="name">
            <el-input v-model="addregiongarageForm.name" placeholder="请输入高度"></el-input>
           </el-form-item>
          </el-col>
          <el-col :span="14"></el-col>
        </el-row>
      </el-form>
      <div class="addregiongarage_foot">
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
      addregiongarageForm: {
        name:'first'
      }
    }
  },
  methods: {
    comeback () {
      // this.$emit('regiongarage')
      window.history.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
.addregiongarage {
  padding: 20px 58px 82px 62px;
  .addregiongarage_top {
    font-size: 16px;
    span {
      color: #fba128;
    }
  }
  .addregiongarage_main {
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
      margin-bottom: 20px;
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
    .addregiongarage_foot {
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
