<!--
 * @Description: 
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2020-06-17 10:49:05
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-06-19 11:18:51
--> 
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "APP",
  data() {
    return {};
  }
};
</script>
<style lang="less">
@import "./style/common";
@font-face {
  font-family: "iconfont"; /* project id 1890392 */
  src: url("//at.alicdn.com/t/font_1890392_rstv6mrjja.eot");
  src: url("//at.alicdn.com/t/font_1890392_rstv6mrjja.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1890392_rstv6mrjja.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1890392_rstv6mrjja.woff") format("woff"),
    url("//at.alicdn.com/t/font_1890392_rstv6mrjja.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1890392_rstv6mrjja.svg#iconfont") format("svg");
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
.i-user:before {
  content: "\e606";
}
.i-account:before {
  content: "\e607";
}
.i-search:before {
  content: "\e61d";
}
.i-entrance:before {
  content: "\e600";
}
#app {
  width: 100vw;
  height: 100vh;
}
</style>
