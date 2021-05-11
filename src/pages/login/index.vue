<template>
  <view class="login">
    <text>{{ msg }}</text>
  </view>
</template>

<script>
import { ref } from 'vue'
import './index.styl'

export default {
  setup () {
    const msg = ref('Hello world')
    return {
      msg
    }
  }
}
</script>
