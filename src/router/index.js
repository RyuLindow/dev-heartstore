import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Merch from "../views/Merch.vue";
import About from "../views/About.vue";
import Blog from "../views/Blog.vue";
import Post from "../views/BlogPost.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/merch",
    name: "Merch",
    component: Merch
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog
  },
  {
    path: "/post",
    name: "Post",
    component: Post
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
