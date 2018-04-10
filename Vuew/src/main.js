import Vue from 'vue'
import VueRouter from 'vue-router';
import { Main, Aside, Container, Carousel, CarouselItem, Dropdown, DropdownMenu, DropdownItem } from 'element-ui';
import Header from 'modules/header';
import './global/main.scss';

Vue.use(VueRouter);
Vue.component(Carousel.name, Carousel);
Vue.component(CarouselItem.name, CarouselItem);
Vue.component(Dropdown.name, Dropdown);
Vue.component(DropdownMenu.name, DropdownMenu);
Vue.component(DropdownItem.name, DropdownItem);
Vue.component(Main.name, Main);
Vue.component(Aside.name, Aside);
Vue.component(Container.name, Container);



const Index = () => import(/* webpackChunkName: "View/index" */ './View/App.vue');
const NotFound = () => import(/* webpackChunkName: "View/notfound" */ './View/notFound.vue');
const PixivImgs = () => import(/* webpackChunkName: "View/pixivImgs" */ './View/pixivImage.vue');
const Production = () => import(/* webpackChunkName: "View/prodution" */ './View/production.vue');


const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/index', component: Index },
    { path: '/pixiv', component: PixivImgs },
    {
      path: '/production',
      component: Production,
      children: [
        {
          path: 'q',
          component: Production
        }
      ]
    },
    { path: '/*', component: NotFound },
  ]
});

const navList = [
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
]

new Vue({
  router,
  render(creatElement) {
    return creatElement(
      'div',
      {
        class: {
          root: true
        }
      },
      [
        creatElement(Header, {
          props: { navList }
        }),
        creatElement('router-view')
      ].filter(i => i)
    );
  }
}).$mount('#app')
