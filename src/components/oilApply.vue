<!--
 * @Description: 维修计划
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2020-06-18 15:34:35
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-06-19 14:29:57
-->
<template>
  <div>
    <van-form @submit="onSubmit">
      <van-field
        readonly
        required
        clickable
        name="datetimePicker"
        :value="form.start"
        label="加油时间"
        placeholder="点击选择时间"
        @click="pickAddTime = true"
      />
      <van-popup v-model="pickAddTime" position="bottom">
        <van-datetime-picker
          v-model="currentDate"
          type="datetime"
          title="选择加油时间"
          :min-date="minDate"
          :max-date="maxDate"
          @confirm="confirmTime1"
          @cancel="showPicker = false"
        />
      </van-popup>
      <van-field
        readonly
        required
        clickable
        name="picker"
        :value="qeuipname"
        label="车辆名称"
        placeholder="选择车辆"
        :rules="[{ required: true, message: '请选择车辆' }]"
        @click="selEquip = true"
      />
      <van-popup v-model="selEquip" position="bottom">
        <van-picker show-toolbar :columns="eqData" @confirm="choseEqp" @cancel="selEquip = false" />
      </van-popup>
      <van-field
        readonly
        required
        clickable
        name="picker"
        :value="qeuipname"
        label="项目名称"
        placeholder="选择项目部"
        :rules="[{ required: true, message: '请选择项目部' }]"
        @click="selProj = true"
      />
      <van-popup v-model="selProj" position="bottom">
        <van-picker
          show-toolbar
          :columns="projData"
          @confirm="choseProj"
          @cancel="selProj = false"
        />
      </van-popup>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { equiSelect } from "@/getData";
export default {
  name: "repair",
  data() {
    return {
      qeuipname: "",
      form: {
        start: DateFormat(new Date())
      },
      pickAddTime: false,
      selEquip: false,
      selProj: false,
      eqData: [],
      minDate: new Date(1990, 0, 1),
      maxDate: new Date(2090, 10, 1),
      currentDate: new Date(),
      password: ""
    };
  },

  computed: {},

  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
    choseEqp(value, index) {
      this.form.qeuip = value.guid;
      this.qeuipname = value.text;
      this.selEquip = false;
    },
    choseProj(value, index) {
      this.form.qeuip = value.guid;
      this.qeuipname = value.text;
      this.selEquip = false;
    },
    async getEqList() {
      const res = await equiSelect();
      if (res.status === 200) {
        this.eqData = res.data;
        this.eqData.map(item => {
          item.text = item.name + " - " + item.plateno;
          item.value = item.guid;
        });
      }
    },
    confirmTime1() {
      this.form.start = DateFormat(this.currentDate);
      console.log(this.currentDate);
      this.pickAddTime = false;
    }
  },

  created() {},

  mounted() {
    this.getEqList();
  },

  components: {}
};
</script>

<style scoped></style>
