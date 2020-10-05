import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/hatchet",
    name: "Hatchet",
    component: () => import("../views/Hatchet.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
