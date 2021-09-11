// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import Router from "vue-router";

import App from "./App";
import Home from "./components/Home";
import Films from "./components/Films";
import Species from "./components/Species";
import People from "./components/People";

Vue.use(Router);

const routes = [
  { path: "/", component: Home },
  { path: "/people", component: People },
  { path: "/films", component: Films },
  { path: "/species", component: Species }
];

const router = new Router({
  routes,
  linkActiveClass: "active"
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
