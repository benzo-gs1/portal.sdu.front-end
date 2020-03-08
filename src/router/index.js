import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("@/views/TheHomePage"),
      alias: "/home-page"
    },
    {
      path: "/auth",
      component: () => import("@/views/TheAuth")
    }
  ]
});

export default router;
