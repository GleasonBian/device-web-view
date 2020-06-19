<!--
 * @Description: 
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2020-06-18 15:32:28
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-06-19 10:51:17
--> 
<template>
  <div>
    <gt-search :data="{key:'aaa',default: 0}" placeholder="请搜索" @handle="getdata"></gt-search>
    <div class>
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">选项一</mt-tab-item>
        <mt-tab-item id="2">选项二</mt-tab-item>
        <mt-tab-item id="3">选项三</mt-tab-item>
      </mt-navbar>

      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <mt-cell v-for="n in 10" :title="'内容 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-cell v-for="n in 4" :title="'测试 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <mt-cell v-for="n in 6" :title="'选项 ' + n" />
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "upkeep",
  data() {
    return {
      selected: false
    };
  },

  computed: {},

  methods: {
    getdata(val) {
      console.log(val);
    }
  },

  created() {},

  mounted() {},

  components: {}
};
</script>

<style scoped></style>
