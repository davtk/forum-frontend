<template>
  <span :title="new Date(input).toLocaleString()">
    {{ value }}
  </span>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);

export default defineComponent({
  props: {
    input: {
      type: Date,
      required: true,
    },
  },
  setup(props) {
    return {
      value: computed(() => {
        return new TimeAgo("en").format(props.input);
      }),
    };
  },
});
</script>

<style lang="less" scoped></style>
