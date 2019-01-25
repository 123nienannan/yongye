<template>
  <div class="keepmonth">
    <div class="keepmonth_top">
      <i @click="comeback" class="el-icon-back"></i>
      <span>包月续期</span>
    </div>
    <div class="keepmonth_main">
      <p>停车用户基本信息</p>
      <div class="user_info">
         <el-row>
            <el-col :span="6">
              <el-row>
                <el-col :span="7">公司:</el-col>
                <el-col :span="17"><span>55666</span></el-col>
              </el-row>
            </el-col>
            <el-col :offset="2" :span="6">
              <el-row>
                <el-col :span="8">车辆类型:</el-col>
                <el-col :span="16"><span>55666</span></el-col>
              </el-row>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-row>
                <el-col :span="7">姓名:</el-col>
                <el-col :span="17"><span>55666</span></el-col>
              </el-row>
            </el-col>
            <el-col :offset="2" :span="6">
              <el-row>
                <el-col :span="8">手机号码:</el-col>
                <el-col :span="16"><span>55666</span></el-col>
              </el-row>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-row>
                <el-col :span="7">绑定卡号:</el-col>
                <el-col :span="17"><span>55666</span></el-col>
              </el-row>
            </el-col>
            <el-col :offset="2" :span="6">
              <el-row>
                <el-col :span="8">绑定车牌号:</el-col>
                <el-col :span="16"><span>55666</span></el-col>
              </el-row>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-row>
                <el-col :span="7">缴费单价:</el-col>
                <el-col :span="17"><span>55666</span></el-col>
              </el-row>
            </el-col>
            <el-col :offset="2" :span="6">
              <el-row>
                <el-col :span="8">原有效期:</el-col>
                <el-col :span="16"><span>55666</span></el-col>
              </el-row>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-row>
                <el-col :span="7">生效状态:</el-col>
                <el-col :span="17"><span>55666</span></el-col>
              </el-row>
            </el-col>
            <el-col :offset="2" :span="6">

            </el-col>
         </el-row>
      </div>
      <h2>续费信息</h2>
      <el-form :model="keepForm" ref="keepForm" label-width="100px" class="demo-ruleForm">
        <el-row>
          <el-col :span="10">
           <el-form-item label="续费月份:" prop="name">
             <el-input v-model="keepForm.name"></el-input>
           </el-form-item>
          </el-col>
          <el-col :span="14"></el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
           <el-form-item label="实收金额:" prop="name">
             <el-input v-model="keepForm.name"></el-input>
           </el-form-item>
          </el-col>
          <el-col :span="14"></el-col>
        </el-row>
        <el-row>
          <el-col :span="5">
           <el-form-item prop="date1" label="生效日开始:">
              <el-date-picker type="date" placeholder="请输入生效日开始" v-model="keepForm.name" style="width: 100%;"></el-date-picker>
           </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item prop="date2" label="生效日结束:">
              <el-date-picker type="date" placeholder="请输入生效日结束" v-model="keepForm.name" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="14"></el-col>
        </el-row>
        <el-row>
          <el-col :span="20">
            <el-form-item label="备注:">
              <el-input type="textarea" v-model="keepForm.name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div class="keepmonth_foot">
        <el-button class="cancle">取消</el-button>
        <el-button class="confirm">续费</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keepForm: {
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
.keepmonth {
  padding: 20px 58px 82px 62px;
  .keepmonth_top {
    font-size: 16px;
    span {
      color: #fba128;
    }
  }
  .keepmonth_main {
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
    h2 {
      font-size: 18px;
      color: #fba128;
      padding-bottom: 20px;
      border-bottom: 1px solid #fba128;
      margin-bottom: 15px;
    }
    .user_info {
      padding: 18px 50px 50px;
      .el-col {
        height: 36px;
        line-height: 36px;
      }
    }
    .keepmonth_foot {
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
            #fba128,
            #fba128),
          linear-gradient(
            #ffffff,
            #ffffff);
        }
      }
    }
  }
}
</style>
