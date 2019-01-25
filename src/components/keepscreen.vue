<template>
  <div class="keepscreen">
    <div class="keepscreen_top">
      <i @click="comeback" class="el-icon-back"></i>
      <span>维护显示屏车位组</span>
    </div>
    <div class="keepscreen_main">
      <p>维护显示屏车位组</p>
      <el-form :model="keepscreenForm" ref="keepscreenForm" label-width="100px" class="demo-ruleForm">
        <el-row>
          <el-col :span="10">
           <el-form-item label="车库:" prop="region">
            <el-select v-model="keepscreenForm.name" placeholder="开放车位" style="width: 100%;">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
           </el-form-item>
          </el-col>
          <el-col :span="14"></el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
           <el-form-item label="车库区域:" prop="name">
             <el-select v-model="keepscreenForm.name" placeholder="开放车位" style="width: 100%;">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
           </el-form-item>
          </el-col>
          <el-col :span="14"></el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
           <el-form-item label="名称:" prop="name">
            <el-input v-model="keepscreenForm.name" placeholder="请输入车位编号"></el-input>
           </el-form-item>
          </el-col>
          <el-col :span="14"></el-col>
        </el-row>
         <el-row>
          <el-col :span="10">
           <el-form-item label="已绑定车位:" prop="name">
             <div><el-input
                      class="input-new-tag"
                      v-if="inputVisible"
                      v-model="inputValue"
                      ref="saveTagInput"
                      size="small"
                      @keyup.enter.native="handleInputConfirm"
                      @blur="handleInputConfirm"
                    >
                    </el-input>
                    <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button></div>
                    <el-tag
                      :key="tag"
                      v-for="tag in dynamicTags"
                      closable
                      :disable-transitions="false"
                      @close="handleClose(tag)">
                      {{tag}}
                    </el-tag>
           </el-form-item>
          </el-col>
          <el-col :span="14"></el-col>
        </el-row>
      </el-form>
      <div class="keepscreen_foot">
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
      keepscreenForm: {
        name:''
      },
      dynamicTags: ['标签一', '标签二', '标签三'],
      inputVisible: false,
      inputValue: ''
    }
  },
  methods: {
    comeback () {
      window.history.go(-1)
    },
    handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
     },
     showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
     },
      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
  }
}
</script>

<style lang="less" scoped>
.keepscreen {
  padding: 20px 58px 82px 62px;
  .keepscreen_top {
    font-size: 16px;
    span {
      color: #fba128;
    }
  }
  .keepscreen_main {
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
    .keepscreen_foot {
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
