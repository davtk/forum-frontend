import { ActionTree, GetterTree, Module, MutationTree } from "vuex";
import { StoreState } from "@/store";
import { format } from "date-fns";
import {
  Comment_Create,
  Comment_Detail,
  Thread_Detail,
  ThreadsService,
} from "@/schema";

interface ThreadState {
  loaded: boolean;
  thread: Thread_Detail | null;
}

const state: ThreadState = {
  loaded: false,
  thread: null,
};

const getters: GetterTree<ThreadState, StoreState> = {
  isLoaded(state): boolean {
    return state.loaded;
  },

  get(state): Thread_Detail | null {
    return state.thread;
  },
};

const mutations: MutationTree<ThreadState> = {
  setLoaded(state, loaded: boolean) {
    state.loaded = loaded;
  },

  setThread(state, thread: Thread_Detail | null) {
    state.thread = thread;
  },
};

const actions: ActionTree<ThreadState, StoreState> = {
  fetch(context, uuid: string): Promise<void> {
    context.commit("setLoaded", false);

    return new Promise((resolve) => {
      ThreadsService.getThread(uuid).then(
        (thread) => {
          context.commit("setThread", thread);
          context.commit("setLoaded", true);
          resolve();
        },
        () => {
          context.commit("setThread", null);
          context.commit("setLoaded", true);
          resolve();
        }
      );
    });
  },

  comment(context, request: Comment_Create): Promise<void> {
    return new Promise((resolve) => {
      if (!context.state.thread?.uuid) {
        throw new Error("No thread is loaded in store.");
      }

      // Optimistic UI - project expected state
      context.state.thread.comments?.push({
        nickname: request.nickname,
        email: request.email,
        message: request.message,
        posted: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
      } as Comment_Detail);

      // Submit & confirm with backend
      ThreadsService.commentThread(context.state.thread.uuid, request).then(
        (thread) => {
          context.commit("setThread", thread);
          resolve();
        }
      );
    });
  },
};

export const threadModule: Module<ThreadState, StoreState> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
