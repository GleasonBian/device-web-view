<!--
 * @Description: 
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2020-06-18 13:38:39
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-06-19 14:39:36
--> 
<template>
  <div>
    <!-- 页面头部 -->
    <mt-header :title="$route.meta.title" v-if="header">
      <router-link to slot="left">
        <mt-button icon="back" @click="$router.back(-1);">返回</mt-button>
      </router-link>
      <mt-button v-show="more" icon="more" slot="right" @click="openAction"></mt-button>
      <!-- <mt-button icon="more" slot="right"></mt-button> -->
    </mt-header>
    <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>

    <!-- 路由出口 -->
    <div id="containter">
      <router-view></router-view>
    </div>

    <!-- 页面底部导航 -->
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
    <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      sheetVisible: false,
      path: "",
      more: false,
      actions: [
        {
          name: "新增",
          method: this.add
        }
      ],
      selected: true,
      header: true,
      navList: [
        { name: "消息", path: "message", icon: "i-menu-meg" },
        { name: "车辆监测", path: "dashboard", icon: "i-menu-pcm" },
        { name: "工作台", path: "workbench", icon: "i-menu-mac" },
        { name: "设置", path: "setting", icon: "i-menu-set" }
      ],
      sheetVisible: false
    };
  },

  computed: {},

  mounted() {
    this.setHeight();
    window.addEventListener("scroll", this.scrollHandle, true);
  },
  methods: {
    openAction() {
      this.sheetVisible = true;
    },
    add() {
      this.$router.push({ name: this.path });
    },
    recept(path) {
      this.path = path;
    },
    routerPush(link) {
      this.$router.push({ name: link });
    },
    setHeight() {
      let header = 0;
      if (document.getElementsByClassName("mint-header").length > 0)
        header = document.getElementsByClassName("mint-header")[0].clientHeight;
      let app = document.getElementById("app").clientHeight;
      let tabbar = document.getElementsByClassName("mint-tabbar")[0]
        .clientHeight;
      let containter = document.getElementById("containter");
      if (containter) containter.style.height = app - tabbar - header + "px";
    },
    scrollHandle() {
      let top = document.getElementById("containter").scrollTop;
      if (top > 40) {
        this.header = false;
        this.setHeight();
      } else this.header = true;
    }
  },
  watch: {
    $route: "setHeight"
  },
  created() {},
  components: {}
};
</script>

<style scoped>
#containter {
  overflow: auto;
  background-color: #f4f5f7;
}
.router_view {
  width: 100%;
  height: 100%;
  padding: 0px;
  margin: 0px;
}
</style>
