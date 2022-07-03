<template>
  <LoaderWrapper :loaded="loaded">
    <ThreadsTable />
    <CreateThread />
  </LoaderWrapper>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import ThreadsTable from "@/components/ThreadsTable.vue";
import CreateThread from "@/components/CreateThread.vue";
import { useStore } from "vuex";
import LoaderWrapper from "@/components/LoaderWrapper.vue";

export default defineComponent({
  components: { LoaderWrapper, CreateThread, ThreadsTable },
  setup() {
    // Dependencies
    const store = useStore();

    // Events
    onMounted(() => {
      store.dispatch("threads/fetch");
    });

    return {
      loaded: computed(() => store.getters["threads/isLoaded"]),
    };
  },
});
</script>
