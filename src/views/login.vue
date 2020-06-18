<!--
 * @Description: 
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2020-06-18 13:33:01
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-06-18 19:22:35
--> 
<template>
  <div class="login_containter">
    <div class="layout_top">
      <span class="layout_top_text">登&nbsp;&nbsp;录</span>
      <img src="~@/assets/timg.jpg" alt="logo" style="width:80px" class="layout_top_img" />
    </div>
    <div class="layout_bottom"></div>
    <div class="login_box">
      <div class="username">
        <div class="login_input">
          <i class="iconfont i-account"></i>
          <input class="input_box" v-model="userid" />
        </div>
      </div>
      <div class="password">
        <div class="login_input">
          <i class="iconfont i-user"></i>
          <input class="input_box" v-model="password" />
        </div>
      </div>
      <div class="info">{{info}}</div>
      <div class="button" @click="check">登&nbsp;&nbsp;&nbsp;录</div>
    </div>
    <!-- <button @click="$router.push({path:'/home'})">denglu</button> -->
  </div>
</template>

<script>
import { login } from "@/getData";
export default {
  name: "login",
  data() {
    return {
      userid: "",
      password: "",
      info: ""
    };
  },
  created() {},
  computed: {
    version() {
      let date = new Date().toLocaleDateString().replace(/\//g, "-");
      return "v 1.2.304 - " + date + " - " + "α 版";
    }
  },
  methods: {
    async check() {
      //获取值
      var name = this.userid;
      var password = this.password;
      if (name == "" || password == "") {
        this.info = "账号密码不能为空！";
        return;
      }

      let data = {
        userid: this.userid,
        password: this.password
      };
      const res = await login(data);
      if (res.data.code === 200) {
        sessionStorage.setItem("Authorization", res.data.Data);
        sessionStorage.setItem("username", this.userid);
        this.$router.push("home");
      } else this.info = "账号或密码错误!";
    }
  }
};
</script>

<style scoped>
.login_containter {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}
.layout_top {
  width: 100%;
  height: 45%;
  flex-direction: column;
  background-color: #53a7ff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.layout_top_img {
  margin-top: 12%;
}
.layout_bottom {
  width: 100%;
  height: 55%;
  background-color: #ffffff;
}
.login_box {
  width: 80%;
  height: 300px;
  position: absolute;
  top: 35%;
  margin: auto;
  background: #ffffff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.layout_top_text {
  font-size: 20px;
  color: #ffffff;
  margin-top: 20px;
  font-weight: 650;
  font-family: "Microsoft YaHei", 微软雅黑, "MicrosoftJhengHei", 华文细黑,
    STHeiti, MingLiu;
}
.button {
  color: #ffffff;
  background-color: #53a7ff;
  border-color: #eee;
  font-weight: 300;
  font-size: 20px;
  font-family: "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
    "Lucida Grande", sans-serif;
  text-decoration: none;
  text-align: center;
  line-height: 40px;
  padding: 0 40px;
  margin: 0;
  display: inline-block;
  cursor: pointer;
  border: none;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition-property: all;
  transition-property: all;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  border-radius: 200px;
  width: 90%;
  margin-top: 44px;
}
.username,
.password {
  width: 90%;
  height: 16%;
  border-bottom: 1px solid #efecec;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}
.info {
  height: 20px;
  width: 100%;
  position: relative;
  top: 10px;
  font-size: 15px;
  color: red;
  text-align: right;
  padding-right: 30px;
}
.username {
  margin-top: 0px;
}
.login_input {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
}
.input_box {
  width: 100%;
  height: 28px;
  line-height: 28px;
  padding-left: 20px;
  font-size: 15px;
}
</style>
