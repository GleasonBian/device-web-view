<!--
 * @Description: 
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2020-06-17 10:49:05
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-06-18 10:23:25
--> 
<template>
  <div id="app">
    <router-view id="containter"></router-view>
    <mt-tabbar v-model="selected">
      <mt-tab-item
        v-for="(item,index) in navList"
        :key="item.path"
        :id="index"
        @click.native="routerPush(item.path)"
      >
        <i slot="icon" class="iconfont" :class="item.icon"></i>
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
        { name: "消息", path: "/dashboard", icon: "i-menu-meg" },
        { name: "车辆监测", path: "/message", icon: "i-menu-pcm" },
        { name: "工作台", path: "/workbench", icon: "i-menu-mac" },
        { name: "设置", path: "/setting", icon: "i-menu-set" }
      ]
    };
  },
  mounted() {},
  methods: {
    routerPush(link) {
      this.$router.push({ path: link });
    }
  }
};
</script>
<style lang="less">
@import "./style/common";
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
.iconfont {
  font-family: "iconfont" !important;
  font-style: normal;
  color: #888888;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 28px;
}
/* 菜单栏 图标 */
.i-menu-meg:before {
  content: "\e758";
}
.i-menu-pcm:before {
  content: "\e7d0";
}
.i-menu-mac:before {
  content: "\e75d";
}
.i-menu-set:before {
  content: "\e76c";
}
#app {
  width: 100vw;
  height: 100vh;
}
.router_view {
  width: 100%;
  height: 100%;
  padding: 0px;
  margin: 0px;
}
</style>
