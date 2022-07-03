import { ActionTree, GetterTree, Module, MutationTree } from "vuex";
import { StoreState } from "@/store";
import { Thread_Create, Thread_Detail, ThreadsService } from "@/schema";

interface ThreadsState {
  loaded: boolean;
  threads: Array<Thread_Detail>;
}

const state: ThreadsState = {
  loaded: false,
  threads: [],
};

const getters: GetterTree<ThreadsState, StoreState> = {
  isLoaded(state): boolean {
    return state.loaded;
  },

  get(state) {
    return state.threads;
  },
};

const mutations: MutationTree<ThreadsState> = {
  setLoaded(state, loaded: boolean) {
    state.loaded = loaded;
  },

  setThreads(state, threads: Array<Thread_Detail>) {
    state.threads = threads;
  },
};

const actions: ActionTree<ThreadsState, StoreState> = {
  fetch(context): Promise<void> {
    context.state.loaded = false;

    return new Promise((resolve) => {
      ThreadsService.getThreads().then((threads) => {
        context.commit("setThreads", threads);
        context.commit("setLoaded", true);
        console.log("O.O");
        resolve();
      });
    });
  },

  create(context, request: Thread_Create): Promise<Thread_Detail> {
    return new Promise((resolve) => {
      ThreadsService.createThread(request).then((thread) => {
        resolve(thread);
      });
    });
  },
};

export const threadsModule: Module<ThreadsState, StoreState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
