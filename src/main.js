/*
 * @Description: 
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2020-06-17 10:49:05
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-06-19 15:50:35
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
// 引入 mint UI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import Vant from 'vant';
import 'vant/lib/index.css';


Vue.config.productionTip = false
import { Indicator } from 'mint-ui'
import gtSearch from "@/common/gt-search";

// 使用 mint 
Vue.use(MintUI)
Vue.use(Vant);
Vue.component("gt-search", gtSearch);

/*
 ** 添加请求拦截器
 */
axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    Indicator.open({
      text: "加载中...",
      spinnerType: "fading-circle"
    });

    if (sessionStorage.getItem("Authorization") === null) {
      router.replace({
        path: "/"
      });
    }

    if (sessionStorage["Authorization"] === undefined)
      router.replace({
        path: "/"
      });
    else
      config.headers.common["Authorization"] = sessionStorage["Authorization"];

    return config;
  },
  function (error) {
    Indicator.close();
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

/*
 ** 添加响应拦截器
 */
axios.interceptors.response.use(
  function (response) {
    if ("Authorization" in response.headers)
      sessionStorage["Authorization"] = response.headers.Authorization;

    if (response.data.errorCode === 401) {
      message.error(response.data.message);
      router.replace({
        path: "/login"
      });
    }

    if (sessionStorage.getItem("Authorization") === null) {
      router.replace({
        path: "/login"
      });
    }

    Indicator.close();

    return response;
  },
  function (error) {
    console.log(error)
    Indicator.close();
    if (error.response.status >= 500) {
      // message.error("服务异常,稍后重试 !");
    } else if (error.response.status === 401) {
      router.replace({
        path: "/login"
      });
      // message.error("登录超时,请重新登录!");
    }
    return Promise.reject(error);
  }
);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
