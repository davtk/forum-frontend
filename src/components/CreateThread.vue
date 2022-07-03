<template>
  <section>
    <h2>Anything to tell us?</h2>

    <div class="form" @keydown.enter="create">
      <div>
        <label>Nickname:</label>
        <div>
          <input
            type="text"
            :disabled="working"
            v-model="request.nickname"
            placeholder="Monster"
          />
        </div>
      </div>

      <div>
        <label>E-mail:</label>
        <div>
          <input
            type="email"
            :disabled="working"
            v-model="request.email"
            placeholder="monster@gmail.com"
          />
        </div>
      </div>

      <div>
        <label>Topic:</label>
        <div>
          <input
            type="text"
            :disabled="working"
            v-model="request.topic"
            placeholder="To be, or not to be, that is the question"
          />
        </div>
      </div>

      <div>
        <label>Message:</label>
        <div>
          <textarea
            :disabled="working"
            placeholder="Hello. My name is Monster and I am addicted to cookies."
            v-model="request.message"
          ></textarea>

          <p class="muted">{{ msgLength }}</p>
        </div>
      </div>

      <div>
        <label></label>
        <div>
          <button
            @click="create"
            :disabled="!allowSubmit"
            class="button icon-right"
          >
            Create thread

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-arrow-narrow-right"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <line x1="15" y1="16" x2="19" y2="12"></line>
              <line x1="15" y1="8" x2="19" y2="12"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import paths from "@/router/paths";
import { Thread_Create } from "@/schema";

export default defineComponent({
  setup() {
    // Dependencies
    const store = useStore();
    const router = useRouter();

    // View vars
    const working = ref<boolean>(false);
    const request = reactive({
      nickname: "",
      email: "",
      topic: "",
      message: "",
    } as Thread_Create);
    const allowSubmit = computed(
      () =>
        request.nickname &&
        request.nickname > "" &&
        request.email &&
        request.email > "" &&
        request.topic &&
        request.topic > "" &&
        request.message &&
        request.message > "" &&
        !working.value
    );

    // Fce
    const create = () => {
      if (!allowSubmit.value) {
        return;
      }

      working.value = true;
      store.dispatch("threads/create", request).then((thread) => {
        router.push(paths.DETAIL__ID.replace(":id", thread.uuid));
        working.value = false;
      });
    };

    return {
      request,

      working,
      allowSubmit,

      create,

      msgLength: computed(() => {
        let msg = `${request.message?.length ?? 0} chars. `;

        if (!request.message) {
          msg += `Don't worry ${
            request.nickname || "unknown friend"
          }, it's easy! 😊`;
        } else if (request.message.length > 1000) {
          msg +=
            "Wow it's pretty long 😱. Just don't write anything personal or I will have to manage Privacy Policy.";
        } else if (request.message.length > 100) {
          msg += "It looks like some message 🤔";
        } else if (request.message.length > 0) {
          msg += `Good job, that's it! 👍`;
        }

        return msg;
      }),
    };
  },
});
</script>
<style lang="less">
section {
  margin-top: calc(2 * var(--base-margin));

  padding: 0 10px;
}
</style>
