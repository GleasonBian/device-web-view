<!--
 * @Description: 
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2020-06-17 10:49:05
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-06-17 14:55:31
--> 
<template>
  <div id="app">
    <router-view />
    <mt-tabbar v-model="selected">
      <mt-tab-item
        v-for="(item,index) in navList"
        :key="item.path"
        :id="index"
        @click="routerPush(item.path)"
      >
        <!-- <img slot="icon" src="assets/logo.png"/> -->
        {{item.name}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      selected: true,
      navList: [
        { name: "消息", path: "/dashboard", icon: "" },
        { name: "车辆监测", path: "/dashboard", icon: "" },
        { name: "工作台", path: "/dashboard", icon: "" },
        { name: "设置", path: "/dashboard", icon: "" }
      ]
    };
  },
  methods: {
    routerPush(link) {
      this.$router.push({ path: link });
    }
  }
};
</script>
<style>
@font-face {
  font-family: "iconfont"; /* project id 1890392 */
  src: url("//at.alicdn.com/t/font_1890392_v8lv246ga9.eot");
  src: url("//at.alicdn.com/t/font_1890392_v8lv246ga9.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1890392_v8lv246ga9.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1890392_v8lv246ga9.woff") format("woff"),
    url("//at.alicdn.com/t/font_1890392_v8lv246ga9.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1890392_v8lv246ga9.svg#iconfont") format("svg");
}
/* 菜单栏 图标 */
.i-menu-meg:before {
  content: "\e758;";
}
.i-menu-pcm:before {
  content: "\e7d0;";
}
.i-menu-mac:before {
  content: "\e75d;";
}
.i-menu-set:before {
  content: "\e76c;";
}
</style>
