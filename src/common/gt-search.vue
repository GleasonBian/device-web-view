<!--
 * @Description: 
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2020-06-19 09:27:03
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-06-19 10:46:43
--> 
<template>
  <div class="container">
    <div class="search_box">
      <i class="iconfont i-search" style="font-size: 18px; color: #d9d9d9;"></i>
      <input
        class="search_input"
        v-model="search[data.key]"
        :placeholder="placeholder"
        @focus="specifiName($event)"
      />
      <span
        @click="reset"
        style="color: #26a2ff; text-decoration: none; font-size:12px"
        v-if="showcancel"
      >取消</span>
    </div>
    <mt-button size="small" type="primary" @click="searchHandle">搜索</mt-button>
  </div>
</template>

<script>
export default {
  name: "gt-search",
  components: {},
  data() {
    return {
      search: {},
      showcancel: false
    };
  },
  props: {
    data: {
      type: Object,
      default: function() {
        return {};
      },
      require: true,
      validator: function(value) {
        return value;
      }
    },
    placeholder: {
      type: String,
      default: function() {
        return "请输入";
      },
      require: false
    }
  },
  computed: {},
  watch: {},
  methods: {
    searchHandle() {
      this.$emit("handle", this.search);
    },
    reset() {
      this.search[this.$props.data.key] = "";
      this.$emit("handle", this.search);
      this.showcancel = false;
    },
    specifiName(event) {
      this.showcancel = true;
    }
  },
  /**
   *
   * 生命周期
   *
   */
  created() {
    this.$set(
      this.search,
      this.$props.data.key,
      this.$props.data.default ? this.$props.data.default : ""
    );
  }
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px 10px;
  background-color: #d9d9d9;
  box-sizing: border-box;
}
.search_box {
  width: 78%;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  border-radius: 2px;
  height: 25px;
  padding: 4px 6px;
}
.search_input {
  border: 0;
  box-sizing: border-box;
  width: 80%;
  height: 100%;
  outline: 0;
  padding-left: 10px;
}
</style>
