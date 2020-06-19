/*
 * @Description:
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2020-06-17 15:10:22
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-06-19 14:36:39
 */
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 防止 重复点击
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: (resolve) => require(["@/views/login.vue"], resolve),
    meta: {
      title: "中铁十二局三公司设备管理系统",
    },
  },
  {
    path: "*",
    name: "*",
    redirect: "/login",
  },
  {
    path: "/home",
    name: "home",
    component: (resolve) => require(["@/views/home.vue"], resolve),
    meta: {
      title: "中铁十二局三公司设备管理系统",
    },
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: (resolve) => require(["@/views/dashboard.vue"], resolve),
        meta: {
          title: "车辆监测",
          crumbs: ["车辆监测"],
        },
      },
      {
        path: "/setting",
        name: "setting",
        component: (resolve) => require(["@/views/setting.vue"], resolve),
        meta: {
          title: "设置",
          crumbs: ["设置"],
        },
      },
      {
        path: "/workbench",
        name: "workbench",
        component: (resolve) => require(["@/views/workbench.vue"], resolve),
        meta: {
          title: "工作台",
          crumbs: ["工作台"],
        },
      },
      {
        path: "/message",
        name: "message",
        component: (resolve) => require(["@/views/message.vue"], resolve),
        meta: {
          title: "消息",
          crumbs: ["消息"],
        },
      },
      {
        path: "/oilWwear",
        name: "oilWwear",
        component: (resolve) => require(["#/oilWwear.vue"], resolve),
        meta: {
          title: "油耗",
          crumbs: ["油耗"],
        },
      },
      {
        path: "/alarm",
        name: "alarm",
        component: resolve => require(["#/alarm.vue"], resolve),
        meta: {
          title: "告警",
          crumbs: ["油耗"],
        },
      },
      {
        path: "/assign",
        name: "assign",
        component: (resolve) => require(["@/components/assign.vue"], resolve),
        meta: {
          title: "调度计划",
          crumbs: ["油耗"],
        },
      },
      {
        path: "/fuelUP",
        name: "fuelUP",
        component: (resolve) => require(["#/fuelUP.vue"], resolve),
        meta: {
          title: "加油计划",
          crumbs: ["油耗"],
        },
      },
      {
        path: "/upkeep",
        name: "upkeep",
        component: (resolve) => require(["#/upkeep.vue"], resolve),
        meta: {
          title: "保养计划",
          crumbs: ["油耗"],
        },
      },
      {
        path: "/upkeepApply",
        name: "upkeepApply",
        component: (resolve) => require(["#/upkeepApply.vue"], resolve),
        meta: {
          title: "保养申请",
          crumbs: ["油耗"],
        },
      },
      {
        path: "/repair",
        name: "repair",
        component: (resolve) => require(["#/repair.vue"], resolve),
        meta: {
          title: "维修计划",
          crumbs: ["维修计划"],
        },
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
