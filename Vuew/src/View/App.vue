<template>
  <div id="index">
    <topHeader :navList="navList" />
    <!-- <topNavigator v-bind="navList" /> -->
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
          text: '运营管理',
          url: '/manage',
          children: [
            {
              text: '',
              url: ''
            },
            {
              text: '',
              url: ''
            },
            {
              text: '',
              url: ''
            },
          ]
        },
        {
          text: '产品中心',
          url: '/production',
          children: [
            {
              text: '',
              url: ''
            },
            {
              text: '',
              url: ''
            },
            {
              text: '',
              url: ''
            },
          ]
        },
        {
          text: '企业动态',
          url: '/nouvelle',
          children: [
            {
              text: '',
              url: ''
            },
            {
              text: '',
              url: ''
            },
            {
              text: '',
              url: ''
            },
          ]
        },
        {
          text: '人才招聘',
          url: '/recruiter',
          children: [
            {
              text: '',
              url: ''
            },
            {
              text: '',
              url: ''
            },
            {
              text: '',
              url: ''
            },
          ]
        },
        {
          text: '联系我们',
          url: '/contact',
          children: [
            {
              text: '',
              url: ''
            },
            {
              text: '',
              url: ''
            },
            {
              text: '',
              url: ''
            },
          ]
        }
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
