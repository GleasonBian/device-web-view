<!--
 * @Description: 车辆保养计划
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2020-06-18 15:32:28
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-06-19 19:12:44
--> 
<template>
  <div>
    <gt-search :data="{key:'aaa',default: 0}" placeholder="请搜索" @handle="getdata"></gt-search>
    <div class>
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">全部</mt-tab-item>
        <mt-tab-item id="2">项目部</mt-tab-item>
        <mt-tab-item id="3">车辆名称</mt-tab-item>
        <mt-tab-item id="4">状态</mt-tab-item>
      </mt-navbar>

      <!-- tab-container -->
      <mt-tab-container v-model="selected" style="margin-top:10px">
        <mt-tab-container-item id="1">
          <div class="cell_container" @click="$router.push({name:'upkeepApply'})">
            <div class="cell_title">
              <span style="font-size:16px;">车辆名称 - 车牌号</span>
              <span>状态: 申请中</span>
            </div>
            <div class="cell_body">
              <div class="cell_body_item">
                <div>保养编号:{{23423423}}</div>
                <div>项目部:{{23423423}}</div>
                <div>保养部门:{{23423423}}</div>
                <div>保养人:{{23423423}}</div>
                <div>保养时间:{{23423423}}</div>
              </div>
              <div>
                <i class="iconfont i-entrance"></i>
              </div>
            </div>
          </div>
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

  created() {
    console.log(this.$parent.more);
    this.$parent.more = true;
    this.$parent.recept("upkeepApply");
  },

  mounted() {},

  components: {},
  destroyed() {
    this.$parent.more = false;
  }
};
</script>

<style scoped>
.cell_container {
  margin: 4px 6px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 5px;
  box-sizing: border-box;
}
.cell_title {
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  font-size: 18px;
}
.cell_title span:nth-child(2) {
  font-family: "PingFangSC-Regular", "PingFang SC";
  font-weight: 400;
  font-style: normal;
  font-size: 12px;
  color: #999999;
}
.cell_body {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  font-size: 14px;
  padding: 5px 10px;
}
.cell_body_item > div {
  color: #999999;
  padding: 2px 0px;
}
.cell_title,
.cell_body {
  width: 100%;
  box-sizing: border-box;
}
</style>
