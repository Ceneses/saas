<template>
  <div class="container">
    <HeaderPart />
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderPart from "@/components/HeaderPart";

export default {
  components: {
    HeaderPart,
  },
};
</script>

<style lang="scss" scoped></style>
