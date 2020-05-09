import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import WelcomePage from "@/views/WelcomePage/index.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/sign-in",
    component: () => import("@/views/SignInPage/index.vue"),
  },
  {
    path: "/welcome",
    component: WelcomePage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
