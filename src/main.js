import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import store from './vuex/store'
import Vuex from 'vuex'
import routes from './routes'
import Mock from './mock'
import iView from 'iview'
// import axios from 'axios';
import axios from "./http/api";
// Mock data for Login
//Mock.bootstrap();

import 'font-awesome/css/font-awesome.min.css'
import 'element-ui/lib/theme-default/index.css'
import 'iview/dist/styles/iview.css'

//import icon
import "./assets/icon/iconfont.css"

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(iView);
Vue.use(axios);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    sessionStorage.removeItem('user');
  }
  let user = JSON.parse(sessionStorage.getItem('user'));
  if (!user && to.path != '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
});

new Vue({
  //el: '#app',
  //template: '<App/>',
  router,
  store,
  //components: { App }
  render: h => h(App)
}).$mount('#app');

