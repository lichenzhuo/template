import Vue from "vue";
import VueRouter from "vue-router";
import layout from "../layout";
import dashboard from "../pages/dashboard";
import page1 from "../pages/page1";
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "layout",
      component: layout,
      children: [
        { path: "/", name: "dashboard", component: dashboard },
        { path: "/page1", name: "page1", component: page1 },
      ],
    },
  ],
});
export default router;
