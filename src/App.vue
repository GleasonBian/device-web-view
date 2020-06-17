<!--
 * @Description: 
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2020-06-17 10:49:05
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-06-17 14:45:14
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
  src: url("//at.alicdn.com/t/font_1890392_ce36tjlumia.eot");
  src: url("//at.alicdn.com/t/font_1890392_ce36tjlumia.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1890392_ce36tjlumia.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1890392_ce36tjlumia.woff") format("woff"),
    url("//at.alicdn.com/t/font_1890392_ce36tjlumia.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1890392_ce36tjlumia.svg#iconfont") format("svg");
}
/* 菜单栏 图标 */
.i-menu-one:before {
  content: "\e611;";
}
.i-menu-two:before {
  content: "\e69d;";
}
.i-menu-three:before {
  content: "\e63c;";
}
.i-menu-four:before {
  content: "\ea12;";
}
</style>
