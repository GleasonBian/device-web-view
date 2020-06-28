<!--
 * @Description: 
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2020-06-18 15:21:21
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-06-22 15:46:18
-->
<template>
  <div>
    <van-dropdown-menu>
      <van-dropdown-item title="全部" :options="all" @change="getData('new')" />
      <van-dropdown-item
        title="项目部"
        v-model="form.proj_deptid"
        :options="projDepts"
        @change="getData('new')"
      />
      <van-dropdown-item
        title="车辆名称"
        v-model="form.equip"
        :options="equipList"
        @change="getData('new')"
      />
      <van-dropdown-item
        title="状态"
        v-model="form.equip"
        :options="stateList"
        @change="getData('new')"
      />
    </van-dropdown-menu>
    <ul
      class="wait-list"
      v-infinite-scroll="getData"
      infinite-scroll-disabled="moreLoading"
      infinite-scroll-distance="0"
      infinite-scroll-immediate-check="false"
    >
      <!--li数据遍历循环部分-->
      <li v-for="(item, index) in dataList" :key="index" class="wait-list-items">
        <router-link :to="{name:'upkeepTask',query:{id:'23423423'}}" class="list-item" tag="div">
          <div class="title">
            {{ item.equipname + " ( " + item.plant_no + " ) " }}
            <span
              class="status"
            >{{ item.apply_state }}</span>
          </div>
          <div class="content">
            <div>加油申请编号 : {{ item.code }}</div>
            <div>项目部名称 : {{ item.project_name }}</div>
            <div>计划维修时间 : {{ item.planstart }}</div>
            <div>申请部门 : {{ item.deptnamesched }}</div>
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
import { fixList, equiSelect, corpRank, maintains } from "@/getData";
export default {
  name: "upkeep",
  data() {
    return {
      form: {
        proj_deptid: "",
        equip: "",
        state: ""
      },
      all: [{ text: "全部", value: "" }],
      projDepts: [{ text: "全部", value: "1" }],
      equipList: [{ text: "全部", value: "" }],
      stateList: [
        { text: "全部", value: "1" },
        { text: "已完成", value: "已完成" },
        { text: "未完成", value: "未完成" }
      ],
      dataList: [],
      moreLoading: false,
      allLoaded: false,
      pageno: 1, // 代表取第0条后的数据-从0开始
      pagesize: 10
    };
  },

  computed: {},

  methods: {
    async getData(getNew) {
      if (getNew) {
        this.pagesize = 10;
        this.pageno = 1;
        this.dataList = [];
      } else {
        if (this.allLoaded) {
          this.moreLoading = true;
          return;
        }
      }

      this.moreLoading = true;
      let param = this.form;
      param.pageno = this.pageno;
      param.pagesize = this.pagesize;

      const res = await maintains({ param: param });
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
    async getEqList() {
      const res = await equiSelect();
      if (res.status === 200) {
        res.data.map(item => {
          item.text = item.name + " - " + item.plateno;
          item.value = item.guid;
        });
        this.equipList.push(...res.data);
      }
    },
    async getProjList() {
      const res = await corpRank({ id: 3 });
      if (res.status === 200) {
        res.data.map(item => {
          item.text = item.name;
          item.value = item.guid;
        });
        this.projDepts.push(...res.data);
      }
    }
  },

  created() {
    this.$parent.more = true;
    this.$parent.recept("oilApply");
  },

  mounted() {
    this.getData();
    this.getEqList();
    this.getProjList();
  },
  destroyed() {
    this.$parent.more = false;
  },
  components: {}
};
</script>

<style scoped></style>
