import Vue from 'vue'
import VueRouter from 'vue-router';
import { Main, Aside, Container, Carousel, CarouselItem, Dropdown, DropdownMenu, DropdownItem } from 'element-ui';
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
    { path: '/*', component: NotFound },
    { path: '/index', component: Index },
    { path: '/pixiv', component: PixivImgs },
    { path: '/production/index', component: Production }
  ]
});

// console.log(router);

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
        creatElement('router-view')
      ]
    );
  }
}).$mount('#app')
