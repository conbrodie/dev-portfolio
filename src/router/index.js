import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
// import ProjectArchive from "../views/ProjectArchive.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // {
  //   path: "/archive",
  //   name: "ProjectArchive",
  //   component: ProjectArchive,
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
