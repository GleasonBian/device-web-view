<!--
 * @Description: 保养申请 暂时废弃
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2020-06-19 14:24:59
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-06-22 10:48:49
--> 
<template>
  <div style="padding-top:10px">
    <van-form @submit="onSubmit">
      <!-- 保养单号 -->
      <van-field label="保养单号" name="code" placeholder="此项不需填写" v-model="form.code" readonly />

      <!-- 保养状态 -->
      <van-field
        readonly
        clickable
        name="state"
        :value="form.state"
        label="保养类型"
        placeholder="选择保养类型"
        @click="upkeepStatusPicker = true"
      />
      <van-popup v-model="upkeepStatusPicker" position="bottom">
        <van-picker
          show-toolbar
          :columns="upkeepStatus"
          @confirm="upkeepStatusHandle"
          @cancel="upkeepStatusPicker = false"
        />
      </van-popup>

      <!-- 保养状态 -->
      <van-field
        readonly
        clickable
        name="state"
        :value="form.state"
        label="保养状态"
        placeholder="选择保养状态"
        @click="upkeepStatusPicker = true"
      />
      <van-popup v-model="upkeepStatusPicker" position="bottom">
        <van-picker
          show-toolbar
          :columns="upkeepStatus"
          @confirm="upkeepStatusHandle"
          @cancel="upkeepStatusPicker = false"
        />
      </van-popup>

      <!-- 车牌号码 -->
      <van-field
        readonly
        clickable
        name="plateno"
        :value="form.plateno"
        label="车牌号码"
        placeholder="选择车牌号码"
        @click="plateno = true"
      />
      <van-popup v-model="plateno" position="bottom">
        <van-picker
          show-toolbar
          :columns="equiList"
          @confirm="platenoHandle"
          value-key="plateno"
          @cancel="plateno = false"
        />
      </van-popup>

      <!-- 车辆名称 -->
      <van-field v-model="form.name" name="name" label="车辆名称" placeholder="此项不需填写" readonly />

      <!-- 项目部 -->
      <van-field
        readonly
        clickable
        name="proname"
        :value="form.proname"
        label="项目部"
        placeholder="选择项目部"
        @click="proname = true"
      />
      <van-popup v-model="proname" position="bottom">
        <van-picker
          show-toolbar
          :columns="projList"
          @confirm="pronameHandle"
          value-key="name"
          @cancel="proname = false"
        />
      </van-popup>
      <van-field
        label="所属公司"
        name="superiorname"
        placeholder="此项不需填写"
        v-model="form.superiorname"
        readonly
      />
      <!-- 保养部门 -->
      <van-field
        readonly
        clickable
        name="repaname"
        :value="form.repaname"
        label="保养部门"
        placeholder="选择保养部门"
        @click="repaname = true"
      />
      <van-popup v-model="repaname" position="bottom">
        <van-picker
          show-toolbar
          :columns="deptList"
          @confirm="repanameHandle"
          value-key="name"
          @cancel="repaname = false"
        />
      </van-popup>

      <van-field
        readonly
        clickable
        name="time"
        :value="form.time"
        label="日历"
        placeholder="点击选择日期"
        @click="upkeepTime = true"
      />
      <van-calendar v-model="upkeepTime" @confirm="upkeepTimeHandle" />
      <van-field label="司机名称" name="driver" placeholder="请输入司机名称" v-model="form.driver" />
      <van-field label="司机长" name="driver_chief" placeholder="请输入司机长" v-model="form.driver_chief" />

      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>

    <!-- <mt-field label="车辆名称" placeholder="请输入车辆名称" type="password" v-model="form.车辆名称"></mt-field>
    <mt-field label="车牌号码" placeholder="车牌号码" type="tel" v-model="form.plateno"></mt-field>
    <mt-field label="项目名称" placeholder="请输入项目名称" type="url" v-model="form.proname"></mt-field>
    <mt-field label="所属公司" placeholder="请输所属公司" type="number" v-model="form.公司名称"></mt-field>
    <mt-field label="保养部门" placeholder="请输入保养部门" type="date" v-model="form.repaname"></mt-field>
    <mt-field label="保养时间" placeholder="请输入保养时间" type="date" v-model="form.time"></mt-field>
    <mt-field label="司机名称" placeholder="请输入司机名称" type="date" v-model="form.driver"></mt-field>
    <mt-field label="司机长" placeholder="请输入司机长" type="date" v-model="form.driver_chief"></mt-field>
    <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>-->
  </div>
</template>

<script>
//          type: "week",
//         guid: "", // 车辆guid
//         time: "", // 保养时间-
//         state: "", // 保养状态-
//         repair_dept: "", // 保养部门 guid-
//         company: "", // 公司 guid-
//         project_dept: "", // 项目部 guid-
//         driver_chief: "", // 司机长-
//         driver: "", // 司机-
import {
  getCompList, // 公司
  getDeptList, // 部门
  corpRank, // 项目部
  equiSelect // 设备
} from "@/getData";
export default {
  name: "upkeepApply",
  data() {
    return {
      form: {
        code: "",
        state: "",
        plateno: "",
        name: "",
        proname: "",
        superiorname: "",
        time: "",
        repaname: "",
        driver_chief: "",
        driver: ""
      },
      upkeepStatus: ["草稿", "审批中", "已通过", "已驳回(废弃)"], // 保养状态
      upkeepStatusPicker: false,
      plateno: false,
      proname: false,
      repaname: false,
      upkeepTime: false,
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
    onSubmit(values) {
      console.log("submit", values);
    },

    /*
     ** 保养状态 选择处理
     */
    upkeepStatusHandle(value) {
      this.form.state = value;
      this.upkeepStatusPicker = false;
    },

    /*
     ** 车牌号码 选择处理
     */
    platenoHandle(obj) {
      this.form.plateno = obj.plateno;
      this.form.name = obj.name;
      this.plateno = false;
    },

    /*
     ** 项目部 选择处理
     */
    pronameHandle(obj) {
      this.form.proname = obj.name;
      this.form.superiorname = obj.superiorname;
      this.proname = false;
    },

    /*
     ** 保养部门 选择处理
     */
    repanameHandle(obj) {
      this.form.repaname = obj.name;
      this.repaname = false;
    },

    /*
     ** 保养时间 选择处理
     */
    upkeepTimeHandle(val) {
      console.log(val);
      this.form.time = DateFormat(val);
      // this.form.repaname = obj.name;
      this.upkeepTime = false;
    }
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
</style>
