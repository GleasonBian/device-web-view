<!--
 * @Description: 
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2020-06-17 15:10:22
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-06-18 14:15:41
--> 
<template>
  <div>
    <mt-navbar v-model="selected" :fixed="fixed" :value="navbarval">
      <mt-tab-item id="1">选项一</mt-tab-item>
      <mt-tab-item id="2">选项二</mt-tab-item>
      <mt-tab-item id="3">选项三</mt-tab-item>
    </mt-navbar>
    <mt-cell title="标题文字" value="说明文字" style="margin:10px 0px"></mt-cell>
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell v-for="n in 10" :title="'内容' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" :title="'测试' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 6" :title="'选项' + n" />
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
export default {
  name: "dashboard",
  data() {
    return {
      selected: true,
      navbarval: "",
      fixed: false
    };
  }
};
</script>
