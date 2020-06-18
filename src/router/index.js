/*
 * @Description: 
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2020-06-17 15:10:22
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-06-18 10:38:45
 */
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [

  {
    path: "/dashboard",
    name: "dashboard",
    component: resolve => require(["@/views/dashboard.vue"], resolve),
  },
  {
    path: "/setting",
    name: "setting",
    component: resolve => require(["@/views/setting.vue"], resolve),
  },
  {
    path: "/workbench",
    name: "workbench",
    component: resolve => require(["@/views/workbench.vue"], resolve),
  },
  {
    path: "/message",
    name: "message",
    component: resolve => require(["@/views/message.vue"], resolve),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
