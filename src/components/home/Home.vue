<template>
<div class="home">
  <el-container class="wapper">
    <el-header class="header" style="height:76px;">
      <div class="top_title">永业公寓</div>
      <div class="top_right">
        <div class="right_icon"><img src=""></div>
        <div class="right_title">停车后台管理系统</div>
        <div class="right_info">
          <div class="info_pic"><img src=""></div>
          <el-dropdown @command="handleCommand" trigger="click">
                  <span class="el-dropdown-link">
                    男男<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item command='1'>个人中心</el-dropdown-item>
                      <el-dropdown-item command='2'>退出</el-dropdown-item>
                    </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </el-header>
    <el-container>
      <el-aside width="166px" class="aside">
         <div class="aside_content">
           <h2 @click="showMoulde = !showMoulde" :class="{current:showMoulde}">
             <img src="../../assets/images/icon-park.png">
              &nbsp;智慧停车&nbsp;
              <i :class="{'el-icon-caret-bottom':!showMoulde,'el-icon-caret-top':showMoulde}"></i>
           </h2>
           <transition name="fade">
             <ul v-if="showMoulde">
                <li>
                  <router-link :to="{name: 'Allscan'}">
                    <i class="side_icon icon-allScan"></i>
                    <span class="side_text">总览</span>
                  </router-link>
                </li>
                <li>
                  <router-link :to="{name: 'Parkuser'}" :class="{'show-hignlight':status}">
                    <i class="side_icon icon-vip"></i>
                    <span class="side_text">停车用户</span>
                  </router-link>
                </li>
                <li>
                  <router-link :to="{name: 'Opertion'}">
                    <i class="side_icon icon-maint"></i>
                    <span class="side_text">运维管理</span>
                  </router-link>
                </li>
                <li>
                  <router-link :to="{name: 'Dataexcle'}">
                    <i class="side_icon icon-report"></i>
                    <span class="side_text">数据报表</span>
                  </router-link>
                </li>
             </ul>
           </transition>
         </div>
          <div class="aside_content">
           <h2 @click="showMouldeTwo = !showMouldeTwo" :class="{current:showMouldeTwo}">
             <img src="../../assets/images/icon-system.png">
              &nbsp;系统设置&nbsp;
              <i :class="{'el-icon-caret-bottom':!showMouldeTwo,'el-icon-caret-top':showMouldeTwo}"></i>
           </h2>
           <transition name="fade">
             <ul v-if="showMouldeTwo">
                <li>
                  <router-link :to="{name: 'Systemuser'}" :class="{'showsystemuser-hignlight':systemstatus}">
                    <i class="side_icon icon-systemUser"></i>
                    <span class="side_text">系统用户</span>
                  </router-link>
                </li>
                <li>
                  <router-link :to="{name: 'Systemcompany'}" :class="{'showsystemcompany-hignlight':systemcompanystatus}">
                    <i class="side_icon icon-systemCompany"></i>
                    <span class="side_text">系统公司</span>
                  </router-link>
                </li>
                <li>
                  <router-link :to="{name: 'Systemrole'}">
                    <i class="side_icon icon-systemRole"></i>
                    <span class="side_text">系统角色</span>
                  </router-link>
                </li>
                <li>
                  <router-link :to="{name: 'Parkdevice'}" :class="{'parkdevice-hignlight':devicestatus}">
                    <i class="side_icon icon-parkDevice"></i>
                    <span class="side_text">停车设备</span>
                  </router-link>
                </li>
             </ul>
           </transition>
         </div>
      </el-aside>
      <el-main>
        <!-- 所有子路由的出口 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</div>
</template>

<script>
export default {
    data () {
      return {
        showMoulde:true,
        showMouldeTwo:false,
      }
    },
    computed: {
      status () {
       return this.$store.state.nowVal
      },
      systemstatus () {
        return this.$store.state.changeVal
      },
      systemcompanystatus () {
        return this.$store.state.systemcompanyVal
      },
      devicestatus () {
        return this.$store.state.deviceVal
      }
    },
    watch: {
      '$route':'isTab',
      showMoulde:function(newval) {
        if(newval) {
          this.showMouldeTwo = false
        }
      },
      showMouldeTwo:function(newval) {
         if(newval) {
          this.showMoulde = false
        }
      }
    },
    created() {
      this.isTab()
    },
    mounted() {

    },
    methods: {
      handleCommand (command) {
         if(command == 1) {
          this.$router.push({name:'personInfo'})
         }
      },

      isTab() {
          if(this.$route.name == 'Adduser' || this.$route.name == 'amendUser' || this.$route.name == 'keepMonth') {
           this.$store.commit('changeStatus')
          }else {
            this.$store.commit('keepNative')
          }

          if(this.$route.name == 'addsystemUser' || this.$route.name == 'amendsystemUser') {
           this.$store.commit('changesyatemStatus')
          }else {
            this.$store.commit('keepsystemNative')
          }

          if(this.$route.name == 'addsystemCompany' || this.$route.name == 'amendsystemCompany') {
           this.$store.commit('changesyatemcompanyStatus')
          }else {
            this.$store.commit('keepsystemcompanyNative')
          }
          if(this.$route.name == 'addBind' || this.$route.name == 'keepBind' ||
            this.$route.name == 'addshowScreen' || this.$route.name == 'keepshowScreen' ||
            this.$route.name == 'addBallot' || this.$route.name == 'keepBallot' ||
            this.$route.name == 'addGuidance' || this.$route.name == 'keepGuidance' ||
            this.$route.name == 'addcarCamera' || this.$route.name == 'keepcarCamera' ||
            this.$route.name == 'addCamera' || this.$route.name == 'keepCamera' ||
            this.$route.name == 'keepGate' || this.$route.name == 'addGate' ||
            this.$route.name == 'addAlleyway' || this.$route.name == 'keepAlleyway' ||
            this.$route.name == 'keepScreen' || this.$route.name == 'addScreen' ||
            this.$route.name == 'keepMechanical' || this.$route.name == 'addMechanical' ||
            this.$route.name == 'addcarSeat' || this.$route.name == 'keepcarSeat' ||
            this.$route.name == 'addmonitorRegion' ||  this.$route.name == 'keepmonitorRegion' ||
            this.$route.name == 'monitorMap' || this.$route.name == 'addGarage' ||
            this.$route.name == 'mapPark' || this.$route.name == 'keepGarage'
            || this.$route.name=='addregionGarage' || this.$route.name=='keepregionGarage') {
            this.$store.commit('changedevice')
            }else {
              this.$store.commit('keepdevice')
            }

          if(this.$route.name == 'addBind' || this.$route.name == 'keepBind' ||
            this.$route.name == 'addshowScreen' || this.$route.name == 'keepshowScreen' ||
            this.$route.name == 'addBallot' || this.$route.name == 'keepBallot' ||
            this.$route.name == 'addGuidance' || this.$route.name == 'keepGuidance' ||
            this.$route.name == 'addcarCamera' || this.$route.name == 'keepcarCamera' ||
            this.$route.name == 'addCamera' || this.$route.name == 'keepCamera' ||
            this.$route.name == 'keepGate' || this.$route.name == 'addGate' ||
            this.$route.name == 'addAlleyway' || this.$route.name == 'keepAlleyway' ||
            this.$route.name == 'keepScreen' || this.$route.name == 'addScreen' ||
            this.$route.name == 'keepMechanical' || this.$route.name == 'addMechanical' ||
            this.$route.name == 'addcarSeat' || this.$route.name == 'keepcarSeat' ||
            this.$route.name == 'keepmonitorRegion' || this.$route.name == 'addmonitorRegion' ||
            this.$route.name == 'mapPark' || this.$route.name == 'keepregionGarage' ||
            this.$route.name == 'addregionGarage' ||
            this.$route.name == 'keepGarage' || this.$route.name == 'addGarage' ||
            this.$route.name == 'amendsystemCompany' || this.$route.name == 'addsystemCompany' ||
            this.$route.name == 'amendsystemUser' || this.$route.name == 'Systemuser' ||
            this.$route.name == 'Systemcompany' || this.$route.name == 'addsystemUser' ||
            this.$route.name == 'Systemrole' || this.$route.name == 'Parkdevice') {
              this.showMouldeTwo = true
              this.showMoulde = false
          }
          if(this.$route.name == 'personInfo') {
              this.showMouldeTwo = false
              this.showMoulde = false
          }
      }
    }
}
</script>

<style lang="less" scoped>
.home {
  width: 100vm;
  height: 100vh;
  .wapper {
    height: 100%;
    .header {
      padding: 0;
      height: 76px;
      display: flex;
      .top_title {
        width: 166px;
        height: 76px;
        line-height: 76px;
        text-align: center;
        background-color: #181b1d;
        letter-spacing: 1px;
        font-size: 24px;
	      color: #fba128;
      }
      .top_right {
        padding: 0 40px 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex: 1;
        background-color: #292d30;
        height: 76px;
        .right_icon {
          border: 1px solid red;
          width: 24px;
          height: 17px;
          img {
            width: 100%;
          }
        }
        .right_title {
          letter-spacing: 3px;
          color: #fba128;
          font-size: 24px;
        }
        .right_info {
          display: flex;
          .info_pic {
            width: 36px;
            height: 36px;
            overflow: hidden;
            border-radius: 50%;
            border: 1px solid red;
            margin-right: 10px;
            img {
              width: 100%;
            }
          }
        }
        .el-dropdown {
          padding-top: 10px;
          color: #fff;
          letter-spacing: 2px;
          font-size: 12px;
        }
      }
    }
  }
  .aside {
    background-color: #292d30;
    overflow: hidden;
    .el-menu {
      width: 100%;
    }
    .aside_content {
      h2 {
        width: 166px;
        height: 80px;
        text-align: center;
        line-height: 80px;
        border-left:6px solid transparent;
        font-size: 16px;
        box-sizing: border-box;
        color: #fff;
        &.current {
          background-color: #23272b;
          border-left:6px solid #fba128;
        }
        img {
          width: 30px;
          height: 30px;
          vertical-align: middle;
        }
      }
      li {
        width: 166px;
        height: 60px;
        a {
          padding-left: 55px;
          display: flex;
          align-items: center;
          width: 100%;
          height: 100%;
          color: #fff;
          font-size: 14px;
          text-decoration: none;
          &.parkdevice-hignlight {
            .icon-parkDevice {
              background: url("../../assets/images/icon-parkdevice-active.png") no-repeat;
            }
            background-color: #191c20;
            border-radius: 30px 0px 0px 30px;
            box-sizing: border-box;
            color: #fba128;
          }
          &.showsystemcompany-hignlight {
            .icon-systemCompany {
              background: url("../../assets/images/icon-systemcompany-active.png") no-repeat;
            }
              background-color: #191c20;
              border-radius: 30px 0px 0px 30px;
              box-sizing: border-box;
              color: #fba128;
          }
          &.show-hignlight {
            .icon-vip {
               background: url("../../assets/images/icon-vip-active.png") no-repeat;
            }
            background-color: #191c20;
            border-radius: 30px 0px 0px 30px;
            box-sizing: border-box;
            color: #fba128;
          }
          &.showsystemuser-hignlight {
              .icon-systemUser {
                background: url("../../assets/images/icon-systemuser-active.png") no-repeat;
              }
              background-color: #191c20;
              border-radius: 30px 0px 0px 30px;
              box-sizing: border-box;
              color: #fba128;
          }
          &.router-link-active {
            background-color: #191c20;
            border-radius: 30px 0px 0px 30px;
            box-sizing: border-box;
            color: #fba128;
          .icon-allScan {
            background: url("../../assets/images/icon-pandect-active.png") no-repeat;
          }
          .icon-vip {
            background: url("../../assets/images/icon-vip-active.png") no-repeat;
          }
          .icon-maint {
            background: url("../../assets/images/icon-maint-active.png") no-repeat;
          }
          .icon-report {
            background: url("../../assets/images/icon-report-active.png") no-repeat;
          }
          .icon-systemUser {
            background: url("../../assets/images/icon-systemuser-active.png") no-repeat;
          }
          .icon-systemCompany {
            background: url("../../assets/images/icon-systemcompany-active.png") no-repeat;
          }
          .icon-systemRole {
            background: url("../../assets/images/icon-systemrole-active.png") no-repeat;
          }
          .icon-vocation {
            background: url("../../assets/images/icon-vocation-active.png") no-repeat;
          }
          .icon-parkDevice {
            background: url("../../assets/images/icon-parkdevice-active.png") no-repeat;
          }
          }
        }
         .side_icon {
            background-size: cover;
            width: 30px;
            height: 30px;
          }
          .icon-systemUser {
            background: url("../../assets/images/icon-systemuser.png") no-repeat;
          }
          .icon-systemCompany {
            background: url("../../assets/images/icon-systemcompany.png") no-repeat;
          }
          .icon-systemRole {
            background: url("../../assets/images/icon-systemrole.png") no-repeat;
          }
          .icon-vocation {
            background: url("../../assets/images/icon-vocation.png") no-repeat;
          }
          .icon-parkDevice {
            background: url("../../assets/images/icon-parkdevice.png") no-repeat;
          }
          .icon-allScan {
            background: url("../../assets/images/icon-pandect.png") no-repeat;
          }
          .icon-vip {
            background: url("../../assets/images/icon-vip.png") no-repeat;
          }
          .icon-maint {
            background: url("../../assets/images/icon-maint.png") no-repeat;
          }
          .icon-report {
            background: url("../../assets/images/icon-report.png") no-repeat;
          }
          .side_text {
            padding-left: 4px;
          }
      }
    }
  }
  .el-main {
    padding: 0;
    overflow-y: scroll;
    background-color: #eee;
  }
}
</style>
<style>
.fade-enter-active, .fade-leave-active {
  /* transition: opacity .7s; */
  transition: all .2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transition: all .2s;
}
</style>
