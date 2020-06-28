<!--
 * @Description: 保养申请 暂时废弃
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2020-06-19 14:24:59
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-06-22 16:47:53
--> 
<template>
  <div style="padding-top:10px;">
    <div class="gl-card">
      <div class="gl-card_header">
        <div style="padding:10px;border-bottom:1px solid #ebeef5; color: #303133;">车辆名称 + 车牌号码</div>
      </div>
      <div class="gl-card_body" style="padding:10px;">
        <div class="gl-card_body_item">
          <div class="gl-card_body_item_title">保养单号</div>
          <div class="gl-card_body_item_content">234234234</div>
        </div>
        <div class="gl-card_body_item">
          <div class="gl-card_body_item_title">保养类型</div>
          <div class="gl-card_body_item_content">234234234</div>
        </div>
        <div class="gl-card_body_item">
          <div class="gl-card_body_item_title">保养状态</div>
          <div class="gl-card_body_item_content">234234234</div>
        </div>
        <div class="gl-card_body_item">
          <div class="gl-card_body_item_title">项目部</div>
          <div class="gl-card_body_item_content">234234234</div>
        </div>
        <div class="gl-card_body_item">
          <div class="gl-card_body_item_title">所属公司</div>
          <div class="gl-card_body_item_content">234234234</div>
        </div>
        <div class="gl-card_body_item">
          <div class="gl-card_body_item_title">保养部门</div>
          <div class="gl-card_body_item_content">234234234</div>
        </div>
        <div class="gl-card_body_item">
          <div class="gl-card_body_item_title">司机名称</div>
          <div class="gl-card_body_item_content">234234234</div>
        </div>
        <div class="gl-card_body_item">
          <div class="gl-card_body_item_title">司机长</div>
          <div class="gl-card_body_item_content">234234234</div>
        </div>
      </div>
    </div>
    <van-cell-group title="保养内容">
      <van-cell title="车钩" arrow-direction value="未完成" @click="maskLayers" />
      <van-cell title="制动软管" arrow-direction value="未完成" @click="maskLayers" />
      <van-cell title="排障器" arrow-direction value="未完成" @click="maskLayers" />
      <van-cell title="脚踏板" arrow-direction value="未完成" @click="maskLayers" />
    </van-cell-group>
  </div>
</template>

<script>
import {
  getCompList, // 公司
  getDeptList, // 部门
  corpRank, // 项目部
  equiSelect // 设备
} from "@/getData";
export default {
  name: "upkeepTask",
  data() {
    return {
      content: [
        {
          title: "车钩",
          inspect: true,
          content: [{}]
        }
      ],
      compList: [], // 公司列表
      projList: [], // 项目部列表
      deptList: [], // 部门列表
      equiList: [] // 设备列表
    };
  },

  computed: {},

  methods: {
    /**
     ** 公司列表
     */
    async getCompList() {
      const res = await getCompList();
      this.compList = res.data;
    },

    /**
     ** 部门列表
     */
    async getDeptList() {
      const res = await getDeptList();
      this.deptList = res.data;
    },

    /**
     ** 项目部列表
     */
    async getProjList() {
      const res = await corpRank({ id: 3 });
      this.projList = res.data;
    },

    /*
     ** 设备列表
     */
    async getEquiList() {
      const res = await equiSelect();
      this.equiList = res.data;
    },

    /*
     ** 提交
     */
    onSubmit(values) {
      console.log("submit", values);
    },

    /*
     ** 提交
     */
    maskLayers() {}
  },

  created() {
    this.getCompList();
    this.getDeptList();
    this.getProjList();
    this.getEquiList();
  },

  mounted() {},

  components: {}
};
</script>

<style scoped>
.gl-card {
  border-radius: 4px;
  border: 1px solid #ebeef5;
  background-color: #fff;
  overflow: hidden;
  color: #303133;
  transition: 0.3s;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.gl-card_body_item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-bottom: 8px;
}

.gl-card_body_item_title {
  width: 80px;
  color: #606266;
  font-size: 15px;
}

.gl-card_body_item_title:after {
  content: "：";
}

.gl-card_body_item_content {
  font-size: 14px;
  color: #606266;
}

.van-doc-demo-block__title {
  margin: 0;
  padding: 32px 16px 16px;
  color: rgba(69, 90, 100, 0.6);
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
}
</style>
