import FormDetails from "@/components/FormDetails.vue";
import FormPage from "@/components/FormPage.vue";
import HomePage from "@/components/HomePage.vue";
import InboxPage from "@/components/InboxPage.vue";
import Login from "@/components/Login.vue";
import NavBar from "@/components/NavBar.vue";
import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Login,
    },
    {
      path: "/nav",
      component: NavBar,
      redirect: "/nav/home",
      children: [
        { path: "home", component: HomePage },
        { path: "form", component: FormPage
         },
         {path:"form/formdetails", component:FormDetails},
        { path: "inbox", component: InboxPage },
      ],
    },
  ],
});
export default router;
