<template>
  <div class="demo-page--button">
    <app-demo-block
      v-for="i in config.demos"
      :source="i.source"
      :id="i.id"
      :title="i.title"
      :subtitle="i.description"
    >
      <component :is="i.component"></component>
    </app-demo-block>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import AppDemoBlock from '@/components/AppDemoBlock/index.vue';
import config from "./config";

export default defineComponent({
  components: {
    AppDemoBlock,
  },
  setup() {
    return {
      config
    }
  },
});
</script>

<style lang="scss">
.demo-page--button {
  .q-button {
    margin: 0 8px 12px 0;
  }
}
</style>
