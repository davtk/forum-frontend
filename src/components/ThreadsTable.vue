<template>
  <div v-if="threads?.length" class="threads-table">
    <div class="header">
      <div class="col-name">Topic</div>
      <div class="col-author">Author</div>
      <div class="col-comments">Comments</div>
      <div class="col-created">Created</div>
    </div>
    <div class="body">
      <div v-for="thread of threads" :key="thread.uuid">
        <div class="col-name">
          <router-link :to="paths.DETAIL__ID.replace(':id', thread.uuid)">
            {{ thread.topic }}
          </router-link>
        </div>
        <div class="col-author">
          <template v-if="thread.comments[0]">
            <img :src="thread.comments[0].avatar_link" alt="Avatar" />
            {{ thread.comments[0].nickname }}
          </template>
        </div>
        <div class="col-comments">
          {{ thread.comments.length }}
          <span class="lbl-mobile-only"> comments</span>
        </div>
        <div class="col-created">
          <span class="lbl-mobile-only">created </span>
          <FancyTime :input="new Date(thread.created)" />
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="undraw">
      <img src="@/assets/undraw_conversation_re_c26v.svg" alt="no threads" />
      <p>
        no threads here 🤔<br />
        let's create new one!
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import paths from "@/router/paths";
import FancyTime from "@/components/FancyTime.vue";

export default defineComponent({
  components: { FancyTime },
  setup() {
    // Dependencies
    const store = useStore();

    // View vars
    const threads = computed(() => store.getters["threads/get"]);

    return {
      threads,
      paths,
    };
  },
});
</script>

<style lang="less" scoped>
@breakpoint-desktop: 850px;

.lbl-mobile-only {
  @media (min-width: @breakpoint-desktop) {
    display: none;
  }
}

.threads-table {
  .header,
  .body > div {
    display: flex;
    flex-direction: row;
    align-items: center;

    // Columns
    > div {
      padding: 5px 10px;
    }
  }

  .header {
    @media (max-width: @breakpoint-desktop) {
      display: none;
    }

    // Row
    > div {
      line-height: 2.5;
      font-size: 1.2em;
      background: rgba(0, 0, 0, 0.05);
      font-weight: bold;
    }
  }

  .body {
    // Row
    > div {
      line-height: 2;
      flex-wrap: wrap;

      // Column
      > div {
      }
    }

    @media (max-width: @breakpoint-desktop) {
      padding: 0 10px;

      > div {
        padding: var(--base-margin);
        margin-bottom: var(--base-margin);
        background: rgba(0, 0, 0, 0.05);
        border-radius: 15px;
      }
    }
  }

  .col-name {
    flex: 0 0 100%;

    font-size: 1.5em;

    @media (min-width: @breakpoint-desktop) {
      flex: 1 0 250px;
      font-size: 1em;
    }
  }

  .col-author {
    flex: 0 0 100%;

    @media (min-width: @breakpoint-desktop) {
      flex: 0 0 250px;
    }

    display: inline-flex;
    align-items: center;

    img {
      height: 2em;
      width: 2em;
      border-radius: 100%;
      margin-right: 10px;
    }
  }

  .col-comments {
    flex: 0 0 50%;

    @media (min-width: @breakpoint-desktop) {
      flex: 0 0 100px;
      text-align: center;
    }
  }

  .col-created {
    flex: 0 0 50%;
    text-align: right;

    @media (min-width: @breakpoint-desktop) {
      flex: 0 0 250px;
    }
  }
}
</style>
