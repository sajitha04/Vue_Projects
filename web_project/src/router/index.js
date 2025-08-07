import { createRouter,createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Works from "../components/Works.vue";
import Contact from "../components/Contact.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:'/',
            component:Home
        },
        {
            path:'/about',
            component:About
        },
        {
            path:'/works',
            component:Works
        },
         {
            path:'/Contact',
            component: Contact,
        }
    ]
})

export default router;