<template>
  <div class="container m-auto">
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
