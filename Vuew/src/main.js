import Vue from 'vue'
import VueRouter from 'vue-router';


Vue.use(VueRouter);

const Index = () => import(/* webpackChunkName: "index" */ './View/App.vue');
const NotFound = () => import(/* webpackChunkName: "notfound" */ './View/notFound.vue');

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: NotFound },
    { path: '/index', component: Index },
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
