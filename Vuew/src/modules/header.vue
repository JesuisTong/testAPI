<template>
  <div class="header">
    <router-link to="/">
      <div class="logo" />
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
      <el-dropdown v-for="i in navList" v-bind:key="i.text">
        <span class="el-dropdown-link dropd">
          {{ i.text }}
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item>双皮奶</el-dropdown-item>
          <el-dropdown-item>蚵仔煎</el-dropdown-item>
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
  methods: {
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
      background: red;
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
      }
    }
  }
</style>


