import Vue from "vue";
import VueRouter from "vue-router";

import Main from "../views/Main";
import Login from "../views/Login";
import Search from "../views/Search";

// 导入404页面
import NotFound from '../views/404';
Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes:[
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/main/:msg',
      name: '/main',
      component: Main,
      props: true
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '*',
      component: NotFound
    }
  ]
});

