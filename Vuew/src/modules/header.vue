<template>
  <div class="header" :style="{ display: showHide ? 'block' : 'none' }">
    <router-link to="/">
      <div class="logo">
        亚创Logo
      </div>
    </router-link>
    <div class="nav">
      <ul class="navList">
        <li>
          <router-link to="/">
            <span>
              首页
            </span>
          </router-link>
        </li>
        <li>
          <router-link to="/about">
            <span>
              关于我们
            </span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="hoverBanner">
      <el-dropdown v-for="i in navList" v-bind:key="i.text" @command="handleCommand">
        <span class="el-dropdown-link dropd">
          {{ i.text }}
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="n in i.children" v-bind:key="n.text" :command="n.url">
              {{ n.text }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <!-- <router-link v-for="i in navList" v-bind:to="i.url" v-bind:key="i.text">
        <div class="nav">
          {{ i.text }}
        </div>
      </router-link> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'topHeader',
  props: ['navList'],
  data: function () {
    return {
      showHide: false
    };
  },
  created() {
    // 暴露在window下控制header显示
    window.handleHeader = this.handleHeader;
  },
  methods: {
    handleCommand(e) {
      this.$router.push({ path: e });
    },
    handleHeader() {
      this.showHide = !this.showHide;
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    width: 100%;
    // height: 78px;
    margin: 0 auto;
    padding: 0 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #333;
    position: relative;
    a {
      text-decoration: none;
      color: #fff;
    }
    .logo {
      height: 100%;
      width: 128px;
      color: aquamarine;
      font-size: 22px;
      line-height: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      // background-image: url('/assets/company/title.jpg');
      // background-size: cover;
      // background-position: center;
      // background-repeat: no-repeat;
    }
    .nav {
      height: 100%;
      margin-right: 20px;
      .navList {
        height: 100%;
        display: flex;
        flex-direction: row;
        li {
          height: 100%;
          width: 120px;
          line-height: 78px;
          color: #fff;
          list-style-type: none;
          text-align: center;
        }
      }
    }
    .hoverBanner {
      position: absolute;
      bottom: -50px;
      left: 0;
      z-index: 11;
      width: 100%;
      height: 50px;
      background: rgba($color: #eee, $alpha: .6);
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      .dropd {
        color: #23323a;
        cursor: pointer;
        position: relative;
        &:before {
          content: '';
          height: 50%;
          width: 1px;
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          &:last-child {
            display: none;
          }
        }
      }
      .d-nav {
        background: red;
        a {
          color: #eeeeee;
          text-decoration: none;
        }
      }
    }
  }
</style>


