<template>
  <LoaderWrapper :loaded="isLoaded">
    <div class="detail" v-if="thread">
      <h2><span>Topic:</span> {{ thread.topic }}</h2>

      <div>
        <ThreadComment
          v-for="comment of thread.comments"
          :key="comment.uuid"
          :comment="comment"
        />
      </div>

      <AddComment />
    </div>
    <div v-else>
      <div class="undraw">
        <img src="@/assets/undraw_taken_re_yn20.svg" />
        <p>thread you are looking for probably not exists</p>
      </div>
    </div>
  </LoaderWrapper>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import ThreadComment from "@/components/ThreadComment.vue";
import AddComment from "@/components/AddComment.vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import LoaderWrapper from "@/components/LoaderWrapper.vue";

export default defineComponent({
  components: { LoaderWrapper, AddComment, ThreadComment },
  setup() {
    // Dependencies
    const store = useStore();
    const route = useRoute();

    // View vars
    const thread = computed(() => store.getters["thread/get"]);

    onMounted(() => {
      store.dispatch("thread/fetch", route.params.id.toString());
    });

    return {
      thread,

      isLoaded: computed(() => store.getters["thread/isLoaded"]),
    };
  },
});
</script>

<style lang="less" scoped>
h2 > span {
  color: var(--color-muted);
}

.detail {
  padding: 0 10px;
}
</style>
