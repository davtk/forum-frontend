import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DetailView from "@/views/DetailView.vue";
import paths from "@/router/paths";

const routes: Array<RouteRecordRaw> = [
  {
    path: paths.HOME,
    name: "home",
    component: HomeView,
  },

  {
    path: paths.DETAIL__ID,
    name: "detail",
    component: DetailView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
