<template>
  <button
    :class="[
      'q-button',
      `q-button--size-${size}`,
      `q-button--type-${type}`,
      `q-button--state-${state}`,
      {
        'is--disabled':disabled,
        'is--loading':loading,
      }
    ]"
    :type="nativeType"
    :autofocus="autofocus"
    @click="handleClick"
  >
    <span class="q-button-icon" v-if="loading || icon">
      <!-- <q-icon-loading v-if="loading" name="q-icon-loading"></q-icon-loading> -->
      <!-- <component v-else :is="icon"></component> -->
      <q-icon v-if="loading" name="q-icon-loading"></q-icon>
      <q-icon :name="icon"></q-icon>
    </span>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script lang="ts">
import { defineComponent, PropType, Component } from "vue";
type ButtonNativeType = "button" | "submit" | "reset";

export default defineComponent({
  name: "QButton",
  props: {
    loading: Boolean,
    icon: {
      type: [String, Object] as PropType<string | Component>,
      default: "",
    },
    size: {
      type: String,
      default: "medium",
    },
    type: {
      type: String,
      default: "secondary",
    },
    nativeType: {
      type: String as PropType<ButtonNativeType>,
      default: "button",
    },
    state: {
      type: String,
      default: "default",
    },
    disabled: Boolean,
    autofocus: Boolean,
  },
  emits: {
    click: (e: MouseEvent) => e instanceof MouseEvent,
  },
  setup(props, { emit }) {
    const handleClick = (e: MouseEvent) => {
      emit("click", e);
    };
    return {
      handleClick,
    };
  },
});
</script>