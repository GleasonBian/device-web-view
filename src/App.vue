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
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

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
