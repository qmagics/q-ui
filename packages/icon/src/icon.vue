<template>
  <i :class="name"></i>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "QIcon",
  props: {
    name: String,
  },
  setup() {},
});
</script>
