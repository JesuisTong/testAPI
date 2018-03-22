<template>
  <div id="index">
    <!-- <topHeader /> -->
    <topNavigator v-bind="navList" />
    <el-carousel height="500px">
      <el-carousel-item v-for="item in imgs" :key="item">
        <img class="carous" :src="item" alt="error" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import topHeader from '../modules/header';
import topNavigator from '../modules/topNav';

export default {
  name: 'app',
  components: {
    topHeader,
    topNavigator
  },
  created: function () {
    console.log(this.data);
    // $.ajax({
    //   url: '//47.91.209.93:3001/api/rank/day',
    // }).done(res => {
    //   if (!res.next_url) return;
    //   console.log(this.data);
    // });
  },
  data: function () {
    return {
      imgs: ['../assets/Desktop/img1.jpg', '../assets/Desktop/img2.jpg'],
      navList: [
        {
          text: '1',
          url: '/xixi'
        },
        {
          text: '2',
          url: '/gaga'
        },
        {
          text: '3',
          url: '/yoyo'
        },
        {
          text: '4',
          url: '/fnfn'
        },
      ],
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
