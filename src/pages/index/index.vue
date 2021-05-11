<template>
  <view class="index">
    <text>{{ msg }}</text>
    <button @tap="goToUser">跳转</button>
    <button @tap="goToOther">前进</button>
  </view>
</template>

<script>
import Taro from "@tarojs/taro";
import { ref } from "vue";
import "./index.styl";

export default {
  name: "index",
  setup() {
    const msg = ref("Hello world");
    const goToUser = () => {
      Taro.switchTab({
        url: "/pages/user/index",
      });
    };
    const goToOther = () => {
      Taro.navigateTo({
        url: "/pages/other/index",
      });
    };
    return {
      msg,
      goToUser,
      goToOther,
    };
  },
};
</script>
