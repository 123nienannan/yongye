<template>
<div class="systemRole">
  <div class="nav">
     <span>智慧停车</span>
      ->
     <span class="current">系统角色</span>
  </div>
      <el-button class="role" icon="el-icon-plus" @click="dialogVisible = true">角色</el-button>
      <div class="main">
        <el-table
          :header-cell-style="tableHeaderColor"
          :data="systemroleData"
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
            label="角色">
          </el-table-column>
          <el-table-column
            prop="address"
            align="center"
            label="操作">
            <template slot-scope="scope">
            <el-button class="parkuser_btn" @click="amenddialogVisible=true" type="text" size="small">维护</el-button>
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
          title="新增-角色"
          :visible.sync="dialogVisible"
          width="30%"
          center
          :before-close="handleClose">
          <el-row>
            <el-col :span="3"><div style="line-height:40px">角色名称:</div></el-col>
            <el-col :span="21">
              <el-input
                placeholder="请输入角色名称"
                v-model="filterText">
              </el-input>
            </el-col>
          </el-row>
          <el-tree
            :data="roletreeData"
            show-checkbox
            default-expand-all
            node-key="id"
            ref="tree"
            highlight-current
            :props="defaultProps">
          </el-tree>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
      </el-dialog>
      <!-- 修改方案弹框 -->
      <el-dialog
          title="维护-角色"
          :visible.sync="amenddialogVisible"
          width="30%"
          center
          :before-close="handleClose">
           <el-row>
            <el-col :span="3"><div style="line-height:40px">角色名称:</div></el-col>
            <el-col :span="21">
              <el-input
                placeholder="请输入角色名称"
                v-model="filterText">
              </el-input>
            </el-col>
          </el-row>
          <el-tree
            :data="roletreeData"
            show-checkbox
            default-expand-all
            node-key="id"
            ref="tree"
            highlight-current
            :props="defaultProps">
          </el-tree>
          <span slot="footer" class="dialog-footer">
            <el-button @click="amenddialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="amenddialogVisible = false">确 定</el-button>
          </span>
      </el-dialog>
</div>
</template>

<script>

export default {
  data() {
    return {
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      roletreeData:[{
         id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
      }],
      addForm: {
        name:''
      },
      amendForm: {
        name:''
      },
      filterText:'',
      dialogVisible: false,
      amenddialogVisible: false,
      systemroleData: [{
        data:1
      }],
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
.systemRole {
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
    .price {
      width: 60%;
    }
    .role {
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
.systemRole {
    .el-tabs__content {
        overflow: visible;
    }
    .el-dialog--center .el-dialog__footer {
        text-align: right;
    }
    .el-dialog--center .el-dialog__body {
      padding: 25px 25px 0px;
    }
    .el-tree {
      margin-top: 20px;
      padding-left: 65px;
    }
}
</style>
