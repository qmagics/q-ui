<template>
  <div class="page page-component">
    <aside class="page-aside page-aside--left">
      
    </aside>
    <main class="page-main">
      <router-view></router-view>
    </main>
    <aside class="page-aside page-aside--right">
      <p v-for="i in 100">...</p>
    </aside>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>

<style lang="scss">
.page-component {
  &__aside {
  }
  &__main {
    padding: 20px;
    background-color: $colorBgWhite;
  }
}
</style>
