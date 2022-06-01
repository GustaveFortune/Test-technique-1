import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import UserProfile from "../views/UserProfile.vue";
import Error404 from "../views/Error404.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/userprofile",
    name: "UserProfile",
    component: UserProfile,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "error404",
    component: Error404,
  },
];

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: routes,
});

export default router;
