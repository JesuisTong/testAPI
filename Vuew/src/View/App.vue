<template>
  <div id="index">
    <topHeader :navList="navList" />
    <el-carousel height="500px">
      <el-carousel-item v-for="item in imgs" :key="item">
        <img class="carous" :src="item" alt="error" />
      </el-carousel-item>
    </el-carousel>
    <Footer />
  </div>
</template>

<script>
import topHeader from '../modules/header';
import topNavigator from '../modules/topNav';
import Footer from '../modules/footer';

export default {
  name: 'app',
  components: {
    topHeader,
    topNavigator,
    Footer
  },
  // created: function () {
  //   console.log(this.data);
  // },
  data: function () {
    return {
      imgs: ['../assets/company/IMG_4505.JPG', '../assets/company/IMG_4507.JPG', '../assets/company/IMG_4510.JPG', '../assets/company/IMG_4511.JPG'],
      navList: [
        {
          text: '运营管理',
          url: '/manage',
          children: [
            {
              text: '质量管理',
              url: '/manage/qualControl'
            },
            {
              text: '生产管理',
              url: '/manage/prodManagement'
            },
            {
              text: '环境管理',
              url: '/manage/envManage'
            },
            {
              text: '合作交流',
              url: '/manage/coorperation'
            }
          ]
        },
        {
          text: '产品中心',
          url: '/production',
          children: [
            {
              text: '产品①',
              url: ''
            },
            {
              text: '产品二',
              url: ''
            },
            {
              text: '产品开发',
              url: ''
            },
          ]
        },
        {
          text: '企业动态',
          url: '/develop',
          children: [
            {
              text: '企业发展',
              url: ''
            },
            {
              text: '企业文化',
              url: ''
            },
            {
              text: '行业新闻',
              url: ''
            },
          ]
        },
        {
          text: '联系我们',
          url: '/contact',
          children: [
            {
              text: '联系方式',
              url: ''
            }
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
