<!--
 * @Description: 
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2020-06-17 16:18:39
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-06-19 14:02:18
-->
<template>
  <div>
    <ul
      class="wait-list"
      v-infinite-scroll="getData"
      infinite-scroll-disabled="moreLoading"
      infinite-scroll-distance="0"
      infinite-scroll-immediate-check="false"
    >
      <!--li数据遍历循环部分-->
      <li
        v-for="(item, index) in dataList"
        :key="index"
        @click="goDetails(index)"
        class="wait-list-items"
      >
        <router-link to="{name:assignTasks}" class="list-item" tag="div">
          <div class="title">
            {{ item.equipname + " ( " + item.plat_no + " ) " }}
            <span class="status">申请中</span>
          </div>
          <div class="content">
            <div>调令编号 : {{ item.code }}</div>
            <div>项目部名称 : {{ item.project_name }}</div>
            <div>开始时间 : {{ item.factstart }}</div>
            <div>结束时间 : {{ item.factstop }}</div>
            <div>工作任务数 : {{ item.tasknum }}</div>
            <div>当值司机 : {{ item.driver_name }}</div>
          </div>
          <i class="enter iconfont i-entrance"></i>
        </router-link>
      </li>
      <!--底部判断是加载图标还是提示“全部加载”-->
      <li class="wait-list-loading">
        <span v-show="moreLoading && !allLoaded">加载中...</span>
        <span v-show="allLoaded">已全部加载</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { assigndeSelect } from "@/getData";
export default {
  name: "assign",
  data() {
    return {
      dataList: [],
      moreLoading: false,
      allLoaded: false,
      pageno: 1, // 代表取第0条后的数据-从0开始
      pagesize: 10,
    };
  },

  computed: {},

  methods: {
    async getData() {
      if (this.allLoaded) {
        this.moreLoading = true;
        return;
      }
      this.moreLoading = true;
      let param = {
        pageno: this.pageno,
        pagesize: this.pagesize,
      };
      const res = await assigndeSelect({ param: param });
      if (res.status === 200) {
        this.dataList.push(...res.data.list);
        this.pagesize = res.data.pagesize;
        if (res.data.pageno * this.pagesize < res.data.total) {
          this.pageno++;
          this.moreLoading = false;
        } else {
          this.allLoaded = true;
          this.moreLoading = true;
        }
      }
    },
  },

  created() {},

  mounted() {
    this.getData();
  },
  destroyed() {},
  components: {},
};
</script>

<style lang="less" scoped></style>
