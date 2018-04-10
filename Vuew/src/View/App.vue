<template>
  <div id="index">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in imgs" :key="item">
        <img class="carous" :src="item" alt="error" />
      </el-carousel-item>
    </el-carousel>
    <Footer />
  </div>
</template>

<script>
import Footer from 'modules/footer';

export default {
  name: 'app',
  components: {
    Footer
  },
  data: function () {
    return {
      imgs: ['../assets/company/IMG_4505.JPG', '../assets/company/IMG_4507.JPG', '../assets/company/IMG_4510.JPG', '../assets/company/IMG_4511.JPG'],
      msg: 'Welcome to Your Vue.js App'
    };
  }
}
</script>

<style lang='scss' scoped>
  #index {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    ul {
      list-style-type: none;
      padding: 0;
      li {
        display: inline-block;
        margin: 0 10px;
        a {
          color: #42b983;
        }
      }
    }
    .el-carousel__item {
      .carous {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
