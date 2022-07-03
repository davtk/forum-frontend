<template>
  <div class="comment">
    <span class="avatar">
      <img v-if="comment.avatar_link" :src="comment.avatar_link" alt="avatar" />
      <img
        v-else
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII="
      />
    </span>
    <span class="author">
      <p class="nickname">{{ comment.nickname }}</p>
      <FancyTime class="posted" :input="new Date(comment.posted)" />
    </span>
    <div class="message">{{ comment.message }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Comment_Detail } from "@/schema";
import FancyTime from "@/components/FancyTime.vue";

export default defineComponent({
  components: { FancyTime },
  props: {
    comment: {
      type: Object as () => Comment_Detail,
      required: true,
    },
  },
});
</script>

<style lang="less" scoped>
.comment {
  padding: var(--base-margin);
  margin-bottom: var(--base-margin);
  background: rgba(0, 0, 0, 0.05);
  border-radius: 15px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;

  .avatar {
    flex: 0 0 50px;

    img {
      width: 35px;
      height: 35px;
      border-radius: 100%;
    }
  }

  .author {
    flex: 0 0 calc(100% - 50px);

    .nickname {
      color: var(--color-accent);
      font-weight: bold;
      font-size: 1.25em;
    }

    .posted {
      opacity: 0.5;
    }
  }

  .message {
    order: 40;

    flex: 0 0 100%;
    margin-top: calc(var(--base-margin) / 2);
  }
}
</style>
