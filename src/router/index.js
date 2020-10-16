import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/hatchet",
    name: "Hatchet",
    component: () => import("../views/Hatchet.vue"),
  },
  {
    path: "/redguard",
    name: "Redguard",
    component: () => import("../views/Redguard.vue"),
  },
  {
    path: "/voidwarden",
    name: "Voidwarden",
    component: () => import("../views/Voidwarden.vue"),
  },
  {
    path: "/demolitionist",
    name: "Demolitionist",
    component: () => import("../views/Demolitionist.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
