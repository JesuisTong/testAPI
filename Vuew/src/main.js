import Vue from 'vue'
import VueRouter from 'vue-router';
import { Carousel, CarouselItem, Dropdown, DropdownMenu, DropdownItem } from 'element-ui';

Vue.use(VueRouter);
Vue.component(Carousel.name, Carousel);
Vue.component(CarouselItem.name, CarouselItem);
Vue.component(Dropdown.name, Dropdown);
Vue.component(DropdownMenu.name, DropdownMenu);
Vue.component(DropdownItem.name, DropdownItem);



const Index = () => import(/* webpackChunkName: "index" */ './View/App.vue');
const NotFound = () => import(/* webpackChunkName: "notfound" */ './View/notFound.vue');
const PixivImgs = () => import(/* webpackChunkName: "pixivImgs" */ './View/pixivImage.vue');


const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: NotFound },
    { path: '/index', component: Index },
    { path: '/pixiv', component: PixivImgs }
  ]
});

// console.log(router);

new Vue({
  router,
  template: `
    <div id="app">
      <!-- <h1>Basic</h1> -->  
      <router-view class="view"></router-view>
    </div>
  `
}).$mount('#app')
