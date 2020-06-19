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
        clickable
        name="datetimePicker"
        :value="form.start"
        label="时间选择"
        placeholder="点击选择时间"
        @click="pickAddTime = true"
      />
      <van-popup v-model="pickAddTime" position="bottom">
        <van-datetime-picker
          v-model="currentDate"
          type="datetime"
          title="选择完整时间"
          :min-date="minDate"
          :max-date="maxDate"
          @confirm="confirmTime1"
          @cancel="showPicker = false"
        />
      </van-popup>
      <van-field
        readonly
        clickable
        name="picker"
        :value="form.qeuip"
        label="车辆名称"
        placeholder="点击选车辆"
        @click="selEquip = true"
      />
      <van-popup v-model="selEquip" position="bottom">
        <van-picker
          show-toolbar
          :columns="columns"
          @confirm="choseEqp"
          @cancel="selEquip = false"
        />
      </van-popup>
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: "repair",
  data() {
    return {
      form: {
        start: DateFormat(new Date()),
      },
      pickAddTime: false,
      selEquip: false,
      columns: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
      password: "",
    };
  },

  computed: {},

  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
    choseEqp() {},
    confirmTime1() {
      this.form.start = DateFormat(this.currentDate);
      console.log(this.currentDate);
      this.pickAddTime = false;
    },
  },

  created() {},

  mounted() {},

  components: {},
};
</script>

<style scoped></style>
