<!--
 * @Description: 
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2020-06-17 16:18:09
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-06-18 15:35:09
--> 
<template>
  <div class="work">
    <div class="work_itme" v-for="(item,index) in menu" :key="index">
      <div class="work_itme_title">
        <i
          class="iconfont i-menu-pcm work_itme_title_icon"
          :class="item.icon"
          style=" font-size: 36px;"
        ></i>
        {{item.title}}
      </div>
      <div class="work_itme_content">
        <router-link
          :to="submenu.to"
          class="work_itme_content_item"
          v-for="(submenu,index) in item.list"
          :key="index"
        >
          <i class="iconfont" :class="submenu.icon"></i>
          <span style="font-size:14px">{{submenu.name}}</span>
        </router-link>
        <!-- <div class="work_itme_content_item">
          <i class="iconfont i-menu-pcm"></i>
          <span>告警监测</span>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "workbench",
  data() {
    return {
      selected: true,
      navbarval: "",
      fixed: false,
      menu: [
        {
          title: "实时检测",
          icon: "i-menu-pcm",
          list: [
            { to: "oilWwear", name: "油耗监测", icon: "i-menu-pcm" },
            { to: "alarm", name: "告警监测", icon: "i-menu-pcm" }
          ]
        },
        {
          title: "作业管理",
          icon: "i-menu-pcm",
          list: [
            { to: "assign", name: "调度计划", icon: "i-menu-pcm" },
            { to: "fuelUP", name: "加油计划", icon: "i-menu-pcm" },
            { to: "upkeep", name: "保养计划", icon: "i-menu-pcm" },
            { to: "repair", name: "维修计划", icon: "i-menu-pcm" }
          ]
        }
      ]
    };
  },

  computed: {},

  methods: {},

  created() {},

  mounted() {},

  components: {}
};
</script>

<style scoped>
.work {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.work_itme {
  width: 100%;
  margin-top: 10px;
  background-color: #ffffff;
}

.work_itme_title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #cccccc;
}

.work_itme_content {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  /* padding: 10px 20px; */
}

.work_itme_title_icon {
  padding: 5px;
}

.work_itme_content_item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 0px;
  margin-left: 18px;
}
.work_itme:first-child {
  margin-top: 10px;
}
</style>

