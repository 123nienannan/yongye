<template>
<div class="login">
  <div class="content">
    <p>停车后台管理系统</p>
    <div class="info">
       <div class="title">永业公寓</div>
       <div class="line"></div>
       <div class="park-text">停车后台管理系统</div>
       <div class="username">
         <input type="text" v-model="username" placeholder="用户名">
         <div>请输入用户名</div>
       </div>
       <div class="password">
         <input type="password" v-model="password" placeholder="密码">
         <div>请输入密码</div>
       </div>
       <div class="remember">
         <el-checkbox>记住用户名</el-checkbox>
       </div>
       <div class="foot" @click="loginhandle">
         登录
       </div>
    </div>

  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
   loginhandle() {
     this.$router.push({name:'Allscan'})
   }
  }
}
</script>

<style lang="less" scoped>
.login {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("../../assets/images/bg-login.jpg") no-repeat;
  background-size: cover;
  .content {
    position: relative;
    width: 100%;
    height: 100%;
    p {
      position: absolute;
      left: 12%;
      top: 35%;
      letter-spacing: 7px;
      color: #febf4a;
      font-size: 48px;
    }
    .info {
      padding: 55px 63px;
      position: absolute;
      right: 12%;
      top: 50%;
      transform: translateY(-50%);
      background-image: linear-gradient(180deg,
                      #3f4346 0%,
                      #232626 100%),
                      linear-gradient(
                        #150e02,
                        #150e02);
      box-shadow: 0px 2px 22px 2px
		rgba(0, 0, 0, 0.31);
      border-radius: 10px;
      .title {
        text-align: center;
        font-size: 36px;
        letter-spacing: 5px;
        color: #ffffff;
        padding-bottom: 14px;
      }
      .line {
        width: 350px;
        height: 2px;
        background-color: #fdd35d;
      }
      .park-text {
        margin-top: 15px;
        font-size: 24px;
        color: #fff;
        letter-spacing: 3px;
        text-align: center;
        margin-bottom: 39px;
      }
      .username {
        position: relative;
        &::before {
            content: "";
            width: 30px;
            height: 30px;
            position: absolute;
            left: 15px;
            top: 10px;
            background: url("../../assets/images/icon-username.png") no-repeat;
        }
        input {
          padding-left: 60px;
          background:none;
          outline:none;
          border:0px;
          width: 290px;
          height: 50px;
          background-color: #4c5052;
          border-radius: 25px;
          color: #fff;
        }
        div {
          color: #febf4a;
          padding: 5px 18px;
          font-size: 14px;
        }
      }
      .password {
         position: relative;
         &::before {
            content: "";
            width: 30px;
            height: 30px;
            position: absolute;
            left: 15px;
            top: 10px;
            background: url("../../assets/images/icon-password.png") no-repeat;
         }
        input {
          padding-left: 60px;
          background:none;
          outline:none;
          border:0px;
          width: 290px;
          height: 50px;
          background-color: #4c5052;
          border-radius: 25px;
          color: #fff;
        }
        div {
          color: #febf4a;
          padding: 5px 18px;
          font-size: 14px;
         }
      }
      .remember {
        padding: 10px 18px;
        .el-checkbox {
          color: #fff;
        }
      }
      .foot {
        width: 350px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        letter-spacing: 12px;
        color: #000000;
        font-size: 18px;
        background-image: linear-gradient(90deg,
          #fdd35d 0%,
          #febb46 100%),
        linear-gradient(
          #019fe8,
          #019fe8);
        border-radius: 25px;
      }
    }
  }
}
</style>
<style lang="less">
.login {
  .el-checkbox__inner {
    background-color: #1c1303;
    border: solid 1px #fdd35d;
  }
}
</style>


