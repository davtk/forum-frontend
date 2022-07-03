import { createStore } from "vuex";
import { threadsModule } from "@/store/threads";
import { threadModule } from "@/store/thread";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StoreState {}

export default createStore<StoreState>({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    threads: threadsModule,
    thread: threadModule,
  },
});
