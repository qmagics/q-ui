import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        redirect: "/start",
        component: () => import("@/views/start/index.vue"),
    },
    {
        path: "/component",
        component: () => import("@/views/component/index.vue"),
        redirect: "/component/button",
        children: [
            {
                path: "button",
                component: () => import("@/views/component/button/index.vue")
            },
            {
                path: "icon",
                component: () => import("@/views/component/icon/index.vue")
            }
        ]
    },
];

const router = createRouter({
    routes,
    history: createWebHashHistory()
});

export default router;