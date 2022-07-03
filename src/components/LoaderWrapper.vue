<template>
  <template v-if="loaded">
    <slot />
  </template>
  <template v-else>
    <div class="loader-wrapper">
      <span class="loader"></span>
    </div>
  </template>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    loaded: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
});
</script>

<style lang="less" scoped>
.loader-wrapper {
  margin: calc(5 * var(--base-margin)) auto;
  text-align: center;
}

//
//  This one is from https://tobiasahlin.com/spinkit/
//
.loader {
  width: 75px;
  height: 75px;
  background: var(--color-accent);
  display: inline-block;
  border-radius: 50%;
  box-sizing: border-box;
  animation: animloader 750ms ease-in infinite;
}

@keyframes animloader {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
</style>
