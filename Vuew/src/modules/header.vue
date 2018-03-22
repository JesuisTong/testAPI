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
  </div>
</template>

<script>
export default {
  name: 'topHeader',
}
</script>

<style lang="scss" scoped>
  .header {
    width: 100%;
    height: 78px;
    margin: 0 auto;
    padding: 0 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #333;
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
  }
</style>


