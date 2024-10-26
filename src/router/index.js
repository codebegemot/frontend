import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import EventDetails from "../views/EventDetails.vue";
import UserProfile from "../views/UserProfile.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/event/:id", name: "EventDetails", component: EventDetails },
  { path: "/profile", name: "UserProfile", component: UserProfile }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
