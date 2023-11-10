import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {
        path: "/",
        redirect: "/home"
    },
    {
        path: "/home",
        component: () => import("@/views/HomeView.vue")
    },
    {
        path: "/about",
        component: () => import("@/views/AboutView.vue")
    },
    {
        path: "/market",
        component: () => import("@/views/MarketView.vue")
    },
    {
        path: "/newsLetter",
        component: () => import("@/views/NewsLetter.vue")
    },
];

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
});

export default router;