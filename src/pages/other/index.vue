<template>
  <view class="index">
    <text>{{ msg }}</text>
    <button @tap="goBack">返回</button>
  </view>
</template>

<script>
import Taro from '@tarojs/taro'
import { ref } from "vue";
import "./index.styl";

export default {
  name: "index",
  setup() {
    const msg = ref("Hello Other");
    const goBack = () => {
      Taro.navigateBack({
        delta: 1,
      });
      // Taro.switchTab({
      //   url: "/pages/index/index",
      // });
    };
    return {
      msg,
      goBack,
    };
  },
};
</script>
