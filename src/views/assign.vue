<!--
 * @Description: 
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2020-06-17 16:18:39
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-06-18 10:30:36
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
        <div class="list-item item-worknum">
          <mt-cell title="标题文字" is-link>
            <div>123</div>
          </mt-cell>
        </div>
      </li>
      <!--底部判断是加载图标还是提示“全部加载”-->
      <li class="wait-list-loading">
        <!-- <mt-spinner style="margin:0 auto;" type="snake" color="#00ccff" :size="30" v-show="moreLoading&&!allLoaded"></mt-spinner> -->
        <span v-show="moreLoading&&!allLoaded">加载中...</span>
        <span v-show="allLoaded">已全部加载</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { assigndeSelect } from "@/getData";
export default {
  name: "setting",
  data() {
    return {
      dataList: [],
      moreLoading: false,
      allLoaded: false,
      pageno: 1, // 代表取第0条后的数据-从0开始
      pagesize: 10
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
        pagesize: this.pagesize
      };
      const res = await assigndeSelect({ param: param });
      if (res.status === 200) {
        this.dataList = res.data.list;
        this.pagesize = res.data.pagesize;
        if (res.data.pageno * this.pagesize < res.data.total) {
          debugger;
          this.pageno++;
          this.moreLoading = false;
        } else {
          this.allLoaded = true;
          this.moreLoading = true;
        }
      }
    }
  },

  created() {},

  mounted() {
    this.getData();
  },

  components: {}
};
</script>

<style scoped></style>
