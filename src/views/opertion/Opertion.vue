<template>
<div class="opertion">
  <div class="nav">
     <span>智慧停车</span>
      ->
     <span class="current">运维管理</span>
  </div>
  <el-tabs>
    <el-tab-pane class="first" label="包月续期方案">
      <el-button class="fan" icon="el-icon-plus" @click="dialogVisible = true">方案</el-button>
      <div class="main">
        <el-table
          :header-cell-style="tableHeaderColor"
          :data="opertionData"
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
            label="名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="停车类型"
            align="center"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            align="center"
            label="价格">
          </el-table-column>
          <el-table-column
            prop="address"
            align="center"
            label="备注">
          </el-table-column>
          <el-table-column
            prop="address"
            align="center"
            label="操作">
            <template slot-scope="scope">
            <el-button class="parkuser_btn" @click="amenddialogVisible=true" type="text" size="small">修改</el-button>
            <el-button class="parkuser_btn" type="text" size="small">销户</el-button>
          </template>
          </el-table-column>
        </el-table>
        <el-pagination
          background
          layout="prev, pager, next"
          :total="100">
        </el-pagination>
      </div>
      <!-- 新增方案弹框 -->
      <el-dialog
          title="新增-包月续期方案"
          :visible.sync="dialogVisible"
          width="35%"
          center
          :before-close="handleClose">
          <el-form ref="addForm" :model="addForm" label-width="80px">
              <el-form-item label="缴费名称:">
                <el-input v-model="addForm.name"></el-input>
              </el-form-item>
              <el-form-item label="价格:">
                <el-input v-model="addForm.name" class="price"></el-input>
                元续期一个月
              </el-form-item>
              <el-form-item label="停车类型:">
                <el-input v-model="addForm.name"></el-input>
              </el-form-item>
              <el-form-item label="备注:">
                <el-input type="textarea" v-model="addForm.name"></el-input>
              </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
      </el-dialog>
      <!-- 修改方案弹框 -->
      <el-dialog
          title="修改-包月续期方案"
          :visible.sync="amenddialogVisible"
          width="35%"
          center
          :before-close="handleClose">
          <el-form ref="amendForm" :model="amendForm" label-width="80px">
              <el-form-item label="缴费名称:">
                <el-input v-model="amendForm.name"></el-input>
              </el-form-item>
              <el-form-item label="价格:">
                <el-input v-model="amendForm.name" class="price"></el-input>
                元续期一个月
              </el-form-item>
              <el-form-item label="停车类型:">
                <el-input v-model="amendForm.name"></el-input>
              </el-form-item>
              <el-form-item label="备注:">
                <el-input type="textarea" v-model="amendForm.name"></el-input>
              </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="amenddialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="amenddialogVisible = false">确 定</el-button>
          </span>
      </el-dialog>
    </el-tab-pane>
    <el-tab-pane label="收费设置" class="two">
      <div class="centre">
        <p>收费设置</p>
        <el-form ref="chargeForm" :model="chargeForm" label-width="130px">
          <el-form-item label="收费名称:">
            <el-input v-model="chargeForm.name"></el-input>
          </el-form-item>
          <el-form-item label="免费时长:">
            <el-input v-model="chargeForm.name"></el-input>
          </el-form-item>
          <el-form-item label="前半小时收费金额:">
            <el-input v-model="chargeForm.name"></el-input>
          </el-form-item>
          <el-form-item label="前半小时收费金额:">
            <el-input v-model="chargeForm.name"></el-input>
          </el-form-item>
          <el-form-item label="单次限额上限:">
            <el-input v-model="chargeForm.name"></el-input>
          </el-form-item>
          <el-form-item label="付费后不计费时间:">
            <el-input v-model="chargeForm.name"></el-input>
          </el-form-item>
        </el-form>
        <div class="charge_foot">
          <el-button class="cancle">取消</el-button>
          <el-button class="confirm">确认</el-button>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane class="three" label="电子代金券">
        <el-button class="ticket" icon="el-icon-plus" @click="showTicketDilog = true">电子代金券</el-button>
        <div class="main">
          <el-table
            :header-cell-style="tableHeaderColor"
            :data="electronicticketData "
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
              label="收费主题"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="收费标准"
              align="center"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              align="center"
              label="售出时长">
            </el-table-column>
            <el-table-column
              prop="address"
              align="center"
              label="原价">
            </el-table-column>
            <el-table-column
              prop="address"
              align="center"
              label="实际售价">
            </el-table-column>
            <el-table-column
              prop="address"
              align="center"
              label="操作">
              <template slot-scope="scope">
              <el-button class="parkuser_btn" @click="showanendTicketDilog=true" type="text" size="small">修改</el-button>
              <el-button class="parkuser_btn" type="text" size="small">删除</el-button>
            </template>
            </el-table-column>
          </el-table>
          <el-pagination
            background
            layout="prev, pager, next"
            :total="100">
          </el-pagination>
        </div>
         <!-- 新增方案弹框 -->
        <el-dialog
            title="新增-电子代金券"
            :visible.sync="showTicketDilog"
            width="30%"
            center
            :before-close="handleClose">
            <el-form ref="addticketForm" :model="addticketForm" label-width="80px">
                <el-form-item label="收费主题:">
                  <el-input v-model="addticketForm.name"></el-input>
                </el-form-item>
                <el-form-item label="收费标准:">
                  <el-input v-model="addticketForm.name" class="special"></el-input>
                  元/小时，0 - 50 小时
                  <el-input v-model="addticketForm.name" class="special double"></el-input>
                  元/小时，> 50 小时
                </el-form-item>
                <el-form-item label="售出时长:">
                  <el-input v-model="addticketForm.name" class="special"></el-input>
                  小时
                </el-form-item>
                <el-form-item label="原价:">
                  <el-input v-model="addticketForm.name" class="special"></el-input>
                  元
                </el-form-item>
                <el-form-item label="实际售价:">
                  <el-input v-model="addticketForm.name" class="special"></el-input>
                  元
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="showTicketDilog = false">取 消</el-button>
              <el-button type="primary" @click="showTicketDilog = false">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 修改方案弹框 -->
        <el-dialog
            title="修改-电子代金券"
            :visible.sync="showanendTicketDilog"
            width="30%"
            center
            :before-close="handleClose">
            <el-form ref="addticketForm" :model="addticketForm" label-width="80px">
                <el-form-item label="收费主题:">
                  <el-input v-model="addticketForm.name"></el-input>
                </el-form-item>
                <el-form-item label="收费标准:">
                  <el-input v-model="addticketForm.name" class="special"></el-input>
                  元/小时，0 - 50 小时
                  <el-input v-model="addticketForm.name" class="special double"></el-input>
                  元/小时，> 50 小时
                </el-form-item>
                <el-form-item label="售出时长:">
                  <el-input v-model="addticketForm.name" class="special"></el-input>
                  小时
                </el-form-item>
                <el-form-item label="原价:">
                  <el-input v-model="addticketForm.name" class="special"></el-input>
                  元
                </el-form-item>
                <el-form-item label="实际售价:">
                  <el-input v-model="addticketForm.name" class="special"></el-input>
                  元
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="showanendTicketDilog = false">取 消</el-button>
              <el-button type="primary" @click="showanendTicketDilog = false">确 定</el-button>
            </span>
        </el-dialog>
    </el-tab-pane>
  </el-tabs>


</div>
</template>

<script>

export default {
  data() {
    return {
      dialogVisible: false,
      amenddialogVisible:false,
      showTicketDilog:false,
      showanendTicketDilog:false,
      chargeForm: {
        name:''
      },
      amendForm:{
        name:''
      },
      addForm:{
        name:''
      },
      opertionData: [{
        data:1
      }],
      electronicticketData:[{
        data:9
      }],
      addticketForm:{
        name:''
      },
      amendticketForm:{
        name:''
      }
    }
  },

  methods: {
    tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return 'background-color: #e4e4e4;'
      }
    },
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
    }
  }
}
</script>

<style lang='less' scoped>
.opertion {
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
  .main {
      box-shadow: 0px 2px 3px 0px
      rgba(0, 0, 0, 0.3);
      border: solid 1px #dcdcdc;
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
  .first {
    .price {
      width: 60%;
    }

    .fan {
      padding: 0;
      width: 92px;
      height: 32px;
      color: #fff;
      border: none;
      background-image: linear-gradient(
      #02a896,
      #02a896),
      linear-gradient(
        #222228,
        #222228);
      box-shadow: 0px 1px 2px 0px
        rgba(0, 0, 0, 0.65);
      border-radius: 4px;
    }
  }
  .two {
     padding: 25px 28px;
     background-color: #ffffff;
     box-shadow: 0px 2px 3px 0px
      rgba(0, 0, 0, 0.3);
     border-radius: 4px;
     border: solid 1px #cacaca;
     margin-top: 7px;
    .centre {
      p {
        font-size: 18px;
        color: #222;
        padding-bottom: 20px;
        border-bottom: 1px solid #ddd;
      }
      .charge_foot {
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
    .el-form {
      margin-top: 18px;
    }
  }
  .three {
   .ticket {
      padding: 0;
      width: 140px;
      height: 32px;
      color: #fff;
      border: none;
      background-image: linear-gradient(
      #02a896,
      #02a896),
      linear-gradient(
        #222228,
        #222228);
      box-shadow: 0px 1px 2px 0px
        rgba(0, 0, 0, 0.65);
      border-radius: 4px;
   }
   .special {
     width: 60%;
     &.double {
       margin-top: 15px;
     }
   }
  }
  .dialog-footer {
    button {
      width: 60px;
      height: 30px;
      padding: 0;
    }
  }
}
</style>
<style lang="less">
.opertion {
    .el-tabs__content {
        overflow: visible;
    }
    .el-dialog--center .el-dialog__footer {
        text-align: right;
    }
    .el-dialog--center .el-dialog__body {
      padding: 25px 25px 0px;
    }

}

</style>
