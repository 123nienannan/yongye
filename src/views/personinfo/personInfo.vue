<template>
<div class="person-info">
   <div class="nav">
     <span>后台管理</span>
      ->
     <span class="current">个人中心</span>
   </div>
   <div class="my-info">
     <p>我的信息</p>
     <el-form label-width="80px" size="small" :model="searchForm">
       <el-row>
         <el-col :span="16">
          <el-row>
             <el-col :span="8">
               <el-form-item label="姓名:">
                <el-input v-model="searchForm.name" placeholder="请输入原密码"></el-input>
               </el-form-item>
             </el-col>
             <el-col :span="8">
              <el-form-item label="部门:">
                <el-input v-model="searchForm.name" placeholder="请输入原密码"></el-input>
              </el-form-item>
             </el-col>
          </el-row>
          <el-row>
             <el-col :span="8">
               <el-form-item label="联系方式:">
                <el-input v-model="searchForm.name" placeholder="请输入原密码"></el-input>
               </el-form-item>
             </el-col>
             <el-col :span="8">
              <el-form-item label="邮箱:">
                <el-input v-model="searchForm.name" placeholder="请输入原密码"></el-input>
              </el-form-item>
             </el-col>
          </el-row>
         </el-col>
         <el-col :span="8">
          <div class="pic_right">
            <div class="save_pic">
              <img src="">
              <input type="file">
            </div>
            <div class="text">
              <div class="special">点击修改头像
                <input type="file">
              </div>
              <div>文件限400KB，支持</div>
              <div>JPG/JGEG/PNG等格式</div>
            </div>
          </div>
         </el-col>
       </el-row>
     </el-form>
   </div>
   <div class="edit-secrete">
     <p>修改密码</p>
     <el-form label-width="80px" size="small" :model="searchForm">
        <el-row>
          <el-col :span="4">
            <el-form-item label="原密码:">
                <el-input v-model="searchForm.name" placeholder="请输入原密码"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">
            <el-form-item label="新密码:">
                <el-input v-model="searchForm.name" placeholder="请输入新密码"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">
            <el-form-item label="确认密码:">
                <el-input v-model="searchForm.name" placeholder="请确认新密码"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">
            <el-form-item>
              <el-button class="sure">确认</el-button>
              <el-button class="turndown">取消</el-button>
            </el-form-item>
          </el-col>
        </el-row>
     </el-form>
   </div>
</div>
</template>

<script>
export default {
    data () {
      return {
        searchForm: {
          name:''
        }
      }
    },
    methods: {

  }
}
</script>

<style lang="less" scoped>
.person-info {
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
  .my-info {
    margin-bottom: 22px;
    background-color: #ffffff;
    box-shadow: 0px 2px 3px 0px
      rgba(0, 0, 0, 0.3);
    border: solid 1px #dcdcdc;
    padding: 18px 25px;
    p {
      color: #222;
      font-size: 18px;
      padding-bottom: 35px;
    }
    .pic_right {
      display: flex;
      justify-content: center;
      align-items: center;
      .save_pic {
        position: relative;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        border: 1px solid red;
        margin-top: -30px;
        margin-right: 22px;
        overflow: hidden;
        img {
          width: 100%;
        }
        input {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0;
          left: 0;
          right: 0;
        }
      }
      .text {
        margin-top: -22px;
        div {
          padding-bottom: 8px;
          &.special {
            position: relative;
            cursor: pointer;
            input {
              position: absolute;
              width: 100%;
              height: 100%;
              opacity: 0;
              left: 0;
              right: 0;
            }
          }
        }
      }
    }
  }
  .edit-secrete {
    background-color: #ffffff;
    box-shadow: 0px 2px 3px 0px
      rgba(0, 0, 0, 0.3);
    border: solid 1px #dcdcdc;
    padding: 18px 25px;
    p {
      color: #222;
      font-size: 18px;
      padding-bottom: 35px;
    }
    button {
      width: 60px;
      height: 30px;
      border: none;
      &.sure {
        background-image: linear-gradient(
        #1e88f5,
        #1e88f5),
        linear-gradient(
          #e92032,
          #e92032);
        background-blend-mode: normal,
          normal;
        box-shadow: 0px 1px 2px 0px
          rgba(0, 0, 0, 0.65);
        border-radius: 4px;
        color: #fff;
      }
      &.turndown {
        background-color: #ebebeb;
        box-shadow: 0px 1px 2px 0px
          rgba(0, 0, 0, 0.65);
        border-radius: 4px;
        color: #222;
      }
    }
  }
}
</style>
