<!--
 * @Description: 保养申请
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2020-06-19 14:24:59
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-06-19 15:54:09
--> 
<template>
  <div>
    <van-button type="default">默认按钮</van-button>
    <mt-field label="保养单号" placeholder="保养单号" v-model="form.code"></mt-field>
    <mt-field label="保养状态" placeholder="请输入保养状态" type="text" v-model="form.state"></mt-field>
    <mt-field label="车辆名称" placeholder="请输入车辆名称" type="password" v-model="form.车辆名称"></mt-field>
    <mt-field label="车牌号码" placeholder="车牌号码" type="tel" v-model="form.plateno"></mt-field>
    <mt-field label="项目名称" placeholder="请输入项目名称" type="url" v-model="form.proname"></mt-field>
    <mt-field label="所属公司" placeholder="请输所属公司" type="number" v-model="form.公司名称"></mt-field>
    <mt-field label="保养部门" placeholder="请输入保养部门" type="date" v-model="form.repaname"></mt-field>
    <mt-field label="保养时间" placeholder="请输入保养时间" type="date" v-model="form.time"></mt-field>
    <mt-field label="司机名称" placeholder="请输入司机名称" type="date" v-model="form.driver"></mt-field>
    <mt-field label="司机长" placeholder="请输入司机长" type="date" v-model="form.driver_chief"></mt-field>
    <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
  </div>
</template>

<script>
export default {
  name: "upkeepApply",
  data() {
    return {
      form: {
        code: "保养记录编号",
        state: "保养状态",
        plateno: "车牌号码",
        proname: "项目部",
        time: "保养时间",
        repaname: "保养部门",
        driver_chief: "司机长",
        driver: "司机"
      }
    };
  },

  computed: {},

  methods: {
    onValuesChange() {
      console.log(121312);
    }
  },

  created() {},

  mounted() {},

  components: {}
};
</script>

<style scoped>
</style>
